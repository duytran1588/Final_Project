import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Sidebar() {
  return (
    <>
      <div className="sidebar_dashboard">
        <h1>Dash board</h1>
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
              <FontAwesomeIcon icon="user-circle" className="mr-2" /> Người dùng
            </a>
          </li>
          <li className="dashboard_item nav-item">
            <a
              style={{ backgroundColor: "transparent" }}
              class="nav-link dashboard_link"
              data-toggle="pill"
              href="#film_management"
            >
              <FontAwesomeIcon icon="film" className="mr-2" />
              Phim
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
