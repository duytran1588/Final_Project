import React from "react";

function Sidebar() {
  return (
    <>
      <div className="sidebar_dashboard">
        <h1>Danh mục</h1>
      </div>
      <div className="dashboard">
        <ul
          className="nav nav-pills dashboard_list"
          style={{ display: "block" }}
        >
          <li className="dashboard_item nav-item">
            <a
              style={{ backgroundColor: "transparent" }}
              class="nav-link dashboard_link active"
              data-toggle="pill"
              href="#user_management"
            >
              Quản lý người dùng
            </a>
          </li>
          <li className="dashboard_item nav-item">
            <a
              style={{ backgroundColor: "transparent" }}
              class="nav-link dashboard_link"
              data-toggle="pill"
              href="#film_management"
            >
              Quản lý phim
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
