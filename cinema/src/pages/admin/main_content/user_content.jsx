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
    currentPage: 1,
    postsPerPage: 70,
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
          <td>{indexOfFirstPost + 1}</td>
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
  paginateArrow = (number) => {
    if (number === 1) {
      if (this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage - 1,
        });
      }
    } else {
      if (
        this.state.currentPage <
        Math.ceil(this.state.posts.length / this.state.postsPerPage)
      ) {
        this.setState({
          currentPage: this.state.currentPage + 1,
        });
      }
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
          totalPosts={this.state.posts?.length}
          paginate={this.paginate}
          paginateArrow={this.paginateArrow}
        />
      </div>
    );
  }
}

export default connect(null)(User_content);
