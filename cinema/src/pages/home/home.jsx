import React from "react";
import Carousel from "./carousel/carousel";
import ComingMovie from "./coming-movie/coming-movie";
import CinemaInfo from "./cinemas-info/cinema-info";
import News from "./news/news";
import MobileApp from "./mobile-app/mobile-app";
import IconMoving from "../../components/icon_moving/icon_to_top";
import SelectMovie from "./select-movie/select_Movie";
import SelectMovieName from "./select-movie-name/select_Movie_Name";

function Home() {
  return (
    <div>
      <IconMoving />
      <Carousel />
      {/* <SelectMovie /> */}
      <SelectMovieName/>
      <ComingMovie />
      <CinemaInfo />
      <News />
      <MobileApp />
    </div>
  );
}

export default Home;
