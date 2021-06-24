import axios from "axios";
import {
  GET_CINEMA_DETAIL,
  GET_CINEMA_LIST,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_COMING,
  SEARCH_MOVIE,
} from "../constants/movie.const";

export const getMovieList = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      });
      dispatch({
        type: GET_MOVIE_LIST,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovieListComing = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
      });
      dispatch({
        type: GET_MOVIE_LIST_COMING,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchMovie = (movieName) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${movieName}`,
      });
      // console.log(res.data);
      dispatch({
        type: SEARCH_MOVIE,
        payload: res.data,
      });
    } catch (err) {
      console.log("err");
    }
  };
};

export const getCinemaList = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=gp01",
      });
      dispatch({
        type: GET_CINEMA_LIST,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};


