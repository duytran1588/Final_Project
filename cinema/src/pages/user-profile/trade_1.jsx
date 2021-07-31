import React from "react";
import format from "date-format";
function Trade_1(props) {
  const { userProfile } = props;
  return (
    <div>
      <div id="trade_detail" className="collapse trade_1">
        <table className="payment_1">
          <thead>
            <tr>
              <th>Hệ thống rạp</th>
              <th>Tên rạp</th>
              <th>Ghế</th>
              <th>Ngày đặt</th>
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
                        <table key={index}>
                          <tr>
                            <td>{ghe.tenHeThongRap}</td>
                          </tr>
                        </table>
                      );
                    })}
                  </td>
                  <td>
                    {item.danhSachGhe.map((ghe, index) => {
                      return (
                        <table key={index}>
                          <tr>
                            <td>{ghe.tenCumRap}</td>
                          </tr>
                        </table>
                      );
                    })}
                  </td>
                  <td>
                    {item.danhSachGhe.map((ghe, index) => {
                      return (
                        <table key={index}>
                          <tr>
                            <td>{ghe.tenGhe}</td>
                          </tr>
                        </table>
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
        </table>
      </div>
    </div>
  );
}

export default Trade_1;
