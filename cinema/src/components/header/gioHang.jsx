import React from "react";

function GioHang(props) {
  const { ticket_info, gioHang } = props;
  console.log(ticket_info);
  return (
    <div className="modal fade" id="booking_ticket_info">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Thông tin giỏ hàng</h4>

            <button type="button" className="close" data-dismiss="modal">
              +
            </button>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <h3>{ticket_info.thongTinPhim?.tenPhim}</h3>
            <p>{ticket_info.thongTinPhim?.tenCumRap}</p>
            <p>{ticket_info.thongTinPhim?.tenRap}</p>
            <p>{ticket_info.thongTinPhim?.diaChi}</p>
            <table className="text-center table table-bordered table-hover myTable">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Số ghế</th>
                  <th>Loại ghế</th>
                  <th>Đơn giá</th>
                </tr>
              </thead>
              <tbody>
                {gioHang.map((ve, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{ve.tenGhe}</td>
                      <td>{ve.loaiGhe}</td>
                      <td>{ve.giaVe}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Tổng tiền</td>
                  <td>
                    {gioHang
                      .reduce((tongTien, ve) => {
                        return (tongTien += ve.giaVe);
                      }, 0)
                      .toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GioHang;
