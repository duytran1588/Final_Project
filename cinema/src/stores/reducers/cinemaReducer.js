import { chairChoiceAction } from "../actions/movie.action";
import {
  BOOKING_TICKET,
  CHAIR_CHOICE,
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
  calendarMovie: null, //bao gồm luôn thông tin phim, danh sách ghế,
  chairList: null,
  choiceChairList: null,
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
      state.calendarMovie = payload;
      state.chairList = payload.danhSachGhe;
      return { ...state };
    case CHAIR_CHOICE:
      let newChairList = [...state.chairList];
      const index = newChairList.findIndex((chair) => {
        return chair.maGhe === payload.maGhe;
      });
      if (index !== -1) {
        let oldChair = { ...newChairList[index] };
        let newChair = { ...oldChair, dangChon: !oldChair.dangChon };
        newChairList[index] = newChair;
        state.chairList = newChairList;
      }
      //tìm ra danh sách ghế được chọn
      state.choiceChairList = state.chairList.filter((chair) => {
        return chair.dangChon;
      });
      return { ...state };

    case BOOKING_TICKET:
      //payload la mang cho choiceChairList.dangChon = false;
      let newChoiceChairList = [...state.choiceChairList];
      for (let i = 0; i < newChoiceChairList.length; i++) {
        newChoiceChairList[i].dangChon = false;
      }
      state.choiceChairList = newChoiceChairList;

      //duyệt từng chair trong mảng payload so sánh với chairList
      let newChairListUpdate = [...state.chairList];

      for (let i = 0; i < payload.length; i++) {
        const index = newChairListUpdate.findIndex((chair) => {
          return chair.maGhe === payload[i].maGhe;
        });
        if (index !== -1) {
          newChairListUpdate[index].daDat = true;
        }
      }

      //cho choiceChairList = null để refresh thông tin vé sau mỗi lần đặt
      state.choiceChairList = null;

      state.chairList = newChairListUpdate;
      return { ...state };

    default:
      return state;
  }
};
