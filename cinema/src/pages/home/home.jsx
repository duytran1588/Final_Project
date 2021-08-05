import React from "react";
import Carousel from "./carousel/carousel";

import ComingMovie from "./coming-movie/coming-movie";
import CinemaInfo from "./cinemas-info/cinema-info";
import News from "./news/news";
import MobileApp from "./mobile-app/mobile-app";

import SelectMovieName from "./select-movie-name/select_Movie_Name";
import IconMoving from "../../components/icon_moving/icon_to_top";

function Home() {
  return (
    <div>
      <IconMoving />
      <Carousel />
      <SelectMovieName />
      <ComingMovie />
      <CinemaInfo />
      <News />
      <MobileApp />
    </div>
  );
}

export default Home;
