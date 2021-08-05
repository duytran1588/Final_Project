import React from "react";
import format from "date-format";

function Trade2(props) {
  const { userProfile } = props;

  return (
    <div>
      <div id="trade_detail" className="collapse trade_2">
        <table id="trade_table" className="payment_2">
          <thead>
            <tr>
              <th>Hệ thống rạp</th>
              {/* <th>Tên rạp</th> */}
              {/* <th>Số ghế</th> */}
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
                        <table style={{ border: "none" }} key={index}>
                          <tbody style={{ border: "none" }}>
                            <tr style={{ border: "none" }}>
                              <td style={{ border: "none" }}>
                                {ghe.tenHeThongRap}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    })}
                  </td>

                  <td>{format("dd/mm/yyyy", new Date(item.ngayDat))}</td>
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

export default Trade2;
