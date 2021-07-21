import axios from "axios";
import { GET_SHOW_TIME_LIST } from "../constants/movie.const";
import { startLoadingAction, stopLoadingAction } from "./movie.action";

export const getShowTimeList = (maPhim) => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      });
      dispatch({
        type: GET_SHOW_TIME_LIST,
        payload: res.data,
      });
      dispatch(stopLoadingAction());
    } catch (err) {
      console.log(err);
    }
  };
};


