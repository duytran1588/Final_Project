import React, { useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieList,
  getMovieListComing,
} from "../../../stores/actions/movie.action";
import { useHistory } from "react-router";
import Loading from "../../../components/loading/loading";
import ModalVideo from "react-modal-video";
import ShowingMovie from "../../../components/showing-movie/showing-movie";

function ComingMovie() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    arrows: true,
    // autoplay: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 1,
          arrows: true,
        },
      },
    ],
  };

  //for  video-player
  const [control, setControl] = useState(false);
  const [video, setVideo] = useState("");

  const handlePlay = (trailer) => {
    setControl(true);
    setVideo(trailer);
  };
  const closeModal = () => {
    setControl(false);
  };
  //for tab showing
  const movieList = useSelector((state) => {
    return state.movieReducer.movieList;
  });

  //for tab coming
  const movieListComing = useSelector((state) => {
    return state.movieReducer.movieListComing;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getMovieListComing());
  }, [dispatch]);

  const history = useHistory();
  const handleDetail = (maPhim) => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
      history.push(`/movie-detail/${maPhim}`);
    } else {
      history.push("/sign-in");
    }
  };

  const loading = useSelector((state) => {
    return state.movieReducer.loading;
  });

  if (loading) {
    return <Loading />;
  }

  const getTrailerId = (url) => {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match ? match[7] : false;
  };

  return (
    <div className="comingMovie">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#showing">
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#coming">
            Sắp Chiếu
          </a>
        </li>
      </ul>
      <div className="showing_coming tab-content">
        <div id="showing" className="tab-pane container active">
          <Slider {...settings}>
            {movieListComing?.map((movie, index) => {
              const trailerId = getTrailerId(movie.trailer);
              return (
                <ShowingMovie
                  key={index}
                  trailerId={trailerId}
                  handleDetail={handleDetail}
                  handlePlay={handlePlay}
                  movie={movie}
                />
              );
            })}
          </Slider>
        </div>

        <div id="coming" className="tab-pane container fade">
          <Slider {...settings}>
            {movieList?.map((movie, index) => {
              const trailerId = getTrailerId(movie.trailer);
              return (
                <ShowingMovie
                  key={index}
                  trailerId={trailerId}
                  handleDetail={handleDetail}
                  handlePlay={handlePlay}
                  movie={movie}
                />
              );
            })}
          </Slider>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={control}
        videoId={video}
        onClose={closeModal}
      />
    </div>
  );
}

export default ComingMovie;
