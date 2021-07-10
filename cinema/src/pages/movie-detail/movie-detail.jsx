import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieDetail } from "../../stores/actions/movie.action";
import Cinema_Schedule from "./cinema_schedule";
import format from "date-format";
import Loading from "../../components/loading/loading";
import ModalVideo from "react-modal-video";

function MovieDetail() {
  const dispatch = useDispatch();

  //for  video-player
  const [control, setControl] = useState(false);
  const [video, setVideo] = useState("");
  const handlePlay = (trailer) => {
    setControl(true);
    setVideo(trailer);
  };

  const getTrailerId = (url) => {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  useEffect(() => {
    dispatch(getMovieDetail(maPhim));
  }, []);

  const movie_detail = useSelector((state) => {
    return state.movieReducer.movie_detail;
  });
  //lay param tren url về
  const { maPhim } = useParams();

  const loading = useSelector((state) => {
    return state.movieReducer.loading;
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <section className="movie-detail">
        <div>
          <div className="container">
            <div className="row movie-info-detail">
              <div className="col-5 movie-img">
                <img width="100%" height="100%" src={movie_detail?.hinhAnh} />
              </div>
              <div className="col-7 movie-content">
                <h1>{movie_detail?.tenPhim}</h1>
                <p>{movie_detail?.moTa}</p>
                <div className="container movie-intro">
                  <div className="row">
                    <div className="col-4 ">
                      <p>Đánh giá</p>
                      <p>Ngày khởi chiếu</p>
                    </div>
                    <div className="col-8">
                      <p>{movie_detail?.danhGia}</p>
                      <p>
                        {format(
                          "dd/MM/yyyy",
                          new Date(movie_detail?.ngayKhoiChieu)
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="trailer_ticket">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      let trailerId = getTrailerId(movie_detail.trailer);
                      handlePlay(trailerId);
                    }}
                  >
                    XEM TRAILER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cinema_Schedule movie_detail={movie_detail} />
      <ModalVideo
        channel="youtube"
        isOpen={control}
        videoId={video}
        onClose={() => setControl(false)}
      />
    </div>
  );
}

export default MovieDetail;
