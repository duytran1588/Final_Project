import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieDetail } from "../../stores/actions/movie.action";
import CinemaSchedule from "./cinema_schedule";
import format from "date-format";
import Loading from "../../components/loading/loading";
import ModalVideo from "react-modal-video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MovieDetail() {
  const dispatch = useDispatch();
  //lay param tren url về
  const { maPhim } = useParams();
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

  const changeHTTP = (hinhAnh) => {
    //tách hinhAnh url thành http
    let src_img = "";
    if (hinhAnh) {
      const src_img_http = hinhAnh.split(":");
      let src_img_https = src_img_http[0] + "s";
      src_img = src_img_https + ":" + src_img_http[1];
    }
    return src_img;
  };

  const getTrailerId = (url) => {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match ? match[7] : false;
  };

  useEffect(() => {
    dispatch(getMovieDetail(maPhim));
  }, [dispatch, maPhim]);

  const movie_detail = useSelector((state) => {
    return state.movieReducer.movie_detail;
  });

  const loading = useSelector((state) => {
    return state.movieReducer.loading;
  });
  if (loading) {
    return <Loading />;
  }
  let percentage = 1;
  const danhGia = movie_detail?.danhGia;
  if (danhGia) {
    percentage = danhGia * 10;
  }
  return (
    <div>
      <section className="movie-detail">
        <div>
          <div
            style={{ maxWidth: "50rem" }}
            className="container movie_detail_container"
          >
            <div className="row">
              <div className="col-7 movie-info-detail">
                <div className="row">
                  <div className="col-6 movie-img">
                    <img
                      alt=""
                      width="100%"
                      height="100%"
                      src={changeHTTP(movie_detail?.hinhAnh)}
                    />
                    <div className="trailer_ticket mt-0">
                      <FontAwesomeIcon
                        icon="play"
                        onClick={() => {
                          let trailerId = getTrailerId(movie_detail.trailer);
                          handlePlay(trailerId);
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="col-6 movie-content d-flex"
                    style={{ alignItems: "center" }}
                  >
                    <div>
                      <p className="mb-0">
                        {format(
                          "dd/MM/yyyy",
                          new Date(movie_detail?.ngayKhoiChieu)
                        )}
                      </p>
                      <p
                        className="mb-0 d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <span
                          style={{
                            width: "2.5rem",
                            fontSize: "1rem",
                            padding: "2px",
                            borderRadius: "6px",
                            display: "inline-block",
                            textAlign: "center",
                            marginRight: ".5rem",
                          }}
                          className="mb-0 bg-danger"
                        >
                          C18
                        </span>
                        <span style={{ fontSize: "1.7rem" }} className="mb-0">
                          {`${
                            movie_detail?.tenPhim.length > 10
                              ? movie_detail?.tenPhim.substring(0, 7) + " ..."
                              : movie_detail?.tenPhim
                          }`}
                        </span>
                      </p>

                      <p>100 phút - 0 IMDb - 2D/Digital</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-5 d-flex value_mark_text"
                style={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                <div style={{ width: 160, height: 160 }}>
                  <CircularProgressbarWithChildren
                    value={percentage}
                    // text={movie_detail?.danhGia}
                    styles={buildStyles({
                      // Rotation of path and trail, in number of turns (0-1)
                      rotation: 1,
                      // Colors
                      pathColor: `#7ed321`,
                      textColor: "white",
                      textSize: "3rem",
                    })}
                  >
                    <p
                      className="text-white"
                      style={{ marginTop: "1rem", fontSize: "3rem" }}
                    >
                      {movie_detail?.danhGia}
                    </p>
                  </CircularProgressbarWithChildren>
                </div>
                ;
              </div>
            </div>
            <h3
              style={{ margin: "4rem 0 3rem 0" }}
              className="text-danger text-center"
            >
              Thông tin
            </h3>
            <div
              className="text-white row"
              style={{ justifyContent: "space-between" }}
            >
              <div className="col-6">
                <div className="row">
                  <div className="col-5">
                    <p>Ngày công chiếu</p>
                  </div>
                  <div className="col-6">
                    <p>
                      {format(
                        "dd/MM/yyyy",
                        new Date(movie_detail?.ngayKhoiChieu)
                      )}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <p>Đạo diễn</p>
                  </div>
                  <div className="col-6">
                    <p>Federico Chiesa</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <p>Diễn viên</p>
                  </div>
                  <div className="col-6">
                    <p style={{ textAlign: "justify" }}>
                      Totti, Toldo, Daniel Tran, Andy Lau, Sima Yi, Simon Yam,
                      Leon Lai, Aron Kwok
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <p>Thể loại</p>
                  </div>
                  <div className="col-6">
                    <p style={{ textAlign: "justify" }}>
                      Romance, Action, Mystery, Thriller, Animation, Crime,
                      Horror
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <p>Định dạng</p>
                  </div>
                  <div className="col-6">
                    <p>2D/Digitals</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <p>Quốc gia SX</p>
                  </div>
                  <div className="col-6">
                    <p>Italy, US</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-9">
                    <p>Nội dung</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-9">
                    <p style={{ textAlign: "justify" }}>{movie_detail?.moTa}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CinemaSchedule movie_detail={movie_detail} />

      <ModalVideo
        channel="youtube"
        isOpen={control}
        videoId={video}
        onClose={closeModal}
      />
    </div>
  );
}

export default MovieDetail;
