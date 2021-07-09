import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import "./selectMovieName.scss";
import { searchMovie } from "../../../stores/actions/movie.action";
import { useDispatch, useSelector } from "react-redux";
import format from "date-format";
import { useHistory } from "react-router";
import Loading from "../../../components/loading/loading";

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
    console.log("handletablesearch");
    if (control == 1) {
      const table_search = document.getElementById("modal_search");
      if (table_search) {
        table_search.style.visibility = "visible";
      }
    } else {
      const table_search = document.getElementById("modal_search");
      if (table_search) {
        table_search.style.visibility = "collapse";
      }
    }
  };

  const renderMovieSearch = () => {
    if (movieSearch.length !== 0) {
      return (
        <>
          <table
            id="modal_search"
            className=" table table-dark search_movie table-hover container"
          >
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
  };

  const loading = useSelector((state) => {
    return state.movieReducer.loading;
  });
  
  return (
    <div>
      <form onSubmit={handleSearch} className="buyTicketForm mb-5">
        <Input
          onChange={handleChange}
          placeholder="Nhập tên phim"
          inputProps={{ "aria-label": "description" }}
          aria-describedby="component-error-text"
        />

        <Button
          onClick={() => {
            handleTableSearch(1);
          }}
          type="submit"
          variant="contained"
          className="btnBuyTicket"
        >
          Tìm kiếm
        </Button>
      </form>
      {renderMovieSearch()}
    </div>
  );
}

export default SelectMovieName;
