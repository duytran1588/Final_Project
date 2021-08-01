import React, { Component } from "react";
// import "./signUp.scss";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { signUpAPI } from "../../stores/actions/movie.action";
import { withRouter } from "react-router"; //để dùng history, location, match (để lấy params)
import SignUpModal from "../../components/signUp/signUpModal";
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

    //nếu valid = true => gán thêm gp01 và maLoaiNguoiDung: khachhang
    const userLogin = {
      ...this.state.values,
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    };

    this.props.dispatch(signUpAPI(userLogin, this.props.history));
  };
  render() {
    return (
      <div>
        <div className="signUp">
          <section>
            <div className="sign-up container">
              <SignUpModal
                values={this.state.values}
                errors={this.state.errors}
                handleChangeValue={this.handleChangeValue}
                handleSubmit={this.handleSubmit}
                title={"Đăng ký"}
                button={"Đăng ký"}
              />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(SignUp));
