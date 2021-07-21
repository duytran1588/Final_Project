import { GET_SHOW_TIME_LIST } from "../constants/movie.const";

const initialState = {
  show_time_list: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SHOW_TIME_LIST:
      state.show_time_list = payload;
      return { ...state };
    default:
      return state;
  }
};
