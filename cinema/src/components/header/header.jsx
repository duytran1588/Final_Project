import { Select } from "@material-ui/core";
import React, { Component } from "react";

import "../header/header.scss";
import SelectComponent from "../selectComponent/select_component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
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

  async handleHideToggle() {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    // navbarLinks.classList.toggle("active"); c1
    await navbarLinks.classList.remove("active");
    const chevronRight =
      document.getElementsByClassName("hide-toggleButton")[0];
    chevronRight.style.visibility = "collapse";
  }
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="brand-title">
            <img
              style={{ width: "50px" }}
              src={"./assets/images/logo/tix_logo.png"}
            />
          </div>
          <a href="#" className="toggle-button" onClick={this.handleToggle}>
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
                  href="#"
                  className="hide-toggleButton"
                  onClick={this.handleHideToggle}
                >
                  <FontAwesomeIcon icon="chevron-right" />
                </a>
              </li>
              <li>
                <a href="#">Đăng Nhập</a>
              </li>
              <li>
                <a href="#">Lịch Chiếu</a>
              </li>
              <li>
                <a href="#">Cụm Rạp</a>
              </li>
              <li>
                <a href="#">Tin Tức</a>
              </li>
              <li>
                <a href="#">Ứng Dụng</a>
              </li>
            </ul>
          </div>
          <div className="login_location">
            <div className="login">
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon="user-circle"
              />
              <span>Đăng Nhập</span>
            </div>
            <div className="location ">
              <FontAwesomeIcon
                style={{ margin: "14px 2px 0 0" }}
                icon="map-marker-alt"
              />

              <SelectComponent />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
