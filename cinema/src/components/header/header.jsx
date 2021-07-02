import { Select, withStyles } from "@material-ui/core";
import React, { Component } from "react";

import "../header/header.scss";
import SelectComponent from "../selectComponent/select_component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, withRouter } from "react-router-dom";
import { style } from "./headerStyle";
import { connect } from "react-redux";
import { signOutApi } from "../../stores/actions/movie.action";
import logo from "./logo/tix_logo.png";

class Header extends Component {
  // state = {
  //   userLogin: "",
  // }

  componentDidMount() {}
  handleToggle() {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    // navbarLinks.classList.toggle("active");//c1
    // Remove a class: element.classList.toggle("classToRemove", false);
    // Add a class: element.classList.toggle("classToAdd", true);
    navbarLinks.classList.add("active");
    const chevronRight =
      document.getElementsByClassName("hide-toggleButton")[0];
    chevronRight.style.visibility = "visible";
  }

  //nhấn mũi tên để back lại toggle button

  handleHideToggle() {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    // navbarLinks.classList.toggle("active"); c1
    navbarLinks.classList.remove("active");
    const chevronRight =
      document.getElementsByClassName("hide-toggleButton")[0];
    chevronRight.style.visibility = "collapse";
  }

  handleSignOut = () => {
    this.props.dispatch(signOutApi(this.props.history));
  };

  signOut_hideToggle = () => {
    this.handleSignOut();
    this.handleHideToggle();
  };

  render() {
    const { classes, user } = this.props; //sau khi import withStyle và headerStyle => xuất hiện props classes

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
        </>
      );
    } else {
      renderUserToggle = (
        <li onClick={this.handleHideToggle}>
          <NavLink to="sign-in">Đăng nhập</NavLink>
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
        <nav className="navbar">
          <div className="brand-title">
            <NavLink to="/" exact>
              <img
                style={{ width: "50px" }}
                src={logo}
              />
            </NavLink>
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
                <a href="">Lịch Chiếu</a>
              </li>
              <li>
                <a href="">Cụm Rạp</a>
              </li>
              <li>
                <a href="">Tin Tức</a>
              </li>
              <li>
                <a href="">Ứng Dụng</a>
              </li>
              {user ? (
                <li onClick={this.signOut_hideToggle}>
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.cinemaReducer.userLogin,
  };
};

export default withRouter(connect(mapStateToProps)(withStyles(style)(Header)));
//muốn dùng classes trong class component => import withStyles, tạo một file signInStyle
