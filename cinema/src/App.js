import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
// import TestComingMovie from "./components/test/";
import {
  faPlay,
  faChevronRight,
  faUserCircle,
  faMapMarkerAlt,
  faThumbsUp,
  faCommentAlt,
  faSearch,
  faCogs,
  faEdit,
  faTrashAlt,
  faCalendarAlt,
  faPlus,
  faFilm,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/home/home";
import SignUp from "./pages/sign-up/signUp";
import SignIn from "./pages/sign-in/signIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import UserProfile from "./pages/user-profile/user_profile";
import MovieDetail from "./pages/movie-detail/movie-detail";
import TicketBooking from "./pages/ticket-booking/ticket-booking";
import Guard from "./components/HOC/guard";
import Admin from "./pages/admin/admin";
import Admin_Home from "./components/HOC/admin_home";
import { useEffect } from "react";
import { SIGN_IN } from "./stores/constants/movie.const";
import { useDispatch } from "react-redux";
import Show_Time from "./pages/admin/main_content/lich_chieu/show_time";

library.add(
  faChevronRight,
  faUserCircle,
  faMapMarkerAlt,
  faPlay,
  faThumbsUp,
  faCommentAlt,
  faSearch,
  faCogs,
  faEdit,
  faTrashAlt,
  faCalendarAlt,
  faPlus,
  faFilm,
  faVideo,
);

function App() {
  const dispatch = useDispatch();
  const getUserFromLocal = () => {
    const user = localStorage.getItem("userLogin");
    if (user) {
      dispatch({
        type: SIGN_IN,
        payload: JSON.parse(user),
      });
    }
  };

  useEffect(() => {
    getUserFromLocal();
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Test /> */}
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/sign-in" exact={true}>
          <SignIn />
        </Route>
        <Route path="/user-profile" exact={true}>
          <UserProfile />
        </Route>
        <Route path="/movie-detail/:maPhim" exact>
          <MovieDetail />
        </Route>
        <Route path="/ticket-booking/:maLichChieu" exact>
          <TicketBooking />
        </Route>
        <Route path="/admin" exact>
          <Guard>
            <Admin />
          </Guard>
        </Route>
        <Route path="/lich-chieu/:maPhim" exact>
          <Guard>
            <Show_Time />
          </Guard>
        </Route>
        <Route path="" exact>
          <Admin_Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
