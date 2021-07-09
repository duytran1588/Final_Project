import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import cinemaReducer from "./cinemaReducer";
import adminReducer from "./adminReducer";
export const rootReducer = combineReducers({
    movieReducer,
    cinemaReducer,
    adminReducer,
});
