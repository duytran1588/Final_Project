import React from "react";
import format from "date-format";

function Trade_2(props) {
  const { userProfile } = props;
  return (
    <div>
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
  );
}

export default Trade_2;
