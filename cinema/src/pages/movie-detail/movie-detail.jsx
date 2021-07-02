import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieDetail } from "../../stores/actions/movie.action";
import Cinema_Schedule from "./cinema_schedule";
import format from "date-format";

function MovieDetail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetail(maPhim));
  }, []);

  const movie_detail = useSelector((state) => {
    return state.movieReducer.movie_detail;
  });
  //lay param tren url về
  const { maPhim } = useParams();

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
                    data-toggle="modal"
                    data-target="#trailer-movie"
                  >
                    XEM TRAILER
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cinema_Schedule movie_detail={movie_detail}/>
      <div className="modal fade" id="trailer-movie">
        <div className="modal-dialog">
          <div className="modal-content content-movie">
            {/* Modal Header */}
            <div className="modal-header header-movie">
              <h4 className="modal-title">Trailer</h4>
              <button type="button" className="close" data-dismiss="modal">
                +
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body body-movie">
              <ReactPlayer
                width="100%"
                height="14rem"
                controls={true}
                url={movie_detail?.trailer}
              />
            </div>
            {/* Modal footer */}
            <div className="modal-footer footer-movie">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
