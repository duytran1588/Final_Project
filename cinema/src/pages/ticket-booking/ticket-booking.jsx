import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  bookingTicketAction,
  chairChoiceAction,
  getMovieCalendar,
} from "../../stores/actions/movie.action";
import Swal from "sweetalert2";

class TicketBooking extends Component {

  
  handleBooking = () => {
    const { choiceChairList } = this.props;
    const maLichChieu = this.props.match.params.maLichChieu;
    if (!choiceChairList) {
      //sweet alert
      Swal.fire({
        title: "Bạn vui lòng chọn ghế",
        icon: "error", //success, error, warning
        confirmButtonText: "Chọn lại",
      });
      return;
    }
    Swal.fire({
      title: "Bạn muốn đặt vé?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
    }).then((result) => {
      if (result.isConfirmed) {
        //api
        this.props.dispatch(bookingTicketAction(maLichChieu, choiceChairList));
      } else if (result.isDenied) {
        Swal.fire("Hủy đặt vé");
      }
    });
  };

  //viết hàm chọn ghế
  handleChairChoice(chair) {
    this.props.dispatch(chairChoiceAction(chair));
  }

  renderAlphabet() {
    let items = [];
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "o",
    ];

    for (let i = 0; i < alphabet.length; i++) {
      items.push(
        <div className="col-12 chair alphabet mb-2 ml-2">
          <button
            // disabled="true"
            style={{ width: "3rem", cursor: "default" }}
            className="btn border-danger text-danger"
          >
            {alphabet[i].toUpperCase()}
          </button>
        </div>
      );
    }
    return items;
  }

  renderAisle(begin, length, column) {
    const { chairList } = this.props;

    let items = [];
    if (chairList) {
      for (let i = begin; i < length; i++) {
        items.push(
          <div className={`${column} chair mb-2 ml-2`}>
            <button
              onClick={() => {
                this.handleChairChoice(chairList[i]);
              }}
              disabled={chairList[i].daDat}
              style={{ width: "3rem" }}
              className={`btn ${
                chairList[i].dangChon
                  ? "btn-success"
                  : chairList[i].loaiGhe === "Vip"
                  ? "btn-danger"
                  : "btn-dark"
              }`}
            >
              {chairList[i].tenGhe}
            </button>
          </div>
        );
      }
    }
    return items;
  }

  renderLastAisle() {
    const { chairList } = this.props;

    let items = [];
    if (chairList) {
      for (let i = 108; i < chairList.length; i++) {
        items.push(
          <div className="col-3 chair mb-2 ml-2">
            <button
              onClick={() => {
                this.handleChairChoice(chairList[i]);
              }}
              disabled={chairList[i].daDat}
              style={{ width: "3rem" }}
              className={`btn ${
                chairList[i].dangChon
                  ? "btn-success"
                  : chairList[i].loaiGhe === "Vip"
                  ? "btn-danger"
                  : "btn-dark"
              }`}
            >
              {chairList[i].tenGhe}
            </button>
          </div>
        );
      }
    }
    return items;
  }
  render() {
    const { calendarMovie, choiceChairList } = this.props;

    return (
      <section id="booking-ticket">
        <div className="small-container">
          <div className="row cinema_form">
            <div className="col-8">
              <div className="container">
                <div className="cinema_intro_name">
                  <p>{calendarMovie?.thongTinPhim.tenCumRap}</p>
                  <p>{calendarMovie?.thongTinPhim.diaChi}</p>
                  <p>
                    {calendarMovie?.thongTinPhim.ngayChieu} -{" "}
                    {calendarMovie?.thongTinPhim.gioChieu} -{" "}
                    {calendarMovie?.thongTinPhim.tenRap}
                  </p>
                </div>
                <div className="screen"></div>
                <p>Màn hình</p>
                <div className="container">
                  <div className="explain">
                    <div>
                      <button
                        style={{ width: "3rem", height: "2rem" }}
                        className="btn btn-success mr-2"
                      ></button>
                      <span>Đang chọn</span>
                    </div>
                    <div>
                      <button
                        style={{ width: "3rem", height: "2rem" }}
                        className="btn btn-danger mr-2"
                      ></button>
                      <span>Ghế Vip</span>
                    </div>
                    <div>
                      <button
                        style={{ width: "3rem", height: "2rem" }}
                        className="btn btn-dark mr-2"
                      ></button>
                      <span>Ghế thường</span>
                    </div>
                    <div>
                      <button
                        disabled
                        style={{ width: "3rem", height: "2rem" }}
                        className="btn btn-dark mr-2"
                      ></button>
                      <span>Ghế đã đặt</span>
                    </div>
                  </div>
                </div>

                <div className="container chairList">
                  <div className="row">
                    <div className="col-1 alphabet_chair">
                      <div className="container">
                        <div className="row">{this.renderAlphabet()}</div>
                      </div>
                    </div>

                    <div className="col-11 p-0">
                      <div className="container">
                        <div
                          className="row"
                          style={{ justifyContent: "center" }}
                        >
                          <div className="col-2 first-aisle">
                            <div className="container">
                              <div className="row">
                                {this.renderAisle(0, 26, "col-6")}
                              </div>
                            </div>
                          </div>
                          <div className="col-6 second-aisle">
                            <div className="container">
                              <div
                                className="row"
                                style={{ justifyContent: "center" }}
                              >
                                {this.renderAisle(26, 108, "col-2")}
                              </div>
                            </div>
                          </div>
                          <div className="col-4 last-aisle">
                            <div className="container">
                              <div className="row">
                                {this.renderLastAisle()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="container ticket_info">
                <div className="image_movie" style={{height: "fit-content", width: "12rem"}}>
                  <img
                    style={{maxWidth: "100%"}}
                    src={calendarMovie?.thongTinPhim.hinhAnh}
                    alt=""
                  />
                </div>
                <div className="cinema_ticket_book">
                  <p className="text-danger mt-3" style={{ fontSize: "2rem" }}>
                    {calendarMovie?.thongTinPhim.tenPhim}
                  </p>
                  <p>{calendarMovie?.thongTinPhim.tenCumRap}</p>
                  <p>{calendarMovie?.thongTinPhim.diaChi}</p>
                  <h2 className="mt-5 mb-4">Thông tin vé</h2>
                </div>
                <div className="table table_ticket">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Số ghế</th>
                        <th>Giá vé</th>
                        {/* <th style={{ borderRight: "none" }}>Giao dịch</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {choiceChairList?.map((chair, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{chair.tenGhe}</td>
                            <td>{chair.giaVe.toLocaleString()}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr style={{ borderBottom: "none" }}>
                        <td colSpan="2" className="text-center">
                          Tổng tiền
                        </td>
                        <td>
                          {choiceChairList
                            ?.reduce((tongTien, chair) => {
                              return (tongTien += chair.giaVe);
                            }, 0)
                            .toLocaleString()}{" "}
                          (VNĐ)
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <button
                  onClick={() => {
                    this.handleBooking();
                  }}
                  style={{
                    marginLeft: "100%",
                    transform: "translateX(-100%)",
                    display: "inline-block",
                    width: "7rem",
                  }}
                  className="btn btn-danger"
                >
                  Đặt
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    const maLichChieu = this.props.match.params.maLichChieu;
    console.log(maLichChieu);
    this.props.dispatch(getMovieCalendar(maLichChieu));
  }
}
const mapStateToProps = (state) => {
  return {
    calendarMovie: state.cinemaReducer.calendarMovie,
    chairList: state.cinemaReducer.chairList,
    choiceChairList: state.cinemaReducer.choiceChairList,
  };
};

export default withRouter(connect(mapStateToProps)(TicketBooking));
