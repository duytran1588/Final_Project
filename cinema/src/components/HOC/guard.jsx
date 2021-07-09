import React, { Component } from "react";
import { Redirect } from "react-router";

class Guard extends Component {
  render() {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    const maLoaiNguoiDung = userLogin?.maLoaiNguoiDung;
    return (
      <div>
        {maLoaiNguoiDung === "QuanTri" ? (
          this.props.children
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

export default Guard;
