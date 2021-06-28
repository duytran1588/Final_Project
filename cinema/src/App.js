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
} from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/home/home";
import Test from "./components/test";
import SignUp from "./pages/sign-up/signUp";
import SignIn from "./pages/sign-in/signIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { useDispatch } from "react-redux";
import { SIGN_IN } from "./stores/constants/movie.const";
import { useEffect } from "react";
import UserProfile from "./pages/user-profile/user_profile";
// import MultipleSelect from "./components/test";

library.add(
  faChevronRight,
  faUserCircle,
  faMapMarkerAlt,
  faPlay,
  faThumbsUp,
  faCommentAlt
);

function App() {
  const dispatch = useDispatch();

  //tạo hàm dispatch dữ liệu từ local lên store cho header lấy xuống, để kiểm tra (luu ở local host nào thì phải
  // mở đúng local host đó (vd http://localhost:3000/))
  const getUserFromLocal = () => {
    const user = localStorage.getItem("userLogin");
    console.log(user);
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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
