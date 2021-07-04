import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
class Carousel extends Component {
  state = [
    {
      ma: "devil",
      hinhAnh:
        "./assets/images/poster/ban-tay-diet-quy-evil-expeller-16177781815781.png",
      trailer: "https://www.youtube.com/watch?v=uqJ9u7GSaYM",
    },
    {
      ma: "trangTi",
      hinhAnh: "./assets/images/poster/trang-ti-16194117174325.jpg",
      trailer: "https://www.youtube.com/watch?v=VTnGOjtaWAY",
    },
    {
      ma: "latMat",
      hinhAnh: "./assets/images/poster/lat-mat-48h-16177782153424.png",
      trailer: "https://www.youtube.com/watch?v=kBY2k3G6LsM",
    },
  ];

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      // autoplay: true,
      accessibility: true,
    };
    return (
      <>
        <div className="carousel">
          <Slider {...settings}>
            {this.state.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.hinhAnh} />

                  <button
                    href={item.trailer}
                    className="btnPlay"
                    data-toggle="modal"
                    data-target={`#${item.ma}`}
                  >
                    <FontAwesomeIcon icon="play" />
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>

        {this.state.map((item, index) => {
          return (
            <div className="modal modal_carousel fade" key={index} id={item.ma}>
              <div className="modal-dialog dialog_carousel">
                <div className="modal-content content_carousel">
                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      controls={true}
                      url={item.trailer}
                      
                      // origin={window.location.href}
                    />
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer footer_carousel">
                    <a data-dismiss="modal">+</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Carousel;
