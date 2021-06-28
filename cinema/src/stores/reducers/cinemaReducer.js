import {
  GET_CINEMA_LIST,
  SIGN_IN,
  SIGN_OUT,
  USER_PROFILE,
} from "../constants/movie.const";

const initialState = {
  cinemaList: [],
  userLogin: null,
  userProfile: null,
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
    default:
      return state;
  }
};
