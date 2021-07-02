import {
  GET_CINEMA_LIST,
  MOVIE_CALENDAR,
  SIGN_IN,
  SIGN_OUT,
  UPDATE_USER,
  USER_PROFILE,
} from "../constants/movie.const";

const initialState = {
  cinemaList: [],
  userLogin: null,
  userProfile: null,
  chairList: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CINEMA_LIST:
      let newCinemaList = [...state.cinemaList];
      newCinemaList = payload;
      state.cinemaList = newCinemaList;
      return { ...state };
    case SIGN_IN:
      state.userLogin = payload;
      return { ...state };
    case USER_PROFILE:
      state.userProfile = payload;
      return { ...state };
    case SIGN_OUT:
      state.userLogin = null;
      return { ...state };
    case UPDATE_USER:
      state.userProfile = {
        ...state.userProfile, //giữ lại thông tin đặt vé
        taiKhoan: payload.taiKhoan,
        matKhau: payload.matKhau,
        hoTen: payload.hoTen,
        email: payload.email,
        soDT: payload.soDT,
      };
      return { ...state };
    case MOVIE_CALENDAR:
      state.chairList = payload;
      return { ...state };
    default:
      return state;
  }
};
