import React, { useEffect, useState } from "react";
import "./selectMovie.scss";
import axios from "axios";
import format from "date-format";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SelectMovie() {
  const [movieList, setMovieList] = useState([]);
  const [cinemaList, setCinemaList] = useState([]);
  const history = useHistory();
  //maLichChieu dùng để đẩy qua trang đặt vé sau khi tìm được maLichChieu
  const [showTimeCode, setShowTimeCode] = useState("");
  //lấy danh sách phim
  const listMovie = async () => {
    try {
      const res = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      setMovieList(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    listMovie();
  }, []);

  const listCinema = async (maPhim) => {
    try {
      const res = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });

      setCinemaList(res.data.heThongRapChieu);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeMovie = (event) => {
    const { value } = event.target;

    //một khi đã chọn phim thì option đầu tiên của các select là phim, rạp và suất chiếu  sẽ biến mất để KH khỏi nhấn vào
    const movie_option = document.querySelector(
      "#control_movie_choice option:first-child"
    );
    if (movie_option) {
      movie_option.style.display = "none";
    }

    const cinema_choice = document.querySelector(
      "#control_choose_cinema option:first-child"
    );
    if (cinema_choice) {
      cinema_choice.style.display = "none";
    }

    const showTime_choice = document.querySelector(
      "#control_showTime option:first-child"
    );
    if (showTime_choice) {
      showTime_choice.style.display = "none";
    }

    // call api
    listCinema(value);

    //cho thẻ a đầu tiên của tab control show time được kích hoạt active
    setTimeout(() => {
      const cinema_option = document.querySelector(
        "#control_choose_cinema optgroup:nth-child(2) option:first-child"
      );
      if (cinema_option) {
        cinema_option.selected = true;
      }
      const showtime_option = document.querySelector(
        "#control_showTime optgroup.active option:first-child"
      );
      if (showtime_option) {
        showtime_option.selected = true;
        //nếu option có tồn tại thì set maLichChieu của option cho setShowTimeCode luôn

        setShowTimeCode(showtime_option.value);
      } else {
        setShowTimeCode("");
      }
    }, 1200);
    const a_active = document.querySelector(
      "#control_showTime li:first-child a"
    );
    if (a_active) {
      a_active.click();
    }
  };

  const handleChangeCinema = (event) => {
    const { value } = event.target;

    const current_active = document.querySelector(
      "#control_showTime optgroup.active"
    );
    if (current_active) {
      current_active.classList.remove("active");
    }

    const a_current_active = document.querySelector(
      "#control_showTime li a.active"
    );
    if (a_current_active) {
      a_current_active.classList.remove("active");
    }

    const a_active = document.getElementById(`control_${value}`);
    if (a_active) {
      a_active.click();
    }

    const showtime_option = document.querySelector(
      "#control_showTime optgroup.active option:first-child"
    );
    if (showtime_option) {
      showtime_option.selected = true;
      //nếu option có tồn tại thì set maLichChieu của option cho setShowTimeCode luôn

      setShowTimeCode(showtime_option.value);
    }
  };

  const handleChangeShowTimeCode = (event) => {
    const { value } = event.target;
    // chọn ngày giờ chiếu rồi set maLichChieu cho showTimeCode
    setShowTimeCode(value);
  };

  const handleBookingNow = () => {
    const maLichChieu = showTimeCode;

    if (maLichChieu !== "") {
      //nếu maLichChieu đã được chọn rồi thì xem đăng nhập chưa
      const userLogin = JSON.parse(localStorage.getItem("userLogin"));
      if (userLogin) {
        history.push(`/ticket-booking/${maLichChieu}`);
      } else {
        history.push("/sign-in"); // trả về trang đăng nhập
      }
    }
  };

  const renderCinemaChoice = () => {
    if (cinemaList.length !== 0) {
      return (
        <select
          id="control_choose_cinema"
          className="form-control"
          aria-label="Default select example"
          onChange={handleChangeCinema}
        >
          <option value="">Rạp</option>

          {cinemaList.map((cinema, index) => {
            return (
              <optgroup label={cinema.tenHeThongRap} key={`cumRap_${index}`}>
                {cinema.cumRapChieu.map((cumRap, index) => {
                  return (
                    <option value={cumRap.maCumRap} key={`cinema_${index}`}>
                      {cumRap.tenCumRap}
                    </option>
                  );
                })}
              </optgroup>
            );
          })}
        </select>
      );
    } else {
      return (
        <select
          className="form-control"
          aria-label="Default select example"
          id="control_choose_cinema"
        >
          <option>Rạp</option>
          <option>Bạn chưa chọn phim hoặc phim chưa có lịch chiếu</option>
        </select>
      );
    }
  };

  const renderShowTimeChoice = () => {
    if (cinemaList.length === 0) {
      return (
        <select
          className="form-control"
          aria-label="Default select example"
          id="control_showTime"
        >
          <option>Suất chiếu</option>
          <option>Bạn chưa chọn phim hoặc phim chưa có lịch chiếu</option>
        </select>
      );
    } else {
      return (
        <select
          aria-label="Default select example"
          id="control_showTime"
          onChange={handleChangeShowTimeCode}
          className="tab-content form-control"
        >
          <option value="">Suất chiếu</option>

          {cinemaList.map((cinema, index) => {
            return (
              <React.Fragment key={`cumRap_${index}`}>
                {index === 0
                  ? cinema.cumRapChieu.map((cumRap, index) => {
                      return (
                        <optgroup
                          label={cumRap.tenCumRap}
                          key={`rap_${index}`}
                          id={`control_cumRap_${cumRap.maCumRap}`}
                          className={`tab-pane ${
                            index === 0 ? "active" : "fade"
                          }`}
                          // className="tab-pane fade"
                        >
                          {cumRap.lichChieuPhim.map((lichChieu, index) => {
                            return (
                              <option
                                value={lichChieu.maLichChieu}
                                name={lichChieu.ngayChieuGioChieu}
                                key={`lichChieu_${index}`}
                              >
                                {format(
                                  "dd/MM/yyyy",
                                  new Date(lichChieu.ngayChieuGioChieu)
                                )}
                                &nbsp; &nbsp; &nbsp; {"-"} &nbsp; &nbsp; &nbsp;
                                {format(
                                  "hh:mm:ss",
                                  new Date(lichChieu.ngayChieuGioChieu)
                                )}
                                {/* {lichChieu.maLichChieu} */}
                              </option>
                            );
                          })}
                        </optgroup>
                      );
                    })
                  : cinema.cumRapChieu.map((cumRap, index) => {
                      return (
                        <optgroup
                          label={cumRap.tenCumRap}
                          key={`rap_${index}`}
                          id={`control_cumRap_${cumRap.maCumRap}`}
                          className="tab-pane fade"
                        >
                          {cumRap.lichChieuPhim.map((lichChieu, index) => {
                            return (
                              <option
                                value={lichChieu.maLichChieu}
                                name={lichChieu.ngayChieuGioChieu}
                                key={`lichChieu_${index}`}
                              >
                                {format(
                                  "dd/MM/yyyy",
                                  new Date(lichChieu.ngayChieuGioChieu)
                                )}
                                &nbsp; &nbsp; &nbsp; {"-"} &nbsp; &nbsp; &nbsp;
                                {format(
                                  "hh:mm:ss",
                                  new Date(lichChieu.ngayChieuGioChieu)
                                )}
                                {/* {lichChieu.maLichChieu} */}
                              </option>
                            );
                          })}
                        </optgroup>
                      );
                    })}
              </React.Fragment>
            );
          })}
        </select>
      );
    }
  };

  return (
    <>
      <div className="buyTicketForm">
        <form onSubmit={handleBookingNow} style={{ width: "100%" }}>
          <div className="container">
            <div
              className="row d-flex"
              style={{ justifyContent: "space-around", alignItems: "center" }}
            >
              <div className="choose_film">
                <select
                  className="form-control"
                  aria-label="Default select example"
                  id="control_movie_choice"
                  onChange={handleChangeMovie}
                >
                  <option value="">Phim</option>
                  {movieList?.map((movie, index) => {
                    return (
                      <option value={movie.maPhim} key={`choose_film${index}`}>
                        {movie.tenPhim}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className=" choose_cinema">{renderCinemaChoice()}</div>
              <div className=" choose_day">{renderShowTimeChoice()}</div>

              {/* nếu chưa chọn được lịch chiếu thì disable nút chọn */}
              {showTimeCode === "" ? (
                <button disabled className="btn btnBuyTicket">
                  <FontAwesomeIcon className="mr-1" icon="phone-alt" />
                  Đặt vé ngay
                </button>
              ) : (
                <button className="btn btnBuyTicket active">
                  {" "}
                  <FontAwesomeIcon className="mr-1" icon="phone-alt" />
                  Đặt vé ngay
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* tab control */}
      <ul
        className="tab_control_showTime nav nav-tabs"
        id="control_showTime"
        style={{ display: "none" }}
      >
        {cinemaList.map((cinema, index) => {
          return (
            <React.Fragment key={`showTime_${index}`}>
              {/* phần tử đầu tiên của cinema mới xem xét active cụm rạp đầu tiên */}
              {index === 0
                ? cinema.cumRapChieu.map((cumRap, index) => {
                    return (
                      <li className="nav-item" key={`cumRap_${index}`}>
                        <a
                          className={`nav-link ${index === 0 ? "active" : ""}`}
                          // className="nav-link"
                          href={`#control_cumRap_${cumRap.maCumRap}`}
                          data-toggle="tab"
                          id={`control_${cumRap.maCumRap}`}
                        >
                          {cumRap.maCumRap}
                        </a>
                      </li>
                    );
                  })
                : cinema.cumRapChieu.map((cumRap, index) => {
                    return (
                      <li className="nav-item" key={`cumRap_${index}`}>
                        <a
                          className="nav-link"
                          // className="nav-link"
                          href={`#control_cumRap_${cumRap.maCumRap}`}
                          data-toggle="tab"
                          id={`control_${cumRap.maCumRap}`}
                        >
                          {cumRap.maCumRap}
                        </a>
                      </li>
                    );
                  })}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}

export default SelectMovie;
