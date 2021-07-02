import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_COMING,
  MOVIE_DETAIL,
  SEARCH_MOVIE,
} from "../constants/movie.const";

const initialState = {
  movieList: [],
  movieListComing: [],
  movieSearch: [],
  movie_detail: null,
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
    default:
      return state;
  }
};
