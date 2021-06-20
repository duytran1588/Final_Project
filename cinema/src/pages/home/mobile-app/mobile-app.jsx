import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class MobileApp extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
    //   speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      accessibility: true,
    };
    return (
      <>
        <section id="homeApp">
          <div className="small-container">
            <div className="row">
              <div className="col-6 text-left">
                <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                <p>
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <a
                  href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                  target="_blank"
                >
                  App miễn phí - Tải về ngay!
                </a>
                <p>
                  TIX có hai phiên bản{" "}
                  <a
                    href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                    target="_blank"
                  >
                    iOS
                  </a>{" "}
                  &amp;{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    target="_blank"
                  >
                    Android
                  </a>
                </p>
              </div>
              <div className="col-6 phone__slider">
                <Slider {...settings}>
                  <div className="slide__item slide__item1"></div>
                  <div className="slide__item slide__item2"></div>
                  <div className="slide__item slide__item3"></div>
                  <div className="slide__item slide__item4"></div>
                  <div className="slide__item slide__item5"></div>
                  <div className="slide__item slide__item6"></div>
                  <div className="slide__item slide__item7"></div>
                  <div className="slide__item slide__item8"></div>
                  <div className="slide__item slide__item9"></div>
                  <div className="slide__item slide__item10"></div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MobileApp;
