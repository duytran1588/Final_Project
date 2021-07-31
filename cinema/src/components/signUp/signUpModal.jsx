import React, { Component } from "react";

class SignUpModal extends Component {
  render() {
    const {
      handleChangeValue,
      handleSubmit,
      values,
      errors,
      title,
      button,
      resetInputForm,
      idClose,
      // idType,
      disabled,
    } = this.props;
    return (
      <form onSubmit={handleSubmit} className="sign_up_form">
        {title !== "Đăng ký" ? (
          ""
        ) : (
          <h1 className="text-center mt-0 mb-5">{title}</h1>
        )}
        <div className="row">
          <div className="col-12">
            <div className="group">
              <input
                // id="userAccount"
                value={values.taiKhoan}
                onChange={handleChangeValue}
                name="taiKhoan"
                type="text"
                required
                disabled={disabled}
              />
              <span className="highlight" />
              <span className="bar" />
              <label>{button==="Cập nhật" ? "" : "Tài khoản"}</label>
              <span className="text-danger">{errors.taiKhoan}</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="group">
              <input
                // id="userNameAccount"
                value={values.hoTen}
                onChange={handleChangeValue}
                name="hoTen"
                type="text"
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Họ tên</label>
              <span className="text-danger">{errors.hoTen}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="group">
              <input
                // id="userPhoneNumber"
                value={values.soDt}
                onChange={handleChangeValue}
                name="soDt"
                type="text"
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>Số điện thoại</label>
              <span className="text-danger">{errors.soDt}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="group">
              <input
                // id="userEmailAccount"
                value={values.email}
                onChange={handleChangeValue}
                name="email"
                type="email"
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>email</label>
              <span id="error_userMail" className="text-danger">
                {errors.email}
              </span>
            </div>
          </div>
        </div>

        {title !== "Đăng ký" ? (
          <div className="row">
            <div className="col-12">
              <div className="group">
                <div className="form-group">
                  <h4
                    style={{
                      color: "#999",
                      fontSize: "17px",
                      marginBottom: "1rem",
                    }}
                  >
                    Loại người dùng
                  </h4>
                  <select
                    onChange={handleChangeValue}
                    style={{ fontSize: "20px", color: "black" }}
                    className="custom-select"
                    name="maLoaiNguoiDung"
                    
                    value={values.maLoaiNguoiDung}
                  >
                    <option value="KhachHang">KhachHang</option>
                    <option value="QuanTri">QuanTri</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="row">
          <div className="col-12">
            <div className="group">
              <input
                // id="userPassAccount"
                value={values.matKhau}
                onChange={handleChangeValue}
                name="matKhau"
                type="password"
                required
              />
              <span className="highlight" />
              <span className="bar" />
              <label>mật khẩu</label>
              <span className="text-danger">{errors.matKhau}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12"
            style={
              title !== "Đăng ký"
                ? { display: "flex", justifyContent: "center" }
                : {}
            }
          >
            <button
              className={
                title !== "Đăng ký"
                  ? "btn text-light bg-success mr-2"
                  : "btn text-light bg-success w-100"
              }
              style={
                title !== "Đăng ký" ? { width: "6rem" } : { fontSize: "25px" }
              }
            >
              {button}
            </button>
            {title !== "Đăng ký" ? (
              <button
                // type="button"
                style={{ width: "6rem" }}
                className="btn text-light bg-danger"
                onClick={() => {
                  document.getElementById(idClose).click();
                  //trả trường data thêm về null
                  resetInputForm();
                }}
              >
                Hủy
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default SignUpModal;
