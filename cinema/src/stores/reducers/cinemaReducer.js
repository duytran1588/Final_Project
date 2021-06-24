import { GET_CINEMA_LIST } from "../constants/movie.const";

const initialState = {
  cinemaList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CINEMA_LIST:
      let newCinemaList = [...state.cinemaList];
      newCinemaList = payload;
      state.cinemaList = newCinemaList;
      return { ...state };
    default:
      return state;
  }
};
