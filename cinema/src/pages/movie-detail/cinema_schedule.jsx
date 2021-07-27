import React, { useEffect } from "react";

import format from "date-format";
import { useHistory } from "react-router";
// import "../home/cinemas-info/cinema-info.scss";

function Cinema_Schedule(props) {
  const history = useHistory();
  const { movie_detail } = props;
  const handle_booking = (maLichChieu) => {
    history.push(`/ticket-booking/${maLichChieu}`);
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

  return (
    <>
      <section id="movie_schedule">
        <div className="small-container">
          <div className="row">
            {/* dữ liệu cho cột thứ 1  */}
            <div className="col-md-1 cinema_icon">
              <ul className="nav nav-tabs">
                {/* 6 li lặp lại => dùng map để render ra các rạp (truyền tham số cho href ở thẻ a),
                mỗi li sẽ có thêm function chooseCinema */}
                {movie_detail?.heThongRapChieu.map((cinema, index) => {
                  return (
                    <li key={index} className="nav-item cinema__icon">
                      {/* gán active cho phần tử đầu tiên của cột 1 */}
                      <a
                        className={`nav-link ${index === 0 ? "active" : ""}`}
                        data-toggle="tab"
                        href={`#${cinema.maHeThongRap}`}
                      >
                        <img
                          className="img-fluid"
                          src={changeHTTP(cinema.logo)}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* end cot 1  */}

            {/* dữ liệu cột 2  */}
            <div
              id="sheduleInfo"
              className="col-md-7 cinema_system tab-content"
            >
              {movie_detail?.heThongRapChieu.map((cinema, index) => {
                return (
                  <ul
                    id={cinema.maHeThongRap}
                    key={index}
                    className={`tab-pane ${index === 0 ? "active" : ""}`}
                  >
                    {cinema.cumRapChieu.map((cumRap, index) => {
                      return (
                        <li
                          // data-toggle="collapse"
                          key={index}
                          // data-target="#film__time"
                        >
                          {/*collapse in bootstrap 4*/}
                          <div className="row">
                            <div className="col-3">
                              <img
                                className="img-fluid"
                                src="https://images.foody.vn/res/g27/262308/prof/s576x330/foody-mobile-foody-mobile-gala-jp-702-636160345829883648.jpg"
                                width="100%"
                              />
                            </div>
                            <div className="col-9">
                              <div className="film__title">
                                <span>{cumRap.tenCumRap}</span>
                                <p>100 phút - TIX 9 - IMDb 8</p>
                              </div>
                            </div>
                          </div>

                          <div id="film__time" className="show">
                            <p style={{ marginBottom: 0 }}>2D Digital</p>
                            {/* map tới lịch chiếu để lấy data */}
                            <div className="container premiere">
                              <div className="row">
                                {cumRap.lichChieuPhim.map(
                                  (lichChieu, index) => {
                                    return (
                                      // <div className="row">
                                      <div className="day_time_show">
                                        <a
                                          style={{ cursor: "pointer" }}
                                          key={index}
                                          onClick={() =>
                                            handle_booking(
                                              lichChieu.maLichChieu
                                            )
                                          }
                                        >
                                          <span>
                                            <span>
                                              {format(
                                                "dd/MM/yyyy",
                                                new Date(
                                                  lichChieu.ngayChieuGioChieu
                                                )
                                              )}
                                            </span>
                                            <span className="text-danger">
                                              {format(
                                                "hh:mm:ss",
                                                new Date(
                                                  lichChieu.ngayChieuGioChieu
                                                )
                                              )}
                                            </span>
                                          </span>
                                        </a>
                                      </div>
                                      // </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cinema_Schedule;
