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
} from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/home/home";
import Test from "./components/test";
import SignUp from "./pages/sign-up/signUp";
import SignIn from "./pages/sign-in/signIn";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
// import Header from "./components/header/test"
import Footer from "./components/footer/footer";
import { useDispatch } from "react-redux";
import { SIGN_IN } from "./stores/constants/movie.const";
import { useEffect } from "react";
import UserProfile from "./pages/user-profile/user_profile";
import MovieDetail from "./pages/movie-detail/movie-detail";
import TicketBooking from "./pages/ticket-booking/ticket-booking";
import Guard from "./components/HOC/guard";
import Admin from "./pages/admin/admin";
import Admin_Home from "./components/HOC/admin_home";
// import MultipleSelect from "./components/test";

library.add(
  faChevronRight,
  faUserCircle,
  faMapMarkerAlt,
  faPlay,
  faThumbsUp,
  faCommentAlt,
  faSearch,
  faCogs
);

function App() {
  const dispatch = useDispatch();

  //tạo hàm dispatch dữ liệu từ local lên store cho header lấy xuống, để kiểm tra (luu ở local host nào thì phải
  // mở đúng local host đó (vd http://localhost:3000/))
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
        <Route path="" exact>
          <Admin_Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
