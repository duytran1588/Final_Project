import React, { Component } from "react";

class Movie_Form extends Component {
  render() {
    const {
      values,
      errors,
      resetFormMovie,
      handleChangeMovieInput,
      disabled,
      handleSubmit,
      button,
      idClose,
    } = this.props;
    return (
      <form onSubmit={handleSubmit} id="movieForm" className="form-group">
        <div className="container">
          <div className="row">
            <div
              className="col-6"
              style={{ padding: "1rem", boxShadow: "none" }}
            >
              <div className="mb-3">
                <label>Mã phim</label>
                <input
                  disabled={disabled}
                  type="text"
                  name="maPhim"
                  id="add_movie_code"
                  className="form-control"
                  placeholder
                  aria-describedby="helpId"
                  onChange={handleChangeMovieInput}
                  value={values.maPhim}
                />
                <small className="text-danger">{errors.maPhim}</small>
              </div>
              <div className="mb-3">
                <label>Tên phim</label>
                <input
                  type="text"
                  name="tenPhim"
                  id="add_movie_name"
                  className="form-control"
                  placeholder
                  aria-describedby="helpId"
                  onChange={handleChangeMovieInput}
                  value={values.tenPhim}
                />
                <small className="text-danger">{errors.tenPhim}</small>
              </div>
              <div className="mb-3">
                <label>Trailer</label>
                <input
                  type="text"
                  name="trailer"
                  id="add_movie_trailer"
                  className="form-control"
                  placeholder
                  aria-describedby="helpId"
                  onChange={handleChangeMovieInput}
                  value={values.trailer}
                />
                <small className="text-danger">{errors.trailer}</small>
              </div>
            </div>
            <div
              className="col-6"
              style={{ padding: "1rem", boxShadow: "none" }}
            >
              <div className="mb-3">
                <label>Ngày khởi chiếu</label>
                <input
                  type="text"
                  name="ngayKhoiChieu"
                  id="add_movie_time"
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  // data-date-format="DD/MM/YYYY"
                  aria-describedby="helpId"
                  onChange={handleChangeMovieInput}
                  value={values.ngayKhoiChieu}
                />
                <small className="text-danger">{errors.ngayKhoiChieu}</small>
              </div>
              <div className="mb-3">
                <label>Đánh giá (1-10)</label>
                <input
                  type="text"
                  name="danhGia"
                  id="add_movie_mark"
                  className="form-control"
                  placeholder
                  aria-describedby="helpId"
                  onChange={handleChangeMovieInput}
                  value={values.danhGia}
                />
                <small className="text-danger">{errors.danhGia}</small>
              </div>
              <div className="mb-3">
                <label>Chọn hình ảnh</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="hinhAnh"
                  id="add_movie_image"
                  placeholder
                  aria-describedby="fileHelpId"
                  onChange={handleChangeMovieInput}
                />
                <p
                  style={{ marginTop: "12px", fontSize: "80%" }}
                  className="text-danger"
                >
                  {errors.hinhAnh}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p>Mô tả</p>
            <textarea
              style={{ width: "100%" }}
              name="moTa"
              id="add_movie_tell"
              cols="30"
              rows="7"
              onChange={handleChangeMovieInput}
              value={values.moTa}
            ></textarea>
            <small className="text-danger">{errors.moTa}</small>
          </div>
          <div className="mt-4 d-flex" style={{ justifyContent: "flex-end" }}>
            <button className="btn btn-success mr-2">{button}</button>
            <button
              id={idClose}
              type="button"
              onClick={() => {
                resetFormMovie();
              }}
              data-dismiss="modal"
              className="btn btn-danger"
            >
              Hủy
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Movie_Form;
