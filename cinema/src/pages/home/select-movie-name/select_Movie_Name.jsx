import React, { useState } from "react";

import Input from "@material-ui/core/Input";
import "./selectMovieName.scss";
import {
  searchMovie,
  stopSearchMovie,
} from "../../../stores/actions/movie.action";
import { useDispatch, useSelector } from "react-redux";
import format from "date-format";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SelectMovieName() {
  const [movieName, setMovieName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setMovieName(value);
  };

  let movieSearch = useSelector((state) => {
    return state.movieReducer.movieSearch;
  });

  const handleSearch = (event) => {
    event.preventDefault();
    if (movieName !== "") {
      dispatch(searchMovie(movieName));
    }
  };

  const history = useHistory();

  const movie_Detail = (maPhim) => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
      history.push(`/movie-detail/${maPhim}`);
    } else {
      history.push("/sign-in");
    }
  };

  const handleTableSearch = (control) => {
    if (control === 1) {
      const table_search = document.getElementById("modal_search");
      if (table_search) {
        table_search.style.display = "block";
      }
    } else {
      const table_search = document.getElementById("modal_search");
      if (table_search) {
        dispatch(stopSearchMovie());
        table_search.style.display = "none";
      }
    }
  };

  const renderMovieSearch = () => {
    if (movieSearch.length !== 0) {
      return (
        <>
          <table
            id="modal_search"
            className=" table search_movie table-hover container table-bordered"
            style={{ padding: 0 }}
          >
            <thead className="thead-dark">
              <tr>
                <th style={{ width: "10rem" }}>Tên phim</th>
                <th className="movie_search_content">Mô tả</th>
                <th className="movie_search_mark" style={{ width: "6rem" }}>
                  Đánh giá
                </th>
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
                        onClick={() => {
                          movie_Detail(movie.maPhim);
                        }}
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
            <tfoot>
              <tr>
                <td className="text-right" colSpan="5">
                  <button
                    style={{ width: "6rem" }}
                    className="btn btn-danger"
                    id="btn_close_search"
                    onClick={() => {
                      handleTableSearch(2);
                    }}
                  >
                    Đóng
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      );
    }
    return (
      <div
        id="modal_search"
        style={{
          border: "1px solid rgb(0 0 0 / 12%)",
          boxShadow: "rgb(0 0 0 / 23%) 5px 3px 22px",
          padding: "1rem",
          display: "none",
        }}
        className="container"
      >
        <h2 className="text-center">{`${
          movieName !== "" ? "Không tìm thấy" : "Vui lòng nhập tên phim"
        }`}</h2>
        <div className="text-right">
          <button
            style={{
              width: "6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="btn btn-danger"
            id="btn_close_search"
            onClick={() => {
              handleTableSearch(2);
            }}
          >
            Đóng
          </button>
        </div>
      </div>
    );
  };

  return (
    <div id="search_movie_name_result">
      <form onSubmit={handleSearch} className="searchForm mb-5">
        <Input
          onChange={handleChange}
          placeholder="Nhập tên phim"
          inputProps={{ "aria-label": "description" }}
          aria-describedby="component-error-text"
        />
        <button
          onClick={() => {
            handleTableSearch(1);
          }}
          type="submit"
          className="btn btnSearchFilm"
          style={{ boxShadow: "none" }}
        >
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
      {renderMovieSearch()}
    </div>
  );
}

export default SelectMovieName;
