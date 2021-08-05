import React, { useEffect, useState } from "react";
import FormGroupInput from "./form_group_input";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { updateUserApi } from "../../stores/actions/movie.action";

function ModalUpdate(props) {
  const { userProfile } = props;
  const dispatch = useDispatch();
  const getDataFromUserLogin = () => {
    document.getElementById("userFullName").defaultValue = userProfile?.hoTen;
    document.getElementById("user_Account").defaultValue =
      userProfile?.taiKhoan;
    document.getElementById("userPass").defaultValue = userProfile?.matKhau;
    document.getElementById("userEmail").defaultValue = userProfile?.email;
    document.getElementById("userPhone").defaultValue = userProfile?.soDT;
  };
  useEffect(() => {
    getDataFromUserLogin();
  });

  const [account, setAccount] = useState({
    //ban đầu userProfile null chưa được call API và truyền vào bởi user_profile.jsx => phải để values là ""
    values: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
    },
    errors: {
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
    },
  });

  const getEle = (id) => {
    return document.getElementById(id).value;
  };

  const handleChange = (e) => {
    const { type, value, name } = e.target;
    let newValues = { ...account.values, [name]: value };
    let newErrors = { ...account.errors };
    //xét lỗi rỗng
    if (value.trim() === "") {
      newErrors[name] = "Vui lòng không để trống !";
    } else {
      if (type === "email") {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
          newErrors[name] = name + " chưa hợp lệ";
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
      } else if (name === "soDT") {
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

    setAccount({
      values: newValues,
      errors: newErrors,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const { errors } = account;

    let valid = true;

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        break;
      }
    }

    if (!valid) {
      Swal.fire({
        title: "Thông tin của Bạn chưa đúng",
        icon: "error", //success, error, warning
        confirmButtonText: "Vui lòng thử lại",
      });
      return;
    }

    //gán value từ các ô input cho account
    //bên input không phải ô nào cũng được chỉnh sửa nên handleChange không thể setAccount hết tất cả các input
    //và vì ban đầu account.values được xét là "" nên phải getEle để gán tất cả input cho account
    account.values = {
      hoTen: getEle("userFullName"),
      taiKhoan: getEle("user_Account"),
      matKhau: getEle("userPass"),
      email: getEle("userEmail"),
      soDT: getEle("userPhone"),
      //tự thêm vào để call API
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    };

    //nếu valid = true => ra thông báo xác nhận
    Swal.fire({
      title: "Bạn chắc chắn muốn cập nhật thông tin?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //dispatch action
        dispatch(updateUserApi(account.values));

        //thoát modal
        document.getElementById("btn_cancel").click();
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire("Thông tin chưa được cập nhật");
      }
    });
  };

  return (
    <div className="modal fade" id="modal_Update">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Cập nhật thông tin</h4>
            <button type="button" className="close" data-dismiss="modal">
              +
            </button>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <div className="container">
              <div className="form-group">
                <FormGroupInput
                  // dung defaultValue de type trong input (TH da duoc binding)

                  label={"Họ Tên"}
                  name={"hoTen"}
                  type={"text"}
                  handleChange={handleChange}
                  error={account.errors.hoTen}
                  id="userFullName"
                />

                <FormGroupInput
                  label={"Tài Khoản"}
                  name={"taiKhoan"}
                  type={"text"}
                  handleChange={handleChange}
                  error={account.errors.taiKhoan}
                  id="user_Account"
                  // disabled="true"
                  disabled
                />

                <FormGroupInput
                  label={"Mật Khẩu"}
                  name={"matKhau"}
                  type={"password"}
                  handleChange={handleChange}
                  error={account.errors.matKhau}
                  id="userPass"
                />

                <FormGroupInput
                  label={"Email"}
                  name={"email"}
                  type={"email"}
                  handleChange={handleChange}
                  error={account.errors.email}
                  id="userEmail"
                />

                <FormGroupInput
                  label={"Số Điện Thoại"}
                  name={"soDT"}
                  type={"number"}
                  handleChange={handleChange}
                  error={account.errors.soDT}
                  id="userPhone"
                />
              </div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleUpdate}
            >
              Xác nhận
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              id="btn_cancel"
              onClick={() => {
                getDataFromUserLogin();
              }}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdate;
