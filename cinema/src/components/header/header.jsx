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
import admin from "./logo/server_admin.png";
import { SIGN_IN } from "../../stores/constants/movie.const";
import { Link } from "react-scroll";
import GioHang from "./gioHang";

class Header extends Component {
  // getUserFromLocal = () => {
  //   const user = localStorage.getItem("userLogin");
  //   //test userSession
  //   const userSession = sessionStorage.getItem("userLoginSession");
  //   console.log("userSession", userSession);
  //   if (user) {
  //     this.props.dispatch({
  //       type: SIGN_IN,
  //       payload: JSON.parse(user),
  //     });
  //   }
  // };
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

  //nh???n m??i t??n ????? back l???i toggle button
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
    const { classes, user, gioHang, ticket_info } = this.props; //sau khi import withStyle v?? headerStyle => xu???t hi???n props classes

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
          <NavLink to="/sign-in">????ng nh???p</NavLink>
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
            ????ng xu???t
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
          <span>????ng Nh???p</span>
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
              {/* t???m th???i d??ng a => sau n??y chuy???n th??nh navLink trong router-dom  */}
              {/* t???o th??m 1 button ????? tr??? v??? tr???ng th??i ban ?????u, nh??ng button n??y s??? ???????c ???n */}
              <li>
                <a
                  className="hide-toggleButton"
                  onClick={this.handleHideToggle}
                >
                  <FontAwesomeIcon icon="chevron-right" />
                </a>
              </li>

              {renderUserToggle}
              {/* mu???n l??u d??? li???u tr??n header m???i khi refresh trang c???n x??? l?? th??m ??? app.js */}

              <li>
                <Link
                  onClick={this.handleHideToggle}
                  to="schedule"
                  smooth={true}
                  duration={1000}
                >
                  L???ch Chi???u
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.handleHideToggle}
                  to="intro"
                  smooth={true}
                  duration={1000}
                >
                  C???m R???p
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.handleHideToggle}
                  to="intro"
                  smooth={true}
                  duration={1000}
                >
                  Tin T???c
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.handleHideToggle}
                  to="homeApp"
                  smooth={true}
                  duration={1000}
                >
                  ???ng D???ng
                </Link>
              </li>
              {user ? (
                <li className="signOutButton" onClick={this.signOut_hideToggle}>
                  <NavLink to="/">
                    <span className="text-danger">????ng xu???t</span>
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
//mu???n d??ng classes trong class component => import withStyles, t???o m???t file signInStyle
