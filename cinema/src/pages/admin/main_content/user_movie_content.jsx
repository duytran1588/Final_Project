
import React, { Component } from "react";
import Movie_content from "./movie_content";
import User_content from "./user_content";

class User_Movie_Content extends Component {
  render() {
    console.log("user_content");
    return (
      <div className="main_content tab-content">
        {/* for user management */}
        <User_content />
        {/* for movie management */}
        <Movie_content />
      </div>
    );
  }
}

export default User_Movie_Content;
