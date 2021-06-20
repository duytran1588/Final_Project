import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import "./selectMovieName.scss";
import { searchMovie } from "../../../stores/actions/movie.action";
import { useDispatch, useSelector } from "react-redux";
import FormHelperText from "@material-ui/core/FormHelperText";
import format from "date-format";

function SelectMovieName() {
  const [movieName, setMovieName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setMovieName(value);
  };

  const movieSearch = useSelector((state) => {
    return state.movieReducer.movieSearch;
  });

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchMovie(movieName));
  };

  const handleCancel = () => {};

  // console.log("movieSearch", movieSearch);
  //chưa muốn render liền vậy nên đặt trong componentDidupdate

  const renderMovieSearch = () => {
    if (movieSearch.length !== 0) {
      return (
        <table className="table table-dark search_movie table-hover container">
          <thead>
            <tr>
              <th style={{ width: "10rem" }}>Tên phim</th>
              <th>Mô tả</th>
              <th style={{ width: "6rem" }}>Đánh giá</th>
              <th style={{ width: "12rem" }}>Ngày chiếu</th>
              <th style={{ width: "7rem" }}></th>
            </tr>
          </thead>
          <tbody>
            {movieSearch.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>{movie.tenPhim}</td>
                  <td>{movie.moTa}</td>
                  <td>{movie.danhGia}</td>
                  <td>
                    {format(
                      "dd/MM/yyyy hh:mm:ss",
                      new Date(movie.ngayKhoiChieu)
                    )}
                  </td>
                  <td>
                    <button
                      style={{ width: "6rem" }}
                      className="btn btn-success"
                    >
                      Đặt vé
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="buyTicketForm mb-5">
        <Input
          onChange={handleChange}
          placeholder="Nhập tên phim"
          inputProps={{ "aria-label": "description" }}
          aria-describedby="component-error-text"
        />

        <Button type="submit" variant="contained" className="btnBuyTicket">
          Tìm kiếm
        </Button>
      </form>
      {renderMovieSearch()}
    </div>
  );
}

export default SelectMovieName;
