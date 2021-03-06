import axios from "axios";
import Swal from "sweetalert2";
import {
  BOOKING_TICKET,
  CHAIR_CHOICE,
  GET_CINEMA_LIST,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_COMING,
  MOVIE_CALENDAR,
  MOVIE_DETAIL,
  SEARCH_MOVIE,
  SIGN_IN,
  SIGN_OUT,
  START_LOADING,
  STOP_LOADING,
  STOP_SEARCHING_MOVIE,
  UPDATE_USER,
  USER_PROFILE,
} from "../constants/movie.const";

export const getMovieList = () => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
    try {
      const res = await axios({
        method: "GET",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      });
      dispatch({
        type: GET_MOVIE_LIST,
        payload: res.data,
      });
      dispatch(stopLoadingAction());
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
    dispatch(startLoadingAction());
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${movieName}`,
      });
      dispatch({
        type: SEARCH_MOVIE,
        payload: res.data,
      });
      dispatch(stopLoadingAction());
    } catch (err) {
      console.log("err");
    }
  };
};

export const stopSearchMovie = () => {
  return (dispatch) => {
    dispatch({
      type: STOP_SEARCHING_MOVIE,
    });
  };
};

export const getCinemaList = () => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
    try {
      const res = await axios({
        method: "GET",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=gp01",
      });
      dispatch({
        type: GET_CINEMA_LIST,
        payload: res.data,
      });
      dispatch(stopLoadingAction());
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
        title: "Ch??o m???ng b???n ???? tham gia",
        icon: "success", //success, error, warning
        confirmButtonText: "Th??nh c??ng",
      });
      //chuy???n qua trang sign in
      history.push("/sign-in");
      return;
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: err.response.data,
        icon: "error", //success, error, warning
        confirmButtonText: "Vui l??ng th??? l???i",
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

      //dispatch object l??n Reducer
      dispatch({
        type: SIGN_IN,
        payload: res.data,
      });

      //l??u xu???ng LocalStorage (accessToken, taiKhoan, maLoaiNguoiDung)

      localStorage.setItem("userLogin", JSON.stringify(res.data));

      //test sessionStorage
      sessionStorage.setItem("userLoginSession", JSON.stringify(res.data));

      //b??o ????ng nh???p th??nh c??ng

      //tr??? v??? trang home ho???c currentPage
      if (res.data.maLoaiNguoiDung === "QuanTri") {
        history.push("/admin");
      } else {
        history.push("/");
      }
    } catch (err) {
      //b??o ????ng nh???p th???t b???i
      Swal.fire({
        title: err.response.data,
        // text: 'Do you want to continue',
        //c?? th??? thay text b???ng html
        //   html: profileContent,
        icon: "error", //success, error, warning
        confirmButtonText: "Vui l??ng th??? l???i",
      });
    }
  };
};

export const userProfileApi = (user) => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
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
      dispatch(stopLoadingAction());
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const signOutApi = (history) => {
  return (dispatch) => {
    // x??a data d?????i localStorage
    localStorage.removeItem("userLogin");
    // g???i null l??n reducer
    dispatch({
      type: SIGN_OUT,
      payload: null,
    });
    //tr??? v??? home
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

      //????a l???i l??n store ????? re render userProfile
      //l??u ??: v?? api th??ng tin t??i kho???n c?? ch???a th??ng tin ?????t v??, kh??c v???i api c???p nh???t user (th??ng tin ?????t v?? l?? null) => t???m kh??ng c???p nh???t
      //l???i th??ng tin ?????t v?? c???a api c???p nh???t user
      dispatch({
        type: UPDATE_USER,
        payload: userProfile,
      });

      //th??ng b??o th??nh c??ng
      Swal.fire({
        title: "Th??ng tin ???? ???????c c???p nh???t",
        icon: "success", //success, error, warning
        confirmButtonText: "Th??nh c??ng",
      });
    } catch (err) {
      console.log(err.response.data);
      Swal.fire({
        title: err.response.data,
        icon: "error", //success, error, warning
        confirmButtonText: "????ng",
      });
    }
  };
};

export const getMovieDetail = (maPhim) => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      });
      dispatch({
        type: MOVIE_DETAIL,
        payload: res.data,
      });
      dispatch(stopLoadingAction());
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMovieCalendar = (maLichChieu) => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      });
      dispatch({
        type: MOVIE_CALENDAR,
        payload: res.data,
      });
      dispatch(stopLoadingAction());
    } catch (err) {
      console.log(err);
    }
  };
};

export const chairChoiceAction = (chair) => {
  return {
    type: CHAIR_CHOICE,
    payload: chair,
  };
};

export const bookingTicketAction = (maLichChieu, danhSachVe) => {
  return async (dispatch) => {
    dispatch(startLoadingAction());
    try {
      const dataStorage = JSON.parse(localStorage.getItem("userLogin"));
      const accessToken = dataStorage.accessToken;
      const taiKhoan = dataStorage.taiKhoan;
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: taiKhoan,
        },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      //th??nh c??ng
      //tr??? chairChoice v??? null
      dispatch({
        type: BOOKING_TICKET,
        payload: danhSachVe,
      });
      dispatch(stopLoadingAction());
      Swal.fire("?????t v?? th??nh c??ng !");
    } catch (err) {
      //kh??ng th??nh c??ng
      Swal.fire(err.response.data);
    }
  };
};

export const startLoadingAction = () => {
  return {
    type: START_LOADING,
  };
};

export const stopLoadingAction = () => {
  return {
    type: STOP_LOADING,
  };
};
