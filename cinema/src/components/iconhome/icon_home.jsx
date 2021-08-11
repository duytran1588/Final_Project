import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
function IconHome() {
  return (
    <div className="icon_Home">
      <NavLink className="iconHome" to="/" exact>
        <FontAwesomeIcon icon="home" className="mb-3" />
        <FontAwesomeIcon icon="arrow-left" style={{ fontSize: "17px" }} />
      </NavLink>
    </div>
  );
}

export default IconHome;
