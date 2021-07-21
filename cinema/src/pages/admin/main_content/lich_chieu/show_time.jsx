import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getShowTimeList } from "../../../../stores/actions/admin.action";
import format from "date-format";
import Loading from "../../../../components/loading/loading";
import Pagination from "../../../../components/pagination/pagination";
import Show_Time_Modal from "./show_time_modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Show_Time extends Component {
  state = {
    currentPage: 1,
    postsPerPage: 10,
    reRender: true, //hàm này để render lại sau khi thêm mã lịch chiếu bên modal
  };

  //change page
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  //change page by arrow
  paginateArrow = (number) => {
    if (number === 1) {
      if (this.state.currentPage > 1) {
        this.setState({
          currentPage: this.state.currentPage - 1,
        });
      }
    } else {
      if (
        this.state.currentPage <
        Math.ceil(
          this.props.showTimeList.lichChieu?.length / this.state.postsPerPage
        )
      ) {
        this.setState({
          currentPage: this.state.currentPage + 1,
        });
      }
    }
  };

  renderShowTimeList = () => {
    const { currentPage, postsPerPage } = this.state;
    const { showTimeList } = this.props;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentShowTimeList = showTimeList.lichChieu?.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return currentShowTimeList?.map((lichChieu, index) => {
      return (
        <tr key={index}>
          <td>{lichChieu?.maLichChieu}</td>
          <td>{lichChieu?.thongTinRap.tenHeThongRap}</td>
          <td>{lichChieu?.thongTinRap.tenCumRap}</td>
          <td>
            {format("dd-MM-yyyy", new Date(lichChieu?.ngayChieuGioChieu))}
          </td>
          <td>{format("hh:mm:ss", new Date(lichChieu?.ngayChieuGioChieu))}</td>
          <td>{lichChieu?.giaVe.toLocaleString()}</td>
          <td>{lichChieu?.thoiLuong}</td>
        </tr>
      );
    });
  };

  render() {
    const { showTimeList, loading } = this.props;
    const maPhim = this.props.match.params.maPhim;
    if (loading) {
      return <Loading />;
    }
    return (
      <div
        style={{ marginTop: "4rem", padding: "2rem" }}
        className="show-time container"
      >
        <h1 style={{ borderBottom: "solid #00000038 1px", padding: "2rem" }}>
          Lịch chiếu phim {showTimeList?.tenPhim}
        </h1>
        <div
          style={{ justifyContent: "center" }}
          className="show-time-content mt-5 row"
        >
          <div
            style={{ maxWidth: "15rem", height: "18rem" }}
            className="col-5 text-right movie-poster"
          >
            <img height="100%" width="100%" src={showTimeList?.hinhAnh} />
          </div>
          <div
            className="col-7 show-time-detail d-flex"
            style={{ alignItems: "center" }}
          >
            <div style={{width: "100%"}}>
              <h1>{showTimeList?.tenPhim}</h1>
              <p>{showTimeList?.moTa}</p>
              <div style={{ paddingLeft: 0 }} className="container">
                <div className="row">
                  <div
                    style={{ paddingRight: 0 }}
                    className="col-3 comment-showTime-key"
                  >
                    <p>Đánh giá</p>
                    <p>Ngày khởi chiếu</p>
                  </div>
                  <div className="col-9 comment-showTime-value">
                    <p>{showTimeList?.danhGia}</p>
                    <p>
                      {format(
                        "dd/MM/yyyy",
                        new Date(showTimeList?.ngayKhoiChieu)
                      )}
                    </p>
                  </div>
                </div>
                <div className="btn_add_showtime">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#addShowTime"
                    className="btn btn-primary"
                    style={{
                      borderRadius: "50%",
                      width: "3rem",
                      height: "3rem",
                    }}
                  >
                    <FontAwesomeIcon icon="plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className="text-center table table-bordered table-hover mt-5 myTable">
          <thead className="text-primary">
            <tr>
              <th>Mã lịch chiếu</th>
              <th>Hệ thống rạp</th>
              <th>Cụm rạp</th>
              <th>Ngày chiếu</th>
              <th>Giờ chiếu</th>
              <th>Giá vé</th>
              <th>Thời lượng phim</th>
            </tr>
          </thead>
          <tbody>{this.renderShowTimeList()}</tbody>
        </table>
        <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={showTimeList?.lichChieu?.length}
          paginate={this.paginate}
          paginateArrow={this.paginateArrow}
        />
        <Show_Time_Modal maPhim={maPhim} />
      </div>
    );
  }
  componentDidMount() {
    const maPhim = this.props.match.params.maPhim;
    console.log(maPhim);
    this.props.dispatch(getShowTimeList(maPhim));
  }
}
const mapStateToProps = (state) => {
  return {
    showTimeList: state.adminReducer.show_time_list,
    loading: state.movieReducer.loading,
  };
};

export default withRouter(connect(mapStateToProps)(Show_Time));
