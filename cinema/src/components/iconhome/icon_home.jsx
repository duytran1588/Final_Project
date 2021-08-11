import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function IconHome() {
  return (
    <div className="icon_Home">
      <a href="/" className="iconHome">
        <FontAwesomeIcon icon="home" className="mb-3" />
        <FontAwesomeIcon icon="arrow-left" style={{ fontSize: "17px" }} />
      </a>
    </div>
  );
}

export default IconHome;
