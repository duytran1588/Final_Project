import React from "react";
import LinesEllipsis from "react-lines-ellipsis"; // to make ellipsis "..."
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC"; // responsive of ellipsis
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShowingMovie(props) {
  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis); // dùng thẻ này de viet ngan tieu de phim
  const { trailerId, handleDetail, movie, handlePlay } = props;

  //tách hinhAnh url thành http
  const src_img_http = movie.hinhAnh.split(":");
  let src_img_https = src_img_http[0] + "s";
  const src_img = src_img_https + ":" + src_img_http[1];

  return (
    <>
      <div className="card text-left ">
        <img
          className="card-img-top"
          width="100%"
          height="100%"
          src={src_img}
          alt=""
        />
        <button
          className="btnPlay-small"
          onClick={() => {
            handlePlay(trailerId);
          }}
        >
          <FontAwesomeIcon icon="play" />
        </button>

        <div className="card-body">
          <div className="card-title movieName">
            <ResponsiveEllipsis
              text={movie.tenPhim}
              maxLine="1"
              ellipsis=" ..."
              trimRight
              basedOn="letters"
            />
          </div>
          <p style={{ marginTop: "-1rem" }} className="card-text">
            100 phút
          </p>
        </div>
        <button
          style={{ marginTop: "-1rem" }}
          onClick={() => {
            handleDetail(movie.maPhim);
          }}
          className="btnTicket btn btn-success"
        >
          Đặt vé
        </button>
      </div>
    </>
  );
}

export default ShowingMovie;
