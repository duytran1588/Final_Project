import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalVideo from "react-modal-video";
import GioHang from "../../../components/header/gioHang";

class Carousel extends Component {
  state = {
    isOpen: false,
    video_play: "",
    carousel_list: [
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
    ],
  };

  openModal = (idtrailer) => {
    this.setState({
      isOpen: true,
      video_play: idtrailer,
    });
  };

  getTrailerId = (url) => {
    let regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    let match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      accessibility: true,
    };
    return (
      <>
        <div className="carousel">
          <Slider {...settings}>
            {this.state.carousel_list.map((item, index) => {
              const trailerId = this.getTrailerId(item.trailer);
              return (
                <div key={index}>
                  <img src={item.hinhAnh} />
                  <button
                    className="btnPlay"
                    onClick={() => {
                      this.openModal(trailerId);
                    }}
                  >
                    <FontAwesomeIcon icon="play" />
                  </button>
                </div>
              );
            })}
          </Slider>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.state.video_play}
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default Carousel;
