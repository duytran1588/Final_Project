import React from "react";
import { Redirect } from "react-router";

function AdminHome(props) {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const maLoaiNguoiDung = userLogin?.maLoaiNguoiDung;
  if (maLoaiNguoiDung === "QuanTri") {
    return <Redirect to="/admin" />;
  } else {
    return <Redirect to="/" />;
  }
}

export default AdminHome;
