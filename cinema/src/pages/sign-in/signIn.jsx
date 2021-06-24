import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../../src/components/footer/footer";
import "./signIn.scss";
import Swal from "sweetalert2";
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
    const { name, type, value } = e.target; //boc tach bien <ES6>

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    //xét lỗi rỗng
    if (value.trim() === "") {
      //loại bỏ các khoảng trắng bằng trim()
      newErrors[name] = "Vui lòng không để trống!";
    }

    //note: setState là phương thức bất đồng bộ => hạn chế gọi trong code
    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //ngăn submit gây reload trang
    console.log("submit");
    //xét dk cho submit
    let { values, errors } = this.state;
    //Biến xác định form hợp lệ
    let valid = true;

    //dùng for in để xét vòng lặp trog object
    // let profileContent = "";
    //th error
    // let errorContent = "";
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        break;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        // errorContent += `
        //     <p class="text-left">
        //       <b>${key}</b>: invalid
        //     </p>
        //     `;
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

    Swal.fire({
      title: "Xin chào",
      // text: 'Do you want to continue',
      //có thể thay text bằng html
      //   html: profileContent,
      icon: "success", //success, error, warning
      confirmButtonText: "Đăng nhập thành công",
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="signIn">
          <section>
            <div className="sign-in container">
              <form onSubmit={this.handleSubmit} className="sign_in_form">
                <h1 className="text-center mt-0 mb-5">Đăng nhập</h1>
                <div className="row">
                  <div className="col-12">
                    <div className="group">
                      <input
                        value={this.state.values.taiKhoan}
                        onChange={this.handleChangeValue}
                        name="taiKhoan"
                        type="text"
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
                    <div class="group">
                      <input
                        value={this.state.values.matKhau}
                        onChange={this.handleChangeValue}
                        name="matKhau"
                        type="password"
                      />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>mật khẩu</label>
                      <span className="text-danger">
                        {this.state.errors.matKhau}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 row">
                  <div className="col-12">
                    <button
                      className="btn text-light bg-success w-100"
                      style={{ fontSize: 25 }}
                    >
                      Đăng nhập
                    </button>
                  </div>
                </div>
                <div className="mt-5 row">
                  <div className="col-12">
                    <span>
                      Bạn chưa có tài khoản? Vui lòng{" "}
                      <a
                        className="text-danger"
                        style={{ textDecoration: "none" }}
                        href="#"
                      >
                        đăng ký
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
