import { withStyles } from "@material-ui/core";
import React, { Component } from "react";

import "../header/header.scss";
import SelectComponent from "../selectComponent/select_component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, withRouter } from "react-router-dom";
import { style } from "./headerStyle";
import { connect } from "react-redux";
import { signOutApi } from "../../stores/actions/movie.action";
import logo from "./logo/tix_logo.png";
// import admin_logo from "./logo/Admin_logo.jpg/";
import admin from "./logo/server_admin.png";
import { SIGN_IN } from "../../stores/constants/movie.const";
import { Link } from "react-scroll";
import GioHang from "./gioHang";

class Header extends Component {
  getUserFromLocal = () => {
    const user = localStorage.getItem("userLogin");
    if (user) {
      this.props.dispatch({
        type: SIGN_IN,
        payload: JSON.parse(user),
      });
    }
  };
  handleToggleHeader() {
    const navbar_header = document.getElementsByClassName("navbar-header")[0];
    if (navbar_header) {
      navbar_header.style.height = "100%";
    }

    //logo
    const log_header = document.getElementsByClassName("brand-title")[0];
    if (log_header) {
      log_header.style.visibility = "collapse";
    }
  }

  handleHideToggleHeader() {
    const navbar_header = document.getElementsByClassName("navbar-header")[0];
    if (navbar_header) {
      navbar_header.style.height = "4rem";
    }

    const log_header = document.getElementsByClassName("brand-title")[0];
    if (log_header) {
      log_header.style.visibility = "visible";
    }
  }

  handleToggle = () => {
    this.handleToggleHeader();
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    if (navbarLinks) {
      navbarLinks.classList.add("active");
    }
    const chevronRight =
      document.getElementsByClassName("hide-toggleButton")[0];
    if (chevronRight) {
      chevronRight.style.visibility = "visible";
    }
  };

  //nhấn mũi tên để back lại toggle button
  handleHome = () => {
    this.props.history.push("/");
  };

  handleHideToggle = () => {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    if (navbarLinks) {
      navbarLinks.classList.remove("active");
    }

    const chevronRight =
      document.getElementsByClassName("hide-toggleButton")[0];
    if (chevronRight) {
      chevronRight.style.visibility = "collapse";
    }

    setTimeout(this.handleHideToggleHeader, 300);
    // this.handleHome();
  };

  handleSignOut = () => {
    this.props.dispatch(signOutApi(this.props.history));
  };

  signOut_hideToggle = () => {
    this.handleSignOut();
    this.handleHideToggle();
  };

  renderAdminLogo = () => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    const maLoaiNguoiDung = userLogin?.maLoaiNguoiDung;
    return maLoaiNguoiDung === "QuanTri" ? (
      <NavLink className="ml-3" to="/admin" exact>
        <img style={{ width: "50px" }} src={admin} alt="" />
      </NavLink>
    ) : (
      ""
    );
  };

  render() {
    const { classes, user, gioHang, ticket_info } = this.props; //sau khi import withStyle và headerStyle => xuất hiện props classes

    let renderUserToggle;
    if (user) {
      renderUserToggle = (
        <>
          <li onClick={this.handleHideToggle}>
            <NavLink to="/user-profile">
              <FontAwesomeIcon
                className="text-success"
                style={{ color: "white", marginRight: "10px" }}
                icon="user-circle"
              />
              <span className="text-success">{user.taiKhoan}</span>
            </NavLink>
          </li>
          <li className="gioHang" onClick={this.handleHideToggle}>
            <a
              data-toggle="modal"
              href="#booking_ticket_info"
              className="ml-3 text-danger"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon="shopping-cart" /> ({gioHang?.length})
            </a>
          </li>
        </>
      );
    } else {
      renderUserToggle = (
        <li onClick={this.handleHideToggle}>
          <NavLink to="/sign-in">Đăng nhập</NavLink>
        </li>
      );
    }
    let renderUser;
    if (user) {
      renderUser = (
        <>
          <NavLink to="/user-profile" exact className={classes.txtNavLink}>
            <span style={{ cursor: "pointer" }} className="text-success">
              {user.taiKhoan}
            </span>
          </NavLink>
          <a
            // onClick={this.handleSignOut}
            data-toggle="modal"
            href="#booking_ticket_info"
            className="ml-3 text-danger"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon="shopping-cart" /> ({gioHang?.length})
          </a>
          <a
            onClick={this.handleSignOut}
            className="ml-3 text-danger"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Đăng xuất
          </a>
        </>
      );
    } else {
      renderUser = (
        <NavLink
          activeClassName={classes.activateNav}
          className={classes.txtNavLink}
          to="/sign-in"
          exact
        >
          <span>Đăng Nhập</span>
        </NavLink>
      );
    }

    return (
      <>
        <nav className="navbar-header navbar">
          <div className="brand-title">
            <NavLink to="/" exact>
              <img style={{ width: "50px" }} src={logo} alt="" />
            </NavLink>
            {this.renderAdminLogo()}
          </div>
          <a className="toggle-button" onClick={this.handleToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="navbar-links">
            <ul>
              {/* tạm thời dùng a => sau này chuyển thành navLink trong router-dom  */}
              {/* tạo thêm 1 button để trở về trạng thái ban đầu, nhưng button này sẽ được ẩn */}
              <li>
                <a
                  className="hide-toggleButton"
                  onClick={this.handleHideToggle}
                >
                  <FontAwesomeIcon icon="chevron-right" />
                </a>
              </li>

              {renderUserToggle}
              {/* muốn lưu dữ liệu trên header mỗi khi refresh trang cần xử lý thêm ở app.js */}

              <li>
                <Link
                  onClick={this.handleHideToggle}
                  to="schedule"
                  smooth={true}
                  duration={1000}
                >
                  Lịch Chiếu
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.handleHideToggle}
                  to="intro"
                  smooth={true}
                  duration={1000}
                >
                  Cụm Rạp
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.handleHideToggle}
                  to="intro"
                  smooth={true}
                  duration={1000}
                >
                  Tin Tức
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.handleHideToggle}
                  to="homeApp"
                  smooth={true}
                  duration={1000}
                >
                  Ứng Dụng
                </Link>
              </li>
              {user ? (
                <li className="signOutButton" onClick={this.signOut_hideToggle}>
                  <NavLink to="/">
                    <span className="text-danger">Đăng xuất</span>
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
          <ul className="login_location">
            <li className="login">
              <FontAwesomeIcon
                className={`${user ? "text-success" : ""}`}
                style={{ marginRight: "10px" }}
                icon="user-circle"
              />
              {renderUser}
            </li>
            <li className="location ">
              <FontAwesomeIcon
                style={{ margin: "14px 2px 0 0" }}
                icon="map-marker-alt"
              />

              <SelectComponent />
            </li>
          </ul>
        </nav>
        <GioHang gioHang={gioHang} ticket_info={ticket_info} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.cinemaReducer.userLogin,
    gioHang: state.cinemaReducer.store.tickets,
    ticket_info: state.cinemaReducer.store.cinema_info,
  };
};

export default withRouter(connect(mapStateToProps)(withStyles(style)(Header)));
//muốn dùng classes trong class component => import withStyles, tạo một file signInStyle
