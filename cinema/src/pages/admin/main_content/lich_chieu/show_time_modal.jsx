import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Swal from "sweetalert2";
import format from "date-format";
import { useDispatch } from "react-redux";
import { getShowTimeList } from "../../../../stores/actions/admin.action";

function Show_Time_Modal(props) {
  const { maPhim } = props;
  const dispatch = useDispatch();
  //data hệ thống rạp
  const [cinema_system_list, setCinema_system_list] = useState([]);
  //data cụm rạp
  const [cinema_brand, setCinemaBrand] = useState([]);
  //data tên rạp của mỗi cụm rạp
  const [cinema_number_list, setCinemaNumber_list] = useState([]);

  //data để submit thêm lịch chiếu
  const [showTimeData, setShowTimeData] = useState({
    cinema: "",
    duration: "", //thời lượng phim
    price: "",
    date: "", //ngày chiếu
    time: "", //giờ chiếu
  });

  const [showTimeErrors, setShowTimeErrors] = useState({
    duration: "", //thời lượng phim
    price: "", //giá vé
    date: "", //ngày chiếu
    time: "", //giờ chiếu
  });

  //call api lấy danh sách hệ thống rạp
  const getCinemaSystemList = async () => {
    console.log(showTimeData);
    try {
      const res = await axios({
        method: "GET",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      });
      setCinema_system_list(res.data);
      //lấy maHeThongRap của rap đầu tiên (BHDStar)
      //dựa vào maHeThongRap truyền vào lấy dữ liệu tất cả các cụm rạp của 1 hệ thống
      getCinemaSystemBrand(res.data[0].maHeThongRap);
    } catch (err) {
      console.log(err);
    }
  };

  //call api lấy thông tin cụm rạp theo hệ thống
  const getCinemaSystemBrand = async (brand) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${brand}`,
      });

      setCinemaBrand(res.data);

      //tìm tất cả các optgroup (tab-pane) đang active để remove active
      document
        .querySelector("#tab_control_cinema_number optgroup.active")
        ?.classList.remove("active");

      //tìm xem hệ thống rạp đang ở cụm rạp nào, lấy value => dom tới id có value tương ứng gán active
      const valueCinemaSystem =
        document.getElementById("cinemaSystemChoice").value;

      //các thẻ a trung gian đang active được bỏ active
      document
        .querySelector(".tab_control_link li a.active")
        ?.classList.remove("active");

      //dom tới thẻ a trung gian và kích hoạt thẻ này
      if (valueCinemaSystem) {
        document.getElementById(`${valueCinemaSystem}`).click();
      }
      //đưa tên rạp ở ô chọn rạp trở về ô đầu tiên (rạp 1)
      const option = document.querySelector(
        "#tab_control_cinema_number optgroup.active option:first-child"
      );
      if (option) {
        option.selected = "true";
      }

      getCinemaNumber();
    } catch (err) {
      console.log(err);
    }
  };

  const getCinemaNumber = () => {
    //setState chọn tên rap đầu tiên trong ô chọn rạp
    const cinemaNumber = document.querySelector(
      "#tab_control_cinema_number optgroup.active option:first-child"
    )?.value;
    if (cinemaNumber) {
      setShowTimeData({
        ...showTimeData,
        cinema: cinemaNumber,
      });
    }
  };

  //   hàm chọn hệ thống rạp
  const handleChangeCinemaSystem = (e) => {
    const { value } = e.target;
    getCinemaSystemBrand(value);
  };

  //viết hàm xử lý trước khi set lại setShowTimeData
  const tabControl = (value) => {
    document
      .querySelector(".tab_control_link li a.active")
      ?.classList.remove("active");

    document
      .querySelector("#tab_control_cinema_number optgroup.active")
      ?.classList.remove("active");

    //dom toi tab control cho thẻ có id trung với value, cho thẻ a này .click
    document.getElementById(`${value}`).click();

    //đưa tên rạp ở ô chọn rạp trở về ô đầu tiên (rạp 1)
    const option = document.querySelector(
      "#tab_control_cinema_number optgroup.active option:first-child"
    );
    if (option) {
      option.selected = "true";
    }
  };
  //hàm chọn số rạp (mặc định) trong từng cụm rạp
  const handleChangeCinemaBranches = (e) => {
    const { value } = e.target;
    tabControl(value);

    //sau khi chọn cụm rạp xong sẽ tự động chọn ghế đầu tiên trong danh sách ghế của cụm rạp

    getCinemaNumber();
  };

  //hàm chọn số rạp cụ thể trong mục chọn rạp
  const handleChangeCinemaNumber = (e) => {
    const { value } = e.target;
    setShowTimeData({
      ...showTimeData,
      cinema: value,
    });
  };

  //kiểm tra đk
  const checkValidShowtime = () => {
    let isValid = true;
    for (let key in showTimeData) {
      if (showTimeData[key] === "") {
        isValid = false;
        break;
      }
    }
    console.log(isValid);
    for (let key in showTimeErrors) {
      if (showTimeErrors[key] !== "") {
        isValid = false;
        break;
      }
    }
    console.log(isValid);
    return isValid;
  };

  const handleAddShowTime = (e) => {
    e.preventDefault();
    console.log(showTimeData);
    console.log(showTimeErrors);
    const isValid = checkValidShowtime();
    console.log(isValid);
    if (!isValid) {
      Swal.fire({
        title: "Thông tin của Bạn chưa đúng",
        icon: "error",
        confirmButtonText: "Vui lòng thử lại",
      });
      return;
    }
    Swal.fire({
      title: "Thêm lịch chiếu phim mới?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
    }).then((result) => {
      if (result.isConfirmed) {
        const dataStorage = JSON.parse(localStorage.getItem("userLogin"));
        const accessToken = dataStorage.accessToken;
        // const date = format("dd-MM-yyyy", new Date(showTimeData.date));
        let ngayChieuGioChieu = showTimeData.date + " " + showTimeData.time;

        let showTimeInfo = {
          maPhim: maPhim,
          ngayChieuGioChieu: ngayChieuGioChieu,
          maRap: showTimeData.cinema,
          giaVe: showTimeData.price,
        };
        console.log(showTimeInfo);
        axios({
          method: "POST",
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu",
          data: showTimeInfo,
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((res) => {
            //thêm thành công
            const btnShowTimeModalClose = document.getElementById(
              "btnShowTimeModalClose"
            );
            if (btnShowTimeModalClose) {
              btnShowTimeModalClose.click();
            }
            //render lại lịch chiếu

            Swal.fire({
              title: "Thêm lịch chiếu thành công",
              icon: "success", //success, error, warning
              confirmButtonText: "Đóng",
            });
            dispatch(getShowTimeList(maPhim));
          })
          .catch((err) => {
            console.log(err);
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

  const handleChangeShowTime = (e) => {
    const { value, name } = e.target;
    let newValues = { ...showTimeData };
    let newErrors = { ...showTimeErrors };
    newValues[name] = value;
    if (value.trim() === "") {
      newErrors[name] = "Vui lòng không để trống";
    } else {
      if (name === "duration" || name === "price") {
        const reg = /^\d+$/;
        if (!reg.test(value)) {
          newErrors[name] = "Số chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else if (name === "date") {
        const reg =
          /^((0[1-9]|[12][0-9]|3[01])(\/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(\/)(02))|((0[1-9]|[12][0-9]|3[0])(\/)(0[469]|11))(\/)\d{4}$/;
        if (!reg.test(value)) {
          newErrors[name] = "Định dạng ngày chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else if (name === "time") {
        const reg = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
        if (!reg.test(value)) {
          newErrors[name] = "Định dạng giờ chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else {
        newErrors[name] = "";
      }
    }
    setShowTimeData(newValues);
    setShowTimeErrors(newErrors);
  };

  const resetShowTimeForm = () => {
    let newShowTimeData = { ...showTimeData };
    let newShowTimeErrors = { ...showTimeErrors };
    for (let key in newShowTimeData) {
      if (key !== "cinema") {
        newShowTimeData[key] = "";
      }
    }
    for (let key in newShowTimeErrors) {
      newShowTimeErrors[key] = "";
    }
    console.log(newShowTimeData);
    console.log(newShowTimeErrors);
    setShowTimeErrors(newShowTimeErrors);
    setShowTimeData(newShowTimeData);
  };

  useEffect(() => {
    getCinemaSystemList();
    console.log("maHeThongRap", cinema_system_list);
    // getCinemaSystemBrand(value);
  }, []);
  return (
    <div className="modal fade" style={{ padding: 0 }} id="addShowTime">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Thêm lịch chiếu</h4>
            <button
              onClick={() => {
                resetShowTimeForm();
              }}
              id="btnShowTimeModalClose"
              type="button"
              className="close"
              data-dismiss="modal"
            >
              +
            </button>
          </div>
          {/* Modal body */}
          <div classname="modal-body">
            <form
              onSubmit={handleAddShowTime}
              id="ShowTimeForm"
              className="form-group"
            >
              <div className="container">
                <div className="row">
                  <div
                    className="col-6"
                    style={{ padding: "1rem", boxShadow: "none" }}
                  >
                    <div className="mb-3">
                      <label>Chọn hệ thống rạp</label>
                      <select
                        onChange={handleChangeCinemaSystem}
                        //onchange vừa đổi data trên state vừa gọi api với mã tương ứng lấy cụm rạp
                        style={{ fontSize: "20px", color: "black" }}
                        class="custom-select"
                        name

                        // value={values.maLoaiNguoiDung}
                      >
                        {cinema_system_list.map((cinema, index) => {
                          return (
                            <option key={index} value={cinema.maHeThongRap}>
                              {cinema.tenHeThongRap}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label>Chọn rạp</label>
                      <select
                        style={{ fontSize: "20px", color: "black" }}
                        className="custom-select tab-content"
                        id="tab_control_cinema_number"
                        onChange={handleChangeCinemaNumber}
                      >
                        {cinema_brand.map((cinema, index) => {
                          return (
                            <optgroup
                              className={`tab-pane ${
                                index === 0 ? "active" : "fade"
                              }`}
                              id={`control_${cinema.maCumRap}`}
                              label={cinema.tenCumRap}
                              key={index}
                            >
                              {cinema.danhSachRap.map((rap, index) => {
                                return (
                                  <option key={index} value={rap.maRap}>
                                    {rap.tenRap}
                                  </option>
                                );
                              })}
                            </optgroup>
                          );
                        })}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label>Ngày chiếu</label>
                      <input
                        style={{ height: "43px" }}
                        type="text"
                        name="date"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        aria-describedby="helpId"
                        onChange={handleChangeShowTime}
                        value={showTimeData.date}
                      />
                      <small className="text-danger">
                        {showTimeErrors.date}
                      </small>
                    </div>
                    <div className="mb-3">
                      <label>Giá vé</label>
                      <input
                        style={{ height: "43px" }}
                        type="text"
                        name="price"
                        className="form-control"
                        placeholder
                        aria-describedby="helpId"
                        onChange={handleChangeShowTime}
                        value={showTimeData.price}
                      />
                      <small className="text-danger">
                        {showTimeErrors.price}
                      </small>
                    </div>
                  </div>

                  <div
                    className="col-6"
                    style={{ padding: "1rem", boxShadow: "none" }}
                  >
                    <div className="mb-3">
                      <div className="mb-3">
                        <label>Chọn cụm rạp</label>
                        <select
                          onChange={handleChangeCinemaBranches}
                          style={{ fontSize: "20px", color: "black" }}
                          className="custom-select tap-control-system-cinena"
                          id="cinemaSystemChoice"
                        >
                          {cinema_brand.map((brand, index) => {
                            return (
                              <option
                                key={index}
                                // name={brand.danhSachRap}
                                value={brand.maCumRap}
                              >
                                {brand.tenCumRap}
                                {/* </a> */}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label>Thời lượng phim</label>
                      <input
                        style={{ height: "43px" }}
                        type="text"
                        name="duration"
                        className="form-control"
                        placeholder
                        aria-describedby="helpId"
                        onChange={handleChangeShowTime}
                        value={showTimeData.duration}
                      />
                      <small className="text-danger">
                        {showTimeErrors.duration}
                      </small>
                    </div>
                    <div className="mb-3">
                      <label>Giờ chiếu</label>
                      <input
                        style={{ height: "43px" }}
                        type="text"
                        name="time"
                        className="form-control"
                        placeholder="hh:mm:ss"
                        aria-describedby="helpId"
                        onChange={handleChangeShowTime}
                        value={showTimeData.time}
                      />
                      <small className="text-danger">
                        {showTimeErrors.time}
                      </small>
                      {/* <small className="text-danger">
                        {showTimeData.cinema}
                      </small> */}
                    </div>
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "flex-start",
                        marginTop: "46px",
                      }}
                    >
                      <button
                        style={{ width: "5rem" }}
                        className="btn btn-success mr-2"
                        type="submit"
                      >
                        Thêm
                      </button>
                      <button
                        style={{ width: "5rem" }}
                        type="button"
                        data-dismiss="modal"
                        className="btn btn-danger"
                        onClick={() => {
                          resetShowTimeForm();
                        }}
                      >
                        Hủy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* tao tab control */}
            <ul className="tab_control_link" style={{ display: "none" }}>
              {cinema_brand.map((cinema, index) => {
                return (
                  <li>
                    <a
                      class={`nav-link ${index === 0 ? "active" : ""}`}
                      id={cinema.maCumRap}
                      label={cinema.tenCumRap}
                      key={index}
                      //thẻ a mà được click sẽ tự động kích hoạt optgroup là tab-pane active
                      href={`#control_${cinema.maCumRap}`}
                      data-toggle="tab"
                    >
                      {cinema.tenCumRap}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show_Time_Modal;