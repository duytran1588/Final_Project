import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../../src/components/footer/footer";
import "./signUp.scss";
import Swal from "sweetalert2";
class SignUp extends Component {
  state = {
    values: {
      hoTen: "",
      soDt: "",
      email: "",
      matKhau: "",
      taiKhoan: "",
    },
    errors: {
      hoTen: "",
      soDt: "",
      email: "",
      matKhau: "",
      taiKhoan: "",
    },
  };

  handleChangeValue = (e) => {
    const { name, type, value } = e.target; //boc tach bien <ES6>

    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    //xét lỗi rỗng
    if (value.trim() === "") {
      //loại bỏ các khoảng trắng bằng trim()
      newErrors[name] = "Vui lòng không để trống !";
    } else {
      if (type === "email") {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
          newErrors[name] = name + "  chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else if (name === "hoTen") {
        const re =
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (!value.match(re)) {
          newErrors[name] = "Họ tên không được chứa số hay kí tự đặc biệt";
        } else {
          newErrors[name] = "";
        }
      } else if (name === "soDt") {
        const re = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
        if (!value.match(re)) {
          newErrors[name] = "Số điện thoại chưa đúng";
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
  };

  handleSubmit = (e) => {
    e.preventDefault(); //ngăn submit gây reload trang
    console.log("submit");
    //xét dk cho submit
    let { values, errors } = this.state;
    //Biến xác định form hợp lệ
    let valid = true;

    //dùng for in để xét vòng lặp trog object
    let profileContent = "";
    //th error
    let errorContent = "";
    for (let key in values) {
      if (values[key] === "") {
        valid = false;
        break;
      }
      // if (key !== "matKhau") {
      //   profileContent += `
      //     <p class="text-left">
      //       <b>${key}</b>: ${values[key]}
      //     </p>`;
      // }
    }
    
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        // errorContent += `
        //     <p class="text-left">
        //       <b>${key}</b>: chưa hợp lệ
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
      title: "Chào mừng bạn đã tham gia",
      // text: 'Do you want to continue',
      //có thể thay text bằng html
      // html: profileContent,
      icon: "success", //success, error, warning
      confirmButtonText: "Thành công",
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="signUp">
          <section>
            <div className="sign-up container">
              <form onSubmit={this.handleSubmit} className="sign_up_form">
                <h1 className="text-center mt-0 mb-5">Đăng ký</h1>
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
                    <div className="group">
                      <input
                        value={this.state.values.hoTen}
                        onChange={this.handleChangeValue}
                        name="hoTen"
                        type="text"
                      />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>Họ tên</label>
                      <span className="text-danger">
                        {this.state.errors.hoTen}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div class="group">
                      <input
                        value={this.state.values.soDt}
                        onChange={this.handleChangeValue}
                        name="soDt"
                        type="text"
                      />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>Số điện thoại</label>
                      <span className="text-danger">
                        {this.state.errors.soDt}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div class="group">
                      <input
                        value={this.state.values.email}
                        onChange={this.handleChangeValue}
                        name="email"
                        type="email"
                      />
                      <span className="highlight" />
                      <span className="bar" />
                      <label>email</label>
                      <span className="text-danger">
                        {this.state.errors.email}
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
                <div className="row">
                  <div className="col-12">
                    <button
                      className="btn text-light bg-success w-100"
                      style={{ fontSize: 25 }}
                    >
                      Đăng ký
                    </button>
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

export default SignUp;
