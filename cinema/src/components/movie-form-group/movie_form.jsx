import axios from "axios";
import React, { Component } from "react";
import Swal from "sweetalert2";

class Movie_Form extends Component {
  state = {
    values: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: {},
      moTa: "",
      maNhom: "GP01",
      ngayKhoiChieu: "",
      danhGia: "",
    },
    errors: {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      ngayKhoiChieu: "",
      danhGia: "",
    },
  };
  handleAddMovie = (e) => {
    const { getMoviePageList } = this.props;
    const { errors, values } = this.state;
    e.preventDefault();
    console.log("test_type_button");
    let isValid = true;
    for (let key in values) {
      if (values[key] === "" || values[key] === {}) {
        isValid = false;
        break;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      Swal.fire({
        title: "Thông tin của Bạn chưa đúng",
        icon: "error",
        confirmButtonText: "Vui lòng thử lại",
      });
      return;
    }

    Swal.fire({
      title: "Thêm phim mới?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
    }).then((result) => {
      if (result.isConfirmed) {
        let form_data = new FormData();
        for (let key in values) {
          form_data.append(key, values[key]);
          // console.log(key, form_data.get(key));
        }
        //call api
        axios({
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
          method: "POST",
          data: form_data,
        })
          .then((res) => {
            console.log(res.data);
            //tắt modal
            const btn_close_movie_modal = document.getElementById(
              "btn_close_movie_modal"
            );
            if (btn_close_movie_modal) {
              btn_close_movie_modal.click();
            }
            //render lại trang
            getMoviePageList();
            Swal.fire({
              title: "Thêm thành công",
              icon: "success", //success, error, warning
              confirmButtonText: "Đóng",
            });
          })
          .catch((err) => {
            Swal.fire({
              title: err.response.data,
              icon: "error", //success, error, warning
              confirmButtonText: "Đóng",
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Hủy");
      }
    });
  };
  handleChangeMovieInput = (e) => {
    const { name, type, value } = e.target; //boc tach bien <ES6>

    let newValues = { ...this.state.values };
    if (name === "hinhAnh") {
      newValues[name] = e.target.files[0];
    } else {
      if (name === "tenPhim") {
        newValues.biDanh = value;
      }
      newValues[name] = value;
    }

    let newErrors = { ...this.state.errors };

    //xét lỗi rỗng
    if (value.trim() === "") {
      //loại bỏ các khoảng trắng bằng trim()
      newErrors[name] = "Vui lòng không để trống !";
    } else {
      if (name == "hinhAnh") {
        if (newValues.hinhAnh == {}) {
          newErrors[name] = "Vui lòng chọn hình ảnh";
        } else {
          newErrors[name] = "";
        }
      } else if (name == "ngayKhoiChieu") {
        const reg =
          /^((0[1-9]|[12][0-9]|3[01])(\/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(\/)(02))|((0[1-9]|[12][0-9]|3[0])(\/)(0[469]|11))(\/)\d{4}$/;
        console.log("date", reg.test(value));
        if (!reg.test(value)) {
          newErrors[name] = "Định dạng ngày chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else if (name == "danhGia") {
        const reg = /^([1-9]|10)$/;
        if (!reg.test(value)) {
          newErrors[name] = "Điểm chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else {
        newErrors[name] = "";
      }
    }

    //note: setState là phương thức bất đồng bộ => hạn chế gọi trong code
    this.setState({
      values: newValues,
      errors: newErrors,
    });
    console.log(this.state.values);
  };

  resetFormMovie = () => {
    //set lại values và errors
    let newValues = { ...this.state.values };
    let newErrors = { ...this.state.errors };
    for (let key in newValues) {
      if (key === "hinhAnh") {
        newValues[key] = {};
      }
      if (key !== "maNhom") {
        newValues[key] = "";
      }
    }
    for (let key in newErrors) {
      newErrors[key] = "";
    }
    this.setState({
      values: newValues,
      errors: newErrors,
    });

    document.getElementById("addMovieForm").reset(); //mất hình ảnh đã chọn khi thêm movie lần trước
  };
  render() {
    return (
      <form
        onSubmit={this.handleAddMovie}
        id="addMovieForm"
        className="form-group"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-6"
              style={{ padding: "1rem", boxShadow: "none" }}
            >
              <div className="mb-3">
                <label>Mã phim</label>
                <input
                  type="text"
                  name="maPhim"
                  id="add_movie_code"
                  className="form-control"
                  placeholder
                  aria-describedby="helpId"
                  onChange={this.handleChangeMovieInput}
                  value={this.state.values.maPhim}
                />
                <small className="text-danger">
                  {this.state.errors.maPhim}
                </small>
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
                  onChange={this.handleChangeMovieInput}
                  value={this.state.values.tenPhim}
                />
                <small className="text-danger">
                  {this.state.errors.tenPhim}
                </small>
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
                  onChange={this.handleChangeMovieInput}
                  value={this.state.values.trailer}
                />
                <small className="text-danger">
                  {this.state.errors.trailer}
                </small>
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
                  onChange={this.handleChangeMovieInput}
                  value={this.state.values.ngayKhoiChieu}
                />
                <small className="text-danger">
                  {this.state.errors.ngayKhoiChieu}
                </small>
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
                  onChange={this.handleChangeMovieInput}
                  value={this.state.values.danhGia}
                />
                <small className="text-danger">
                  {this.state.errors.danhGia}
                </small>
              </div>
              <div className="mb-3">
                <label>Hình ảnh</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="hinhAnh"
                  id="add_movie_image"
                  placeholder
                  aria-describedby="fileHelpId"
                  onChange={this.handleChangeMovieInput}
                  value={this.state.hinhAnh}
                />
                <p
                  style={{ marginTop: "12px", fontSize: "80%" }}
                  className="text-danger"
                >
                  {this.state.errors.hinhAnh}
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
              onChange={this.handleChangeMovieInput}
            ></textarea>
            <small className="text-danger">{this.state.errors.moTa}</small>
          </div>
          <div className="mt-4 d-flex" style={{ justifyContent: "flex-end" }}>
            <button className="btn btn-success mr-2">Thêm</button>
            <button
              id="btn_close_movie_modal"
              onClick={() => {
                this.resetFormMovie();
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
