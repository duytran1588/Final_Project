import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  startLoadingAction,
  stopLoadingAction,
} from "../../../stores/actions/movie.action";
import axios from "axios";
import Pagination_User from "../../../components/pagination/pagination_user";

class User_content extends Component {
  state = {
    posts: [],
    currentPage: 1, //trang hiện hành
    postsPerPage: 10, //12 user trên 1 trang
    pageNumberLimit: 7, //mỗi lần mở ra thêm 7 ô chuyển trang
    maxPageNumberLimit: 11, //số ô chuyển trang tối đa trong 1 lần mở
    minPageNumberLimit: 0,
    min_max_differ: 11,
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

  renderUserPageList = () => {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.posts?.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    //current post lấy phần tử từ 0 đến 9 ở trang 1
    //current post lấy phần tử từ 10 đến 19 ở trang 2
    return currentPosts?.map((user, index) => {
      return (
        <tr key={index}>
          <td id="choose_checkbox" style={{ width: "6rem" }}>
            <input
              style={{ width: "32px", height: "18px" }}
              type="checkbox"
              name
              id
              defaultValue="checkedValue"
            />
          </td>
          <td>{index + 1}</td>
          <td>{`${
            user.taiKhoan.length > 10
              ? user.taiKhoan.substring(0, 9) + " ..."
              : user.taiKhoan
          }`}</td>
          <td>{user.hoTen}</td>
          <td>{`${
            user.email.length > 10
              ? user.email.substring(0, 9) + " ..."
              : user.email
          }`}</td>
          <td>{user.soDt}</td>
          <td>
            <button className="btn btn-success mr-2">Sửa</button>
            <button className="btn btn-danger">Xóa</button>
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

  render() {
    return (
      <div
        className="main_content_user tab-pane container active"
        id="user_management"
      >
        <div
          className="text-right row border-bottom mb-3"
          style={{ padding: "1rem", justifyContent: "space-between" }}
        >
          {" "}
          <h2 className="text-center text-primary">Danh sách người dùng</h2>
          <button className="btn btn-primary">Thêm người dùng</button>
        </div>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            name
            id
            aria-describedby="helpId"
            placeholder="Nhập tài khoản hoặc họ tên người dùng"
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
            <FontAwesomeIcon icon="search" />
          </div>
        </div>

        <table
          id="admin_user_content"
          className="text-center table table-bordered table-hover myTable"
        >
          <thead className="text-primary">
            <tr>
              <th></th>
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
          <tbody>{this.renderUserPageList()}</tbody>
        </table>
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
      </div>
    );
  }
}

export default connect(null)(User_content);
