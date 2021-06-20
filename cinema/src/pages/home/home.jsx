import React from "react";
import Header from "../../components/header/header";
import Carousel from "./carousel/carousel";
import SelectMovie from "./select-movie/select_Movie";
import ComingMovie from "./coming-movie/coming-movie";
import CinemaInfo from "./cinemas-info/cinema-info";
import News from "./news/news";
import MobileApp from "./mobile-app/mobile-app";
import Footer from "./footer/footer";
import SelectMovieName from "./select-movie-name/select_Movie_Name";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      {/* <SelectMovie/> */}
      <SelectMovieName/>
      <ComingMovie />
      <CinemaInfo />
      <News />
      <MobileApp />
      <Footer />
    </div>
  );
}

export default Home;
