import React, { Component } from "react";
import MovieContent from "./movie_content";
import UserContent from "./user_content";

class UserMovieContent extends Component {
  render() {
    return (
      <div className="main_content tab-content">
        {/* for user management */}
        <UserContent />
        {/* for movie management */}
        <MovieContent />
      </div>
    );
  }
}

export default UserMovieContent;
