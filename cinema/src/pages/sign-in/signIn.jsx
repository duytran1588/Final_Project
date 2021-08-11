import React, { Component } from "react";
import "./signIn.scss";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signInApi } from "../../stores/actions/movie.action";
import logo from "./background-image/tix_logo_new.png";
class SignIn extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
    },
  };

  handleChangeValue = (e) => {
    const { name, value } = e.target; //boc tach bien <ES6>

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    //xét lỗi rỗng
    if (value.trim() === "") {
      //loại bỏ các khoảng trắng bằng trim()
      newErrors[name] = "Vui lòng không để trống!";
    } else {
      newErrors[name] = "";
    }

    //note: setState là phương thức bất đồng bộ => hạn chế gọi trong code
    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  handleSignIn = (e) => {
    e.preventDefault(); //ngăn submit gây reload trang
    //xét dk cho submit
    let { values, errors } = this.state;
    //Biến xác định form hợp lệ
    let valid = true;

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        break;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        break;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Thông tin của Bạn chưa đúng",
        // text: 'Do you want to continue',
        //có thể thay text bằng html
        // html: errorContent,
        icon: "error", //success, error, warning
        confirmButtonText: "Vui lòng thử lại",
      });
      return;
    }

    this.props.dispatch(signInApi(this.state.values, this.props.history));
  };
  render() {
    return (
      <div>
        <div className="signIn">
          <section>
            <div className="sign-in container">
              <form onSubmit={this.handleSignIn} className="sign_in_form">
                <div>
                  <button
                    onClick={() => {
                      this.props.history.push("/");
                    }}
                    type="button"
                    className="btn_Close_SignIn"
                  >
                    +
                  </button>
                </div>
                <div className="text-center">
                  <img alt="" src={logo} />
                  <p
                    style={{ fontSize: "15px", marginBottom: "7rem" }}
                    className="text-white"
                  >
                    Thế giới phim trên đầu ngón tay
                  </p>
                  <p className="mb-5 text-white" style={{ fontSize: "20px" }}>
                    Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                  </p>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="group">
                      <input
                        value={this.state.values.taiKhoan}
                        onChange={this.handleChangeValue}
                        name="taiKhoan"
                        type="text"
                        required
                      />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>Tài khoản</label>
                      <span className="text-danger">
                        {this.state.errors.taiKhoan}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="group">
                      <input
                        value={this.state.values.matKhau}
                        onChange={this.handleChangeValue}
                        name="matKhau"
                        type="password"
                        required
                      />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>Mật khẩu</label>
                      <span className="text-danger">
                        {this.state.errors.matKhau}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 row">
                  <div className="col-12">
                    <button
                      className="btn text-light w-100"
                      style={{
                        border: "solid 1px",
                        fontSize: 16,
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      Đăng nhập
                    </button>
                  </div>
                </div>
                <div className="mt-2 row">
                  <div className="col-12 text-center guide">
                    <button
                      onClick={() => {
                        this.props.history.push("/sign-up");
                      }}
                      type="button"
                      style={{
                        fontSize: 16,
                        border: "solid 1px",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                      className="btn w-100 bg-light"
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(SignIn));
