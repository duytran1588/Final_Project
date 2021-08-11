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
  faVideo,
  faHome,
  faShoppingCart,
  faPhoneAlt,
  faArrowLeft,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/home/home";
import SignUp from "./pages/sign-up/signUp";
import SignIn from "./pages/sign-in/signIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import UserProfile from "./pages/user-profile/UserProfile";
import MovieDetail from "./pages/movie-detail/movie-detail";
import TicketBooking from "./pages/ticket-booking/ticket-booking";
import Guard from "./components/HOC/guard";
import Admin from "./pages/admin/admin";
import AdminHome from "./components/HOC/admin_home";
import { useEffect } from "react";
import { SIGN_IN } from "./stores/constants/movie.const";
import { useDispatch } from "react-redux";
import ShowTime from "./pages/admin/main_content/lich_chieu/show_time";
import IconHome from "./components/iconhome/icon_home";

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
  faHome,
  faShoppingCart,
  faPhoneAlt,
  faArrowLeft,
  faEnvelope,
  faUser,
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

  // useEffect(() => {
  //   getUserFromLocal();
  // }, []);
  useEffect(() => {
    getUserFromLocal();
  }); //app js không lên reducer lấy dữ liệu nên không cần truyền tham số vào [] của useEffect
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/sign-in" exact={true}>
          <SignIn />
        </Route>
        <Route path="/user-profile" exact={true}>
          <IconHome />
          {/* <UserProfile /> */}
          <UserProfile/>
        </Route>
        <Route path="/movie-detail/:maPhim" exact>
          <IconHome />
          <MovieDetail />
        </Route>
        <Route path="/ticket-booking/:maLichChieu" exact>
          <IconHome />
          <TicketBooking />
        </Route>
        <Route path="/admin" exact>
          <Guard>
            <Header />
            <Admin />
          </Guard>
        </Route>
        <Route path="/lich-chieu/:maPhim" exact>
          <Guard>
            <Header />
            <ShowTime />
          </Guard>
        </Route>
        <Route path="" exact>
          <AdminHome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
