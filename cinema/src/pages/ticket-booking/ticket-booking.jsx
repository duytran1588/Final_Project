import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMovieCalendar } from "../../stores/actions/movie.action";

class TicketBooking extends Component {
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
              disabled={chairList.danhSachGhe[i].daDat}
              style={{ width: "3rem" }}
              className={`btn ${
                chairList.danhSachGhe[i].loaiGhe === "Vip"
                  ? "btn-danger"
                  : "btn-dark"
              }`}
            >
              {chairList.danhSachGhe[i].tenGhe}
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
      for (let i = 108; i < chairList.danhSachGhe.length; i++) {
        items.push(
          <div className="col-3 chair mb-2 ml-2">
            <button
              disabled={chairList.danhSachGhe[i].daDat}
              style={{ width: "3rem" }}
              className={`btn ${
                chairList.danhSachGhe[i].loaiGhe === "Vip"
                  ? "btn-danger"
                  : "btn-dark"
              }`}
            >
              {chairList.danhSachGhe[i].tenGhe}
            </button>
          </div>
        );
      }
    }
    return items;
  }
  render() {
    const { chairList } = this.props;
    console.log(chairList);
    return (
      <section id="booking-ticket">
        <div className="small-container">
          <div className="row cinema_form">
            <div className="col-8">
              <div className="container">
                <div className="cinema_intro_name">
                  <p>{chairList?.thongTinPhim.tenCumRap}</p>
                  <p>{chairList?.thongTinPhim.diaChi}</p>
                  <p>
                    {chairList?.thongTinPhim.ngayChieu} -{" "}
                    {chairList?.thongTinPhim.gioChieu} -{" "}
                    {chairList?.thongTinPhim.tenRap}
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
                    <div className="col-1">
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
              <div className="container">
                <div className="image_movie">
                  <img
                    height="100%"
                    src={chairList?.thongTinPhim.hinhAnh}
                    alt=""
                  />
                </div>
                <div className="cinema_ticket_book">
                  <p className="text-danger mt-3" style={{ fontSize: "2rem" }}>
                    {chairList?.thongTinPhim.tenPhim}
                  </p>
                  <p>{chairList?.thongTinPhim.tenCumRap}</p>
                  <p>{chairList?.thongTinPhim.diaChi}</p>
                </div>
                <div className="table table_ticket">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Số ghế</th>
                        <th>Giá vé</th>
                        <th>Giao dịch</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>134</td>
                        <td>75000</td>
                        <td>
                          <button className="btn btn-success">Hủy</button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>134</td>
                        <td>75000</td>
                        <td>
                          <button className="btn btn-success">Hủy vé</button>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2">Tổng tiền</td>
                        <td>150, 000</td>
                        <td>
                          <button className="btn btn-danger">Đặt vé</button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
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
    chairList: state.cinemaReducer.chairList,
  };
};

export default withRouter(connect(mapStateToProps)(TicketBooking));
