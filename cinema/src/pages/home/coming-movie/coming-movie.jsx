import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieList,
  getMovieListComing,
} from "../../../stores/actions/movie.action";

import LinesEllipsis from "react-lines-ellipsis"; // to make ellipsis "..."
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC"; // responsive of ellipsis
import ModalShowing from "./modal-showing";
import ModalComing from "./modal-coming";
import { useHistory } from "react-router";
import Loading from "../../../components/loading/loading";

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
    ],
  };

  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis); // dùng thẻ này de viet ngan tieu de phim

  //for tab showing
  const movieList = useSelector((state) => {
    return state.movieReducer.movieList;
  });

  //for tab coming
  const movieListComing = useSelector((state) => {
    return state.movieReducer.movieListComing;
  });
  console.log(movieListComing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
    dispatch(getMovieListComing());
  }, []);

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
            {movieList?.map((movie, index) => {
              return (
                <div key={index} class="card text-left ">
                  <img
                    class="card-img-top"
                    width="100%"
                    height="100%"
                    src={movie.hinhAnh}
                    alt=""
                  />
                  <button
                    className="btnPlay-small"
                    data-toggle="modal"
                    data-target={`#movie${movie.maPhim}`}
                  >
                    <FontAwesomeIcon icon="play" />
                  </button>

                  <div class="card-body">
                    <div class="card-title">
                      <ResponsiveEllipsis
                        text={movie.tenPhim}
                        maxLine="1"
                        ellipsis=" ..."
                        trimRight
                        basedOn="letters"
                      />
                    </div>
                    <p class="card-text">100 phút</p>
                  </div>
                  <button
                    onClick={() => {
                      handleDetail(movie.maPhim);
                    }}
                    className="btnTicket btn btn-success"
                  >
                    Đặt vé
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>

        <div id="coming" className="tab-pane container fade">
          <Slider {...settings}>
            {movieListComing?.map((movie, index) => {
              return (
                <div key={index} class="card text-left ">
                  <img
                    class="card-img-top"
                    width="100%"
                    height="100%"
                    src={movie.hinhAnh}
                    alt=""
                  />
                  <button
                    className="btnPlay-small"
                    data-toggle="modal"
                    data-target={`#coming${movie.maPhim}`}
                  >
                    <FontAwesomeIcon icon="play" />
                  </button>
                  <div class="card-body">
                    <div class="card-title">
                      <ResponsiveEllipsis
                        text={movie.tenPhim}
                        maxLine="1"
                        ellipsis=" ..."
                        trimRight
                        basedOn="letters"
                      />
                    </div>

                    <p class="card-text">100 phút</p>
                  </div>
                  <button
                    onClick={() => {
                      handleDetail(movie.maPhim);
                    }}
                    className="btnTicket btn btn-success"
                  >
                    Đặt vé
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* showing modal  */}
      {movieList?.map((movie, index) => {
        return <ModalShowing key={index} movie={movie} />;
      })}

      {/*coming modal  */}
      {movieListComing?.map((movie, index) => {
        return <ModalComing key={index} movie={movie} />;
      })}
    </div>
  );
}

export default ComingMovie;
