import { Collapse } from "@material-ui/core";
import axios from "axios";
import Swal from "sweetalert2";
import {
  GET_CINEMA_LIST,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_COMING,
  MOVIE_CALENDAR,
  MOVIE_DETAIL,
  SEARCH_MOVIE,
  SIGN_IN,
  SIGN_OUT,
  UPDATE_USER,
  USER_PROFILE,
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

export const signUpAPI = (userSignUp, history) => {
  return async () => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        data: userSignUp,
      });

      Swal.fire({
        title: "Chào mừng bạn đã tham gia",
        icon: "success", //success, error, warning
        confirmButtonText: "Thành công",
      });
      //chuyển qua trang sign in
      history.push("/sign-in");
      return;
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: err.response.data,
        icon: "error", //success, error, warning
        confirmButtonText: "Vui lòng thử lại",
      });
      return;
    }
  };
};

export const signInApi = (userSignIn, history) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data: userSignIn,
      });
      //báo đăng nhập thành công

      Swal.fire({
        title: "Xin chào",
        // text: 'Do you want to continue',
        //có thể thay text bằng html
        //   html: profileContent,
        icon: "success", //success, error, warning
        confirmButtonText: "Đăng nhập thành công",
      });

      //dispatch object lên Reducer
      dispatch({
        type: SIGN_IN,
        payload: res.data,
      });

      //lưu xuống LocalStorage (accessToken, taiKhoan, maLoaiNguoiDung)
      // const { accessToken, maLoaiNguoiDung, ...userLogin } = res.data;
      // localStorage.setItem("token", JSON.stringify(accessToken));
      // // localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
      // localStorage.setItem("userLogin", JSON.stringify(userLogin));
      // localStorage.setItem("maLoaiNguoiDung", JSON.stringify(maLoaiNguoiDung));
      localStorage.setItem("userLogin", JSON.stringify(res.data));

      //trở về trang home hoặc currentPage
      if (res.data.maLoaiNguoiDung === "QuanTri") {
        // history.push("/admin")//chưa làm page admin
      } else {
        history.push("/");
      }
    } catch (err) {
      //báo đăng nhập thất bại
      Swal.fire({
        title: err.response.data,
        // text: 'Do you want to continue',
        //có thể thay text bằng html
        //   html: profileContent,
        icon: "error", //success, error, warning
        confirmButtonText: "Vui lòng thử lại",
      });
    }
  };
};

export const userProfileApi = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        data: user,
      });
      dispatch({
        type: USER_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const signOutApi = (history) => {
  return (dispatch) => {
    // xóa data dưới localStorage
    localStorage.removeItem("userLogin");
    // gửi null lên reducer
    dispatch({
      type: SIGN_OUT,
      payload: null,
    });
    //trở về home
    history.push("/");
  };
};

export const updateUserApi = (user) => {
  return async (dispatch) => {
    try {
      const userLogin = JSON.parse(localStorage.getItem("userLogin"));
      const token = userLogin.accessToken;
      const res = await axios({
        method: "PUT",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        data: user,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { thongTinDatVe, ...userProfile } = res.data;

      //đưa lại lên store để re render userProfile
      //lưu ý: vì api thông tin tài khoản có chứa thông tin đặt vé, khác với api cập nhật user (thông tin đặt vé là null) => tạm không cập nhật
      //lại thông tin đặt vé của api cập nhật user
      dispatch({
        type: UPDATE_USER,
        payload: userProfile,
      });

      //thông báo thành công
      Swal.fire({
        title: "Thông tin đã được cập nhật",
        icon: "success", //success, error, warning
        confirmButtonText: "Thành công",
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const getMovieDetail = (maPhim) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      });
      dispatch({
        type: MOVIE_DETAIL,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovieCalendar = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      });
      dispatch({
        type: MOVIE_CALENDAR,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
