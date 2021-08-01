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
    postsPerPage: 10, //10 user trên 1 trang
    currentPage: 1, //trang hiện hành
    pageNumberLimit: 10, //mỗi lần mở ra thêm 10 ô chuyển trang (set < 10)
    maxPageNumberLimit: 10, //số ô chuyển trang tối đa trong 1 lần mở (ban đầu set bằng pageNumberLimit luôn)
    minPageNumberLimit: 0,

    userSearch: "",

    maxPageNumberLimit_search: 5,
    minPageNumberLimit_search: 0,
    pageNumberLimit_search: 5,
    currentPage_search: 1,
    postPerPage_search: 10,
    userFind: [],

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
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    //tạo mảng mới từ state;
    let newPosts = [...this.state.posts];
    for (let i = 0; i < newPosts.length; i++) {
      newPosts[i]["STT"] = i + 1;
    }

    let newCurrentPosts = newPosts?.slice(indexOfFirstPost, indexOfLastPost);

    return newCurrentPosts?.map((user, index) => {
      return (
        <tr key={index}>
          <td id="choose_checkbox" style={{ display: "none", width: "6rem" }}>
            <input
              style={{ width: "32px", height: "18px" }}
              type="checkbox"
              defaultValue="checkedValue"
            />
          </td>
          <td>{user.STT}</td>
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
  paginate_search = (pageNumber) => {
    this.setState({
      currentPage_search: pageNumber,
    });
    //set lại min maxPageNumberLimit mỗi khi nhấn chọn trang
    if (pageNumber % this.state.pageNumberLimit_search !== 0) {
      const min = Math.floor(pageNumber / this.state.pageNumberLimit_search); //10 dễ set nhất
      const max = Math.ceil(pageNumber / this.state.pageNumberLimit_search);
      const minPageNumberLimit_search = min * this.state.pageNumberLimit_search;
      const maxPageNumberLimit_search = max * this.state.pageNumberLimit_search;
      this.setState({
        minPageNumberLimit_search,
        maxPageNumberLimit_search,
      });
    } else {
      const res = pageNumber / this.state.pageNumberLimit_search;
      const min = res - 1;
      const max = res;
      const minPageNumberLimit_search = min * this.state.pageNumberLimit_search;
      const maxPageNumberLimit_search = max * this.state.pageNumberLimit_search;
      this.setState({
        minPageNumberLimit_search,
        maxPageNumberLimit_search,
      });
    }
  };
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
    if (pageNumber % this.state.pageNumberLimit !== 0) {
      const min = Math.floor(pageNumber / this.state.pageNumberLimit); //10 dễ set nhất
      const max = Math.ceil(pageNumber / this.state.pageNumberLimit);
      const minPageNumberLimit = min * this.state.pageNumberLimit;
      const maxPageNumberLimit = max * this.state.pageNumberLimit;
      this.setState({
        minPageNumberLimit,
        maxPageNumberLimit,
      });
    } else {
      const res = pageNumber / this.state.pageNumberLimit;
      const min = res - 1;
      const max = res;
      const minPageNumberLimit = min * this.state.pageNumberLimit;
      const maxPageNumberLimit = max * this.state.pageNumberLimit;
      this.setState({
        minPageNumberLimit,
        maxPageNumberLimit,
      });
    }
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

      //nếu trang hiện tại trừ đi 1 trang mà bằng với minPageNumberLimit thì set lại maxPageNumberLimit và minPageNumberLimit mới
      if (currentPage - 1 == minPageNumberLimit) {
        this.setState({
          maxPageNumberLimit: maxPageNumberLimit - pageNumberLimit,
          minPageNumberLimit: minPageNumberLimit - pageNumberLimit,
        });
      }
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
      pageNumberLimit_search,
      minPageNumberLimit_search,
    } = this.state;
    if (btnArrow === "prev") {
      this.setState({
        currentPage_search: currentPage_search - 1,
      });

      if (currentPage_search - 1 == minPageNumberLimit_search) {
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
    if (target == "first") {
      this.setState({
        currentPage: 1,
        maxPageNumberLimit: this.state.pageNumberLimit,
        minPageNumberLimit: 0,
      });
    }
  };

  //pagination for user searching
  paginateTarget_Searching = (target) => {
    if (target == "first") {
      this.setState({
        currentPage_search: 1,
        maxPageNumberLimit_search: this.state.pageNumberLimit_search,
        minPageNumberLimit_search: 0,
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

    let newUserFind = [...this.state.userFind];
    for (let i = 0; i < newUserFind.length; i++) {
      newUserFind[i]["STT"] = i + 1;
    }

    const newCurrentPosts = newUserFind.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    return newCurrentPosts?.map((user, index) => {
      return (
        <tr key={index}>
          <td id="choose_checkbox" style={{ display: "none", width: "6rem" }}>
            <input
              style={{ width: "32px", height: "18px" }}
              type="checkbox"
              defaultValue="checkedValue"
            />
          </td>
          <td>{user.STT}</td>
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
              alignItems: "center",
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
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
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
          disabled
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { loading: state.movieReducer.loading };
};

export default connect(mapStateToProps)(User_content);
