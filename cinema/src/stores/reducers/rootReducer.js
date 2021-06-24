import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import cinemaReducer from "./cinemaReducer";
export const rootReducer = combineReducers({
    movieReducer,
    cinemaReducer,
});
