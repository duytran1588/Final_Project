import logo from "./logo.svg";
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
// import MultipleSelect from "./components/test";

library.add(faChevronRight, faUserCircle, faMapMarkerAlt, faPlay, faThumbsUp, faCommentAlt);

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Test /> */}
    </div>
  );
}

export default App;
