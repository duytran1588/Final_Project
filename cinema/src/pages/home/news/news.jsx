import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class News extends Component {
  state = {
    tab_dienAnh: {
      like_1: 0,
      like_2: 0,
      like_3: 0,
      like_4: 0,
    },
    tab_review: {
      like_1: 0,
      like_2: 0,
      like_3: 0,
      like_4: 0,
    },
    tab_khuyenMai: {
      like_1: 0,
      like_2: 0,
      like_3: 0,
      like_4: 0,
    },
  };

  checkLike = (tabName, number, like) => {
    const user = localStorage.getItem("userLogin");
    if (!user) {
      this.props.history.push("/sign-in");
    } else {
      console.log(`tab_${tabName}`);
      let newTabName = { ...this.state[`tab_${tabName}`] };
      console.log(newTabName.like_1);
      newTabName[`${like}_${number}`] += 1;
      this.setState({
        [`tab_${tabName}`]: { ...newTabName },
      });
      console.log(this.state.tab_dienAnh);
    }
  };

  render() {
    return (
      <section id="intro">
        <div className="small-container">
          {/* <!-- nav tabs  -->     */}
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#dienAnh">
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#review">
                Review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#khuyenMai">
                Khuyến mãi
              </a>
            </li>
          </ul>
          {/* <!-- end nav tabs  --> */}

          {/* <!-- tab panes  --> */}
          <div className="tab-content">
            {/* dien anh section  */}
            <div
              className="tab-pane container active overall__info"
              id="dienAnh"
            >
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      <img
                        alt=""
                        className="img_fluid"
                        src={
                          "./assets/images/news/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                    </a>
                    <p>
                      Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành
                      khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu
                      phim mang phong cách Artistic Urban Lifestyle đầu tiên tại
                      Việt Nam!
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("dienAnh", 1, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_dienAnh.like_1 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_dienAnh.like_1}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      <img
                        alt=""
                        className="img_fluid"
                        src={
                          "./assets/images/news/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </a>
                    <p>
                      Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống
                      ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai
                      trương tại 360 Giải Phóng!
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("dienAnh", 2, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_dienAnh.like_2 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_dienAnh.like_2}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="container movie__info">
                <div className="row">
                  <div className="col-4 movie__item">
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      <img
                        alt=""
                        src={
                          "./assets/images/news/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công chiếu
                    </a>
                    <p>
                      Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                      lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé.
                      Dàn ngôi
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("dienAnh", 3, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_dienAnh.like_3 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_dienAnh.like_3}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                  <div className="col-4 movie__item">
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      <img
                        alt=""
                        src="./assets/images/news/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                      PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                    </a>
                    <p>
                      Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                      chính thức phát động cuộc thi thiết kế trang phục cho siêu
                      anh hùng
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("dienAnh", 4, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_dienAnh.like_4 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_dienAnh.like_4}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                  <div className="col-4 cot__3">
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                          <span>
                            [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm
                            kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                          <span>
                            Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim
                            đứng đầu doanh thu tại Hàn Quốc mùa dịch
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan">
                          <img
                            alt=""
                            src="./assets/images/news/movies-news/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan">
                          <span>
                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                            Christopher Nolan
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han">
                          <img
                            alt=""
                            src="./assets/images/news/movies-news/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han">
                          <span>
                            Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                            phòng vé' xứ Hàn
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end dien anh section  */}

            {/* review section  */}
            <div className="tab-pane container overall__info fade" id="review">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      <img
                        alt=""
                        className="img_fluid"
                        src={
                          "./assets/images/news/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </a>
                    <p>
                      Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành
                      khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu
                      phim mang phong cách Artistic Urban Lifestyle đầu tiên tại
                      Việt Nam!
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("review", 1, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_review.like_1 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_review.like_1}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      <img
                        alt=""
                        className="img_fluid"
                        src={
                          "./assets/images/news/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                    </a>
                    <p>
                      Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống
                      ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai
                      trương tại 360 Giải Phóng!
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("review", 2, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_review.like_2 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_review.like_2}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="container movie__info">
                <div className="row">
                  <div className="col-4 movie__item">
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      <img
                        alt=""
                        src={
                          "./assets/images/news/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công chiếu
                    </a>
                    <p>
                      Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                      lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé.
                      Dàn ngôi
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("review", 3, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_review.like_3 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_review.like_3}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                  <div className="col-4 movie__item">
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      <img
                        alt=""
                        src={
                          "./assets/images/news/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                      PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                    </a>
                    <p>
                      Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                      chính thức phát động cuộc thi thiết kế trang phục cho siêu
                      anh hùng
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("review", 4, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_review.like_4 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_review.like_4}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                  <div className="col-4 cot__3">
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320275248.png"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                          <span>
                            [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm
                            kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                          <span>
                            Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim
                            đứng đầu doanh thu tại Hàn Quốc mùa dịch
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan">
                          <span>
                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                            Christopher Nolan
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han">
                          <span>
                            Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                            phòng vé' xứ Hàn
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end review section  */}

            {/* khuyenMai section  */}
            <div
              className="tab-pane container overall__info fade"
              id="khuyenMai"
            >
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      <img
                        alt=""
                        className="img_fluid"
                        src={
                          "./assets/images/news/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                    </a>
                    <p>
                      Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành
                      khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu
                      phim mang phong cách Artistic Urban Lifestyle đầu tiên tại
                      Việt Nam!
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("khuyenMai", 1, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_khuyenMai.like_1 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_khuyenMai.like_1}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      <img
                        alt=""
                        className="img_fluid"
                        src={
                          "./assets/images/news/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon">
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </a>
                    <p>
                      Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống
                      ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai
                      trương tại 360 Giải Phóng!
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("khuyenMai", 2, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_khuyenMai.like_2 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_khuyenMai.like_2}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="container movie__info">
                <div className="row">
                  <div className="col-4 movie__item">
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      <img
                        alt=""
                        src={
                          "./assets/images/news/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu">
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công chiếu
                    </a>
                    <p>
                      Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                      lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé.
                      Dàn ngôi
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("khuyenMai", 3, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_khuyenMai.like_3 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_khuyenMai.like_3}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                  <div className="col-4 movie__item">
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      <img
                        alt=""
                        src={
                          "./assets/images/news/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                        }
                      />
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman">
                      NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                      PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                    </a>
                    <p>
                      Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                      chính thức phát động cuộc thi thiết kế trang phục cho siêu
                      anh hùng
                    </p>
                    <a
                      onClick={() => {
                        this.checkLike("khuyenMai", 4, "like");
                      }}
                    >
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        className="icon text-primary"
                        icon="thumbs-up"
                      />
                      <span
                        className={`${
                          this.state.tab_khuyenMai.like_4 === 0
                            ? ""
                            : "text-primary"
                        }`}
                      >
                        {this.state.tab_khuyenMai.like_4}
                      </span>
                    </a>
                    <a href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon?tab=comment">
                      <FontAwesomeIcon
                        className="icon text-primary"
                        icon="comment-alt"
                      />
                    </a>
                  </div>
                  <div className="col-4 cot__3">
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320275248.png"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang">
                          <span>
                            [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm
                            kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7952-ac-quy-doi-dau-soan-ngoi-peninsula-tro-thanh-phim-dung-dau-doanh-thu-tai-han-quoc-mua-dich">
                          <span>
                            Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim
                            đứng đầu doanh thu tại Hàn Quốc mùa dịch
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan">
                          <span>
                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                            Christopher Nolan
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <a href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han">
                          <img
                            alt=""
                            src={
                              "./assets/images/news/movies-news/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
                            }
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a href="https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han">
                          <span>
                            Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                            phòng vé' xứ Hàn
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end khuyenMai  */}
          </div>
          {/* <!-- end tab panes  --> */}

          {/* load more */}
          {/* <div className="mt-4 container open text-center">
            <a className="text-uppercase ">
              Xem thêm
            </a>
          </div> */}
        </div>
      </section>
    );
  }
}

export default withRouter(News);
