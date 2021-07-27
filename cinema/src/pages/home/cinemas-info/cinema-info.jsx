import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaList } from "../../../stores/actions/movie.action";
import format from "date-format";
import "./cinema-info.scss";
import { useHistory } from "react-router";
import Loading from "../../../components/loading/loading";

function CinemaInfo() {
  const dispatch = useDispatch();
  //lấy danh sách các cinema về cho cột 1
  const cinemaList = useSelector((state) => {
    return state.cinemaReducer.cinemaList;
  });

  useEffect(() => {
    //call api lấy LayThongTinHeThongRap cho cột 1 (các logo của cinema)
    dispatch(getCinemaList());
  }, []);

  const chooseCinema = (id) => {
    //kiểm tra trong ul cột 2 đang active có li nào active thì remove
    if (document.querySelector(".col-md-4 ul.active li.active") !== null) {
      document
        .querySelector(".col-md-4 ul.active li.active")
        .classList.remove("active");
    }

    //gán active cho mỗi thẻ li đầu tiên của cột 2
    document.querySelector(`.col-md-4 #${id} li`)?.classList.add("active");

    //gỡ active cho toàn bộ thẻ a nằm trong li của ul active ở cột 2
    if (document.querySelector(".col-md-4 ul.active li a.active") !== null) {
      document
        .querySelector(".col-md-4 ul.active li a.active")
        .classList.remove("active");
    }

    //gán active lại cho (thẻ a) của li đầu tiên trong ul active
    document.querySelector(".col-md-4 ul.active li a")?.classList.add("active");

    //xóa các tab đang active ở cột 3
    if (document.querySelector(".col-md-7 ul.active") !== null) {
      document.querySelector(".col-md-7 ul.active").classList.remove("active");
    }

    //dom toi id của thẻ ul cột 2 để vào thẻ li đầu tiên lấy href của thẻ a
    const id_schedule = document.getElementById(id);
    const id_cot3 = id_schedule.firstChild.firstChild.href.slice(23);
    console.log(id_cot3);
    document.querySelector(`.col-md-7 #${id_cot3}`).classList.add("active");
  };

  //thay đổi opacity cho thẻ li ở cột 2 khi có onClick vào 1 thẻ bất kì
  const changeOpacity = (id, id2) => {
    //gỡ active của các thẻ li (nếu có) trong cùng ul
    if (document.querySelector(".col-md-4 ul.active li.active") !== null) {
      document
        .querySelector(".col-md-4 ul.active li.active")
        .classList.remove("active");
    }

    //gỡ active toàn bộ ul ở cột 3
    if (document.querySelector(".col-md-7 ul.active") !== null) {
      document.querySelector(".col-md-7 ul.active").classList.remove("active");
    }

    //gán lại active cho ul (cột 3) nào được kích hoạt bởi cột 2
    document.querySelector(`.col-md-7 #${id2}`)?.classList.add("active");

    //thẻ nào được click vào sẽ được gán active
    document
      .querySelector(`.col-md-4 ul.active #${id}`)
      ?.classList.add("active");
  };

  const history = useHistory();
  const movie_booking = (maLichChieu) => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (userLogin) {
      history.push(`/ticket-booking/${maLichChieu}`);
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
    <div>
      <section id="schedule">
        <div className="small-container">
          <div>
            <img
              className="img-fluid"
              src={"./assets/images/background_cinema_info/back-news.png"}
            />
          </div>
          <div className="row">
            {/* dữ liệu cho cột thứ 1  */}
            <div className="col-md-1 ">
              <ul className="nav nav-tabs">
                {/* 6 li lặp lại => dùng map để render ra các rạp (truyền tham số cho href ở thẻ a),
                mỗi li sẽ có thêm function chooseCinema */}
                {cinemaList?.map((cinema, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        chooseCinema(`${cinema.maHeThongRap}`); //tạm thời có thể sẽ lấy từ api truyền xuống
                      }}
                      className="nav-item cinema__icon"
                    >
                      {/* gán active cho phần tử đầu tiên của cột 1 */}
                      <a
                        className={`nav-link ${index === 0 ? "active" : ""}`}
                        data-toggle="tab"
                        href={`#${cinema.maHeThongRap}`}
                      >
                        <img className="img-fluid" src={cinema.logo} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* end cot 1  */}
            {/* dữ liệu cho cột thứ 2  */}
            <div id="addInfo" className="tab-content col-md-4">
              {cinemaList?.map((cinema, index) => {
                return (
                  <ul
                    key={index}
                    className={`tab-pane nav nav-tabs ${
                      index === 0 ? "active" : ""
                    } `}
                    id={cinema.maHeThongRap}
                  >
                    {cinema.lstCumRap.map((cumRap, index) => {
                      return (
                        <li
                          key={index}
                          id={cumRap.maCumRap}
                          // gán active cho phần tử đầu tiên của mỗi cụm rạp */}
                          className={`nav-item ${index === 0 ? "active" : ""}`}
                        >
                          <a
                            key={index}
                            onClick={() => {
                              changeOpacity(
                                `${cumRap.maCumRap}`,
                                `movie${cumRap.maCumRap}`
                              );
                            }}
                            // id={bhd.maCumRap}
                            className={`nav-link ${
                              index === 0 ? "active" : ""
                            }`}
                            // className="nav-link"
                            data-toggle="tab"
                            href={`#movie${cumRap.maCumRap}`}
                          />
                          <div className="row">
                            <div className="col-md-3">
                              <div className="cinema__add">
                                <img
                                  className="img-fluid"
                                  src={
                                    "./assets/images/bhd_logos/bhd-star-bitexco-16105952137769.png"
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-md-9">
                              <div className="cinema__info">
                                <p>
                                  <span className="text-dark">
                                    {cumRap.tenCumRap}
                                  </span>
                                </p>
                                <p>{cumRap.diaChi}</p>
                                <a
                                  className="text-danger"
                                  href="https://tix.vn/rap-chieu-phim/28-bhd-star-cineplex-icon-68"
                                >
                                  [chi tiết]
                                </a>
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
            {/* dữ liệu cột 3  */}
            <div id="sheduleInfo" className="col-md-7 tab-content">
              {cinemaList.map((cinema) => {
                return (
                  <>
                    {cinema.lstCumRap.map((cumRap, index) => {
                      return (
                        <ul
                          className={`tab-pane nav nav-tabs ${
                            index === 0 ? "active" : ""
                          }`}
                          // className="tab-pane nav nav-tabs"
                          id={`movie${cumRap.maCumRap}`}
                          key={index}
                        >
                          {cumRap.danhSachPhim.map((phim, index) => {
                            return (
                              <li key={index}>
                                {/*collapse in bootstrap 4*/}
                                <div className="row">
                                  <div className="col-3">
                                    <img
                                      className="img-fluid"
                                      src={phim.hinhAnh}
                                      width="100%"
                                    />
                                  </div>
                                  <div className="col-9">
                                    <div className="film__title">
                                      <span>{phim.tenPhim}</span>
                                      <p>100 phút - TIX 9 - IMDb 8</p>
                                    </div>
                                  </div>
                                </div>

                                <div id="film__time" className="show">
                                  <p>2D Digital</p>
                                  {/* map tới lịch chiếu để lấy data */}
                                  <div className="container premiere">
                                    <div className="row">
                                      {phim.lstLichChieuTheoPhim.map(
                                        (lichChieu, index) => {
                                          return (
                                            <div
                                              style={{ marginBottom: "2rem" }}
                                              className="col-4"
                                            >
                                              <a
                                                style={{ cursor: "pointer" }}
                                                key={index}
                                                onClick={() => {
                                                  movie_booking(
                                                    lichChieu.maLichChieu
                                                  );
                                                }}
                                              >
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
                                              </a>
                                            </div>
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
                  </>
                );
              })}
            </div>
          </div>
          <div>
            <img
              className="img-fluid"
              src={"./assets/images/background_cinema_info/back-news.png"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CinemaInfo;
