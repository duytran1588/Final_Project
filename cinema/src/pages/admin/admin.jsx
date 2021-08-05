import React, { Component } from "react";
import UserMovieContent from "./main_content/user_movie_content";
// import User_content from "./main_content/user_content";
import Sidebar from "./sidebar/sidebar";

class Admin extends Component {
 
  render() {
   
    
    return (
      <div className="admin">
        <div style={{ margin: 0 }} className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <UserMovieContent />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
