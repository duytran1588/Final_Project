import React, { Component } from "react";
import User_Movie_Content from "./main_content/user_movie_content";
// import User_content from "./main_content/user_content";
import Sidebar from "./sidebar/sidebar";

class Admin extends Component {
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    console.log("admin");
    //ngăn ko cho admin chạy lại khi children thay đổi => componentShouldUpdate
    return (
      <div className="admin">
        <div style={{ margin: 0 }} className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <User_Movie_Content />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
