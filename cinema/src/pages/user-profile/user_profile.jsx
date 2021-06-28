import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutApi, userProfileApi } from "../../stores/actions/movie.action";
import format from "date-format";
import { useHistory } from "react-router";

function UserProfile() {
  //   const [account, setAccout] = useState({
  //     taiKhoan: "",
  //   });
  const account = {
    taiKhoan: "",
  };
  //lấy data dưới local storage
  const user = JSON.parse(localStorage.getItem("userLogin"));
  account.taiKhoan = user?.taiKhoan;
  console.log(account);
  //dispatch taiKhoan call api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileApi(account));
  }, []);

  //lên reducer lấy userprofile
  const userProfile = useSelector((state) => {
    return state.cinemaReducer.userProfile;
  });

  return (
    <div className="user-profile container">
      <section className="greeting">
        <h1 className="mb-4">Xin chào {userProfile?.hoTen}</h1>
        <img
          width="20%"
          src={"./assets/images/user-profile/user_profile.png"}
        />
        {/* hình ảnh user */}
      </section>
      <section className="profile_info mt-5">
        <div>Tài khoản: {userProfile?.taiKhoan}</div>
        <div>Họ tên: {userProfile?.hoTen}</div>
        <div>Email: {userProfile?.email}</div>
        <div>Số điện thoại: {userProfile?.soDT}</div>
        <div className="trade_modal">
          <button
            type="button"
            class="btn btn-success mb-5"
            data-toggle="collapse"
            data-target="#trade_detail"
          >
            Chi tiết giao dịch
          </button>
          <div id="trade_detail" className="collapse trade_1">
            <table className="payment_1">
              <thead>
                <tr>
                  <th>Hệ thống rạp</th>
                  <th>Tên rạp</th>
                  <th>Số ghế</th>
                  <th>Ngày dặt</th>
                  <th>Phim</th>
                  <th>Giá vé</th>
                </tr>
              </thead>
              <tbody>
                {userProfile?.thongTinDatVe.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {item.danhSachGhe.map((ghe, index) => {
                          return (
                            <tr key={index}>
                              <td>{ghe.tenHeThongRap}</td>
                            </tr>
                          );
                        })}
                      </td>
                      <td>
                        {item.danhSachGhe.map((ghe, index) => {
                          return (
                            <tr key={index}>
                              <td>{ghe.tenCumRap}</td>
                            </tr>
                          );
                        })}
                      </td>
                      <td>
                        {item.danhSachGhe.map((ghe, index) => {
                          return (
                            <tr key={index}>
                              <td>{ghe.tenGhe}</td>
                            </tr>
                          );
                        })}
                      </td>

                      <td>
                        {format("dd/mm/yyyy hh:mm:ss", new Date(item.ngayDat))}
                      </td>
                      <td>{item.tenPhim}</td>
                      <td>{item.giaVe.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    className="text-right"
                    style={{ paddingRight: "5rem" }}
                    colSpan="5"
                  >
                    Tổng tiền
                  </td>
                  <td>
                    {userProfile?.thongTinDatVe
                      .reduce((tongTien, item) => {
                        return (tongTien += item.giaVe);
                      }, 0)
                      .toLocaleString()}{" "}
                    VNĐ
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div id="trade_detail" className="collapse trade_2">
            <table className="payment_2">
              <thead>
                <tr>
                  <th>Hệ thống rạp</th>
                  {/* <th>Tên rạp</th> */}
                  {/* <th>Số ghế</th> */}
                  <th>Ngày dặt</th>
                  <th>Phim</th>
                  <th>Giá vé</th>
                </tr>
              </thead>
              <tbody>
                {userProfile?.thongTinDatVe.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {item.danhSachGhe.map((ghe, index) => {
                          return (
                            <tr key={index}>
                              <td>{ghe.tenHeThongRap}</td>
                            </tr>
                          );
                        })}
                      </td>
                      {/* <td>
                        {item.danhSachGhe.map((ghe, index) => {
                          return (
                            <tr key={index}>
                              <td>{ghe.tenCumRap}</td>
                            </tr>
                          );
                        })}
                      </td> */}
                      {/* <td>
                        {item.danhSachGhe.map((ghe, index) => {
                          return (
                            <tr key={index}>
                              <td>{ghe.tenGhe}</td>
                            </tr>
                          );
                        })}
                      </td> */}

                      <td>{format("dd/mm/yyyy", new Date(item.ngayDat))}</td>
                      <td>{item.tenPhim}</td>
                      <td>{item.giaVe.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    className="text-right"
                    style={{ paddingRight: "5rem" }}
                    colSpan="3"
                  >
                    Tổng tiền
                  </td>
                  <td>
                    {userProfile?.thongTinDatVe
                      .reduce((tongTien, item) => {
                        return (tongTien += item.giaVe);
                      }, 0)
                      .toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
