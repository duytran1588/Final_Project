import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Carousel from "./carousel/carousel";
import SelectMovie from "./select-movie/select_Movie";
import ComingMovie from "./coming-movie/coming-movie";
import CinemaInfo from "./cinemas-info/cinema-info";
import News from "./news/news";
import MobileApp from "./mobile-app/mobile-app";

import SelectMovieName from "./select-movie-name/select_Movie_Name";

function Home() {
  return (
    <div>
      <Carousel />
      {/* <SelectMovie/> */}
      <SelectMovieName />
      <ComingMovie />
      <CinemaInfo />
      <News />
      <MobileApp />
    </div>
  );
}

export default Home;
