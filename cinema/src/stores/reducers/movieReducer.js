import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_COMING,
  MOVIE_DETAIL,
  SEARCH_MOVIE,
  START_LOADING,
  STOP_LOADING,
} from "../constants/movie.const";

const initialState = {
  movieList: [],
  movieListComing: [],
  movieSearch: [],
  movie_detail: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_LIST:
      let newMovieList = [...state.movieList];
      newMovieList = payload;
      state.movieList = newMovieList;
      return { ...state };
    case GET_MOVIE_LIST_COMING:
      let newMovieListComing = [...state.movieListComing];
      newMovieListComing = payload;
      state.movieListComing = newMovieListComing;
      return { ...state };
    case SEARCH_MOVIE:
      let newMovieSearch = [...state.movieSearch];
      newMovieSearch = payload;
      state.movieSearch = newMovieSearch;
      return { ...state };
    case MOVIE_DETAIL:
      state.movie_detail = payload;
      return { ...state };
    case STOP_LOADING:
      state.loading = false;
      return { ...state };
    case START_LOADING:
      state.loading = true;
      return { ...state };
    default:
      return state;
  }
};
