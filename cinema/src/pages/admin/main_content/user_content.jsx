import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  startLoadingAction,
  stopLoadingAction,
} from "../../../stores/actions/movie.action";
import axios from "axios";
import Pagination_User from "../../../components/pagination/pagination_user";
import Swal from "sweetalert2";
import "../../../components/sweet-alert/sweetAlert.scss";
import Loading from "../../../components/loading/loading";
import AddUserModal from "./user-modal/addUserModal";
import EditUserModal from "./user-modal/editUserModal";

class User_content extends Component {
  state = {
    posts: [],
    postsPerPage: 10, //12 user trên 1 trang
    currentPage: 1, //trang hiện hành
    pageNumberLimit: 7, //mỗi lần mở ra thêm 7 ô chuyển trang
    maxPageNumberLimit: 11, //số ô chuyển trang tối đa trong 1 lần mở
    minPageNumberLimit: 0,
    min_max_differ: 11,
    userSearch: "",

    maxPageNumberLimit_search: 5,
    minPageNumberLimit_search: 0,
    pageNumberLimit_search: 3,
    currentPage_search: 1,
    postPerPage_search: 10,
    userFind: [],
    min_max_search_differ: 5,

    //for add user
    values: {
      hoTen: "",
      soDt: "",
      email: "",
      matKhau: "",
      taiKhoan: "",
      maLoaiNguoiDung: "KhachHang",
    },
    errors: {
      hoTen: "",
      soDt: "",
      email: "",
      matKhau: "",
      taiKhoan: "",
    },
  };

  handleChangeValueAddUser = (e) => {
    const { name, type, value } = e.target; //boc tach bien <ES6>

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    //xét lỗi rỗng
    if (value.trim() === "") {
      //loại bỏ các khoảng trắng bằng trim()
      newErrors[name] = "Vui lòng không để trống !";
    } else {
      if (type === "email") {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
          newErrors[name] = name + "  chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else if (name === "hoTen") {
        const re =
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (!value.match(re)) {
          newErrors[name] = "Họ tên không được chứa số hay kí tự đặc biệt";
        } else {
          newErrors[name] = "";
        }
      } else if (name === "soDt") {
        const re = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        if (!value.match(re)) {
          newErrors[name] = "Số điện thoại chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else {
        newErrors[name] = "";
      }
    }

    //note: setState là phương thức bất đồng bộ => hạn chế gọi trong code
    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  resetInputForm = () => {
    this.setState({
      values: {
        hoTen: "",
        soDt: "",
        email: "",
        matKhau: "",
        taiKhoan: "",
        maLoaiNguoiDung: "KhachHang",
      },
      errors: {
        hoTen: "",
        soDt: "",
        email: "",
        matKhau: "",
        taiKhoan: "",
      },
    });
  };
  handleSubmitAddUser = (e) => {
    e.preventDefault(); //ngăn submit gây reload trang
    console.log("submit");
    console.log(this.state.values);
    //xét dk cho submit
    let { values, errors } = this.state;
    //Biến xác định form hợp lệ
    let valid = true;

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        break;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;

        break;
      }
    }

    console.log(values);
    if (!valid) {
      Swal.fire({
        title: "Thông tin của Bạn chưa đúng",
        icon: "error",
        confirmButtonText: "Vui lòng thử lại",
      });
      return;
    }

    //nếu valid = true => gán thêm gp01
    const addedUser = {
      ...this.state.values,
      maNhom: "GP01",
    };

    Swal.fire({
      title: "Thêm người dùng?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
    }).then((result) => {
      if (result.isConfirmed) {
        const dataStorage = JSON.parse(localStorage.getItem("userLogin"));
        const accessToken = dataStorage.accessToken;
        console.log(addedUser);
        let promise = axios({
          method: "POST",
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
          data: addedUser,
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        promise.then((res) => {
          const addUserModalClose =
            document.getElementById("addUserModalClose");
          if (addUserModalClose) {
            addUserModalClose.click();
          }
          this.getUserPageList();
          //thoát modal

          Swal.fire({
            title: "Thêm thành công",
            icon: "success", //success, error, warning
            confirmButtonText: "Đóng",
          });
        });
        promise.catch((err) => {
          Swal.fire({
            title: err.response.data,
            icon: "error", //success, error, warning
            confirmButtonText: "Đóng",
          });
        });
      } else if (result.isDenied) {
        Swal.fire("Hủy");
      }
    });
  };

  getUserPageList = async () => {
    console.log("getUserPageList");
    this.props.dispatch(startLoadingAction());
    const res = await axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
    );
    this.props.dispatch(stopLoadingAction());

    this.setState({
      posts: res.data,
    });
  };

  handleDeleteUser = (taiKhoan) => {
    //xác nhận delete
    Swal.fire({
      title: "Xóa người dùng?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
      // buttons: {
      confirmButton: { class: "sweet-confirm" },
      // },
    }).then((result) => {
      if (result.isConfirmed) {
        const dataStorage = JSON.parse(localStorage.getItem("userLogin"));
        const accessToken = dataStorage.accessToken;
        let promise = axios({
          method: "DELETE",
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        promise.then((res) => {
          //dùng tìm kiếm tìm user, sau khi xóa xong, nhấn kết thúc tìm kiếm
          const stop_searching = document.getElementById("stop_searching");
          if (stop_searching) {
            stop_searching.click();
          }
          this.getUserPageList();
          Swal.fire({
            title: "Xóa thành công",
            icon: "success", //success, error, warning
            confirmButtonText: "Đóng",
          });
        });
        promise.catch((err) => {
          Swal.fire({
            title: err.response.data,
            icon: "error", //success, error, warning
            confirmButtonText: "Đóng",
          });
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Hủy",
          confirmButtonText: "Đóng",
        });
      }
    });
  };

  getDataFromUser = (user) => {
    console.log("getData");
    console.log(user);
    this.setState({
      values: {
        hoTen: user.hoTen,
        soDt: user.soDt,
        email: user.email,
        matKhau: user.matKhau,
        taiKhoan: user.taiKhoan,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
      },
    });
  };

  handleEditUser = (e) => {
    e.preventDefault(); //ngăn submit gây reload trang
    console.log("submit");
    //xét dk cho submit
    let { values, errors } = this.state;
    //Biến xác định form hợp lệ
    let valid = true;
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        break;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;

        break;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Thông tin của Bạn chưa đúng",
        icon: "error",
        confirmButtonText: "Vui lòng thử lại",
      });
      return;
    }

    //nếu valid = true => gán thêm gp01
    const editdUser = {
      ...this.state.values,
      maNhom: "GP01",
    };

    Swal.fire({
      title: "Cập nhật người dùng?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
    }).then((result) => {
      if (result.isConfirmed) {
        const dataStorage = JSON.parse(localStorage.getItem("userLogin"));
        const accessToken = dataStorage.accessToken;
        // console.log(addedUser);
        let promise = axios({
          method: "PUT",
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
          data: editdUser,
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        promise.then((res) => {
          const editUserModalClose =
            document.getElementById("editUserModalClose");
          if (editUserModalClose) {
            editUserModalClose.click();
          }

          const stop_searching = document.getElementById("stop_searching");
          if (stop_searching) {
            stop_searching.click();
          }
          this.getUserPageList();

          Swal.fire({
            title: "Cập nhật thành công",
            icon: "success", //success, error, warning
            confirmButtonText: "Đóng",
          });
        });
        promise.catch((err) => {
          Swal.fire({
            title: err.response.data,
            icon: "error", //success, error, warning
            confirmButtonText: "Đóng",
          });
        });
      } else if (result.isDenied) {
        Swal.fire("Hủy");
      }
    });
  };
  renderUserPageList = () => {
    console.log("rerenderUserPageList");
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    let currentPosts = this.state.posts?.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return currentPosts?.map((user, index) => {
      return (
        <tr key={index}>
          <td id="choose_checkbox" style={{ display: "none", width: "6rem" }}>
            <input
              style={{ width: "32px", height: "18px" }}
              type="checkbox"
              defaultValue="checkedValue"
            />
          </td>
          <td>{index + 1}</td>
          <td>
            {user?.taiKhoan.length > 10
              ? user.taiKhoan.substring(0, 9) + " ..."
              : user.taiKhoan}
          </td>
          <td>{user.hoTen}</td>
          <td>
            {user.email.length > 10
              ? user.email.substring(0, 9) + " ..."
              : user.email}
          </td>
          <td>{user.soDt}</td>
          <td>
            <button
              type="submit"
              data-toggle="modal"
              data-target="#editUserModal"
              className="btn btn-primary"
              //truyền data user vào ô edit
              onClick={() => {
                this.getDataFromUser(user);
              }}
            >
              <FontAwesomeIcon icon="edit" />
            </button>
            <button
              onClick={() => this.handleDeleteUser(user.taiKhoan)}
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon="trash-alt" />
            </button>
          </td>
        </tr>
      );
    });
  };

  componentDidMount() {
    this.getUserPageList();
  }

  //change page
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };
  paginate_search = (pageNumber) => {
    this.setState({
      currentPage_search: pageNumber,
    });
  };

  //change page by arrow
  paginateArrow = (btnArrow) => {
    const {
      currentPage,
      maxPageNumberLimit,
      minPageNumberLimit,
      pageNumberLimit,
    } = this.state;
    if (btnArrow === "prev") {
      this.setState({
        currentPage: currentPage - 1,
      });
      if ((currentPage - 1) % pageNumberLimit == 0) {
        this.setState({
          maxPageNumberLimit: maxPageNumberLimit - pageNumberLimit,
          minPageNumberLimit: minPageNumberLimit - pageNumberLimit,
        });
      }
      console.log(minPageNumberLimit);
      console.log(maxPageNumberLimit);
    } else {
      this.setState({
        currentPage: currentPage + 1,
      });
      if (currentPage + 1 > maxPageNumberLimit) {
        this.setState({
          maxPageNumberLimit: maxPageNumberLimit + pageNumberLimit,
          minPageNumberLimit: minPageNumberLimit + pageNumberLimit,
        });
      }
    }
  };
  paginateArrow_search = (btnArrow) => {
    const {
      currentPage_search,
      maxPageNumberLimit_search,
      minPageNumberLimit_search,
      pageNumberLimit_search,
    } = this.state;
    if (btnArrow === "prev") {
      this.setState({
        currentPage_search: currentPage_search - 1,
      });
      if ((currentPage_search - 1) % pageNumberLimit_search == 0) {
        this.setState({
          maxPageNumberLimit_search:
            maxPageNumberLimit_search - pageNumberLimit_search,
          minPageNumberLimit_search:
            minPageNumberLimit_search - pageNumberLimit_search,
        });
      }
    } else {
      this.setState({
        currentPage_search: currentPage_search + 1,
      });
      if (currentPage_search + 1 > maxPageNumberLimit_search) {
        this.setState({
          maxPageNumberLimit_search:
            maxPageNumberLimit_search + pageNumberLimit_search,
          minPageNumberLimit_search:
            minPageNumberLimit_search + pageNumberLimit_search,
        });
      }
    }
  };

  //change for first page
  paginateTarget = (target) => {
    const { posts, postsPerPage, pageNumberLimit, min_max_differ } = this.state;
    if (target == "first") {
      this.setState({
        currentPage: 1,
        maxPageNumberLimit: 11,
        minPageNumberLimit: 0,
      });
    } else {
      let maxPageSquareInt = Math.ceil(posts.length / postsPerPage); //tính số ô chuyển trang nguyên
      console.log("maxPageSquareInt", maxPageSquareInt);
      // /**
      //  * mỗi lần mở => pageNumberLimit ô
      //  * ta có tổng cộng maxPageSquareInt ô => maxPageSquareInt / pageNumberLimit => tổng số lần mở
      //  * min khởi động = 0 => mỗi lần mở min + pageNumberLimit => vị trí của min
      //  * sau khi có được tổng số lần mở: pageNumberLimit * tổng số lần
      //  */
      //tìm tổng số lần mở khi click ô 3 chấm
      const n = Math.floor(maxPageSquareInt / pageNumberLimit);
      const minPageSquareInt = n * pageNumberLimit;
      console.log(minPageSquareInt);
      //Nếu để maxPageSquareInt đúng vs thực tế thì khi nhấn nút 3 chấm sẽ không chuyển đúng tỉ lệ mặc định => gán lại
      const maxPageSquareAdjust = minPageSquareInt + min_max_differ; //vì khoảng cách giữa min và max lúc nào cũng là 11 (do đã set từ đầu)
      console.log(maxPageSquareAdjust);
      this.setState({
        maxPageNumberLimit: maxPageSquareAdjust,
        minPageNumberLimit: minPageSquareInt, //tạm dùng 80 , cần tìm ra min
        currentPage: maxPageSquareInt,
      });
    }
  };

  //pagination for user searching
  paginateTarget_Searching = (target) => {
    const {
      userFind,
      postsPerPage,
      pageNumberLimit_search,
      min_max_search_differ,
    } = this.state;
    if (target == "first") {
      this.setState({
        currentPage_search: 1,
        maxPageNumberLimit_search: 5,
        minPageNumberLimit_search: 0,
      });
    } else {
      let maxPageSquareInt = Math.ceil(userFind.length / postsPerPage); //tính số ô chuyển trang nguyên
      console.log(maxPageSquareInt);

      const n = Math.floor(maxPageSquareInt / pageNumberLimit_search); //n=1
      const minPageSquareInt = n * pageNumberLimit_search; //=3

      const maxPageSquareAdjust = minPageSquareInt + min_max_search_differ; //= 8
      console.log(maxPageSquareAdjust);
      this.setState({
        maxPageNumberLimit_search: maxPageSquareAdjust,
        minPageNumberLimit_search: minPageSquareInt,
        currentPage_search: maxPageSquareInt,
      });
    }
  };

  //search user
  handleChangeUser = (e) => {
    const { value } = e.target;
    let newUserSearch = this.state.userSearch;
    newUserSearch = value;
    this.setState({
      userSearch: newUserSearch,
    });
    //vì setState bất đồng bộ => muốn state thay đổi đồng thời với value gõ vào input thì dùng async await
    //async (e), await this.setState
  };

  handleSearchUser = async (e) => {
    e.preventDefault();

    const user = this.state.userSearch;
    this.props.dispatch(startLoadingAction());
    const res = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${user}`
    );
    this.props.dispatch(stopLoadingAction());
    if (res.data.length !== 0) {
      this.setState({
        userFind: res.data,
        currentPage_search: 1,
        maxPageNumberLimit_search: 5,
        minPageNumberLimit_search: 0,
      });
    } else {
      //không tìm thấy
      Swal.fire({
        title: "Không tìm thấy",
        text: "Vui lòng không gõ dấu",
        icon: "error", //success, error, warning
        confirmButtonText: "Đóng",
      });
    }
  };

  renderSearchUser = () => {
    const indexOfLastPost =
      this.state.currentPage_search * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.userFind?.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    return currentPosts?.map((user, index) => {
      return (
        <tr key={index}>
          <td id="choose_checkbox" style={{ display: "none", width: "6rem" }}>
            <input
              style={{ width: "32px", height: "18px" }}
              type="checkbox"
              defaultValue="checkedValue"
            />
          </td>
          <td>{index + 1}</td>
          <td>
            {user?.taiKhoan.length > 10
              ? user.taiKhoan.substring(0, 9) + " ..."
              : user.taiKhoan}
          </td>
          <td>{user.hoTen}</td>
          <td>
            {user.email.length > 10
              ? user.email.substring(0, 9) + " ..."
              : user.email}
          </td>
          <td>{user.soDt}</td>
          <td>
            <button
              type="submit"
              data-toggle="modal"
              data-target="#editUserModal"
              className="btn btn-primary"
              //truyền data user vào ô edit
              onClick={() => {
                this.getDataFromUser(user);
              }}
            >
              <FontAwesomeIcon icon="edit" />
            </button>
            <button
              onClick={() => this.handleDeleteUser(user.taiKhoan)}
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon="trash-alt" />
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { loading } = this.props;
    if (loading) {
      return <Loading />;
    }
    let { values } = this.state;
    return (
      <div
        className="main_content_user tab-pane container active"
        id="user_management"
      >
        <div
          className="text-right row border-bottom mb-3"
          style={{
            padding: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <h2 className="text-center text-primary">Danh sách người dùng</h2>
          <button
            type="submit"
            data-toggle="modal"
            data-target="#addUserModal"
            className="btn btn-primary"
            style={{ borderRadius: "50%", width: "3rem", height: "3rem" }}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
          {/* thêm modal addUser */}
        </div>

        <form onSubmit={this.handleSearchUser} className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            name="userSearch"
            id
            aria-describedby="helpId"
            placeholder="Nhập tài khoản hoặc họ tên người dùng"
            onChange={this.handleChangeUser}
          />
          <div
            style={{
              backgroundColor: "#00000047",
              width: "2.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <button className="btn" type="submit">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </form>

        <table
          id="admin_user_content"
          className="text-center table table-bordered table-hover myTable"
        >
          <thead className="text-primary">
            <tr>
              <th style={{ display: "none" }} id="choose_item"></th>
              <th>STT</th>
              <th>Tài khoản</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>
                <FontAwesomeIcon icon="cogs" />
              </th>
            </tr>
          </thead>
          <tbody id="tableUserList">
            {this.state.userFind.length == 0
              ? this.renderUserPageList()
              : this.renderSearchUser()}
          </tbody>
        </table>
        {this.state.userFind.length == 0 ? (
          <Pagination_User
            postsPerPage={this.state.postsPerPage}
            totalPosts={this.state.posts?.length} //tất cả user thực tế
            paginate={this.paginate}
            paginateArrow={this.paginateArrow}
            maxPageNumberLimit={this.state.maxPageNumberLimit}
            minPageNumberLimit={this.state.minPageNumberLimit}
            currentPage={this.state.currentPage}
            paginateTarget={this.paginateTarget}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Pagination_User
              postsPerPage={this.state.postsPerPage}
              totalPosts={this.state.userFind?.length} //tất cả user thực tế
              paginate={this.paginate_search}
              paginateArrow={this.paginateArrow_search}
              maxPageNumberLimit={this.state.maxPageNumberLimit_search}
              minPageNumberLimit={this.state.minPageNumberLimit_search}
              currentPage={this.state.currentPage_search}
              paginateTarget={this.paginateTarget_Searching}
            />
            <button
              id="stop_searching"
              className="btn btn-danger"
              onClick={() => {
                this.setState({
                  userFind: [],
                });
              }}
            >
              Kết thúc
            </button>
          </div>
        )}
        <AddUserModal
          values={this.state.values}
          errors={this.state.errors}
          handleChangeValue={this.handleChangeValueAddUser}
          handleSubmit={this.handleSubmitAddUser}
          title={""}
          button={"Thêm"}
          resetInputForm={this.resetInputForm}
          idClose={"addUserModalClose"}
        />
        <EditUserModal
          values={this.state.values}
          errors={this.state.errors}
          handleChangeValue={this.handleChangeValueAddUser}
          handleSubmit={this.handleEditUser}
          title={""}
          button={"Cập nhật"}
          resetInputForm={this.resetInputForm}
          idClose={"editUserModalClose"}
          disabled={"true"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { loading: state.movieReducer.loading };
};

export default connect(mapStateToProps)(User_content);
