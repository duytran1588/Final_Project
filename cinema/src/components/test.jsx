import React, { useEffect, useReducer } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../stores/actions/movie.action";

import LinesEllipsis from "react-lines-ellipsis"; // to make ellipsis "..."
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC"; // responsive of ellipsis
import $ from 'jquery';

function Test() {

  //for venobox
  $(document).ready(function(){
    $('.venobox').venobox(); 
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    arrows: true,
    // autoplay: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis); // dùng thẻ này de viet ngan tieu de phim

  const movieList = useSelector((state) => {
    // console.log("movieList", state.movieReducer.movieList);
    return state.movieReducer.movieList;
  });

  console.log("movieList[0]", movieList[1]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  const moviefilms = [
    {
      maPhim: 1314,
      tenPhim: "Rasing Hope",
      biDanh: "rasing-hope",
      trailer: "https://youtube.com/embed/7V7SBjaQQ4g",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/rasing-hope_gp05.jpg",
      moTa: "phim hay quá trời",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-06-09T14:51:15.223",
      danhGia: 10,
    },
    {
      maPhim: 1329,
      tenPhim: "Bố Già",
      biDanh: "bo-gia",
      trailer: "https://www.youtube.com/embed/jluSu8Rw6YE",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/bo-gia_gp01.jpg",
      moTa: "Tui Chưa Coi Nên Chưa Biết Đâu",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-04-03T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1344,
      tenPhim: "Avenger",
      biDanh: "avenger",
      trailer: "https://youtu.be/TcMBFSGVi1c",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/avenger_gp01.jpg",
      moTa: "Giám Mục Bóng Tối (Woo Do Hwan) – tên quỷ Satan đột lốt người. Từ đó sự thật về cái chết của cha Yong Hu cũng dần được hé lộ cũng như nguyên nhân anh trở thành “người được chọn”.",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-05-27T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1359,
      tenPhim: "Vợ 3",
      biDanh: "vo-3",
      trailer: "https://www.youtube.com/embed/MyqZf8LiWvM",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/vo-3_gp01.jpg",
      moTa: "hay",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-10-10T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1374,
      tenPhim: "Natra Two 3",
      biDanh: "natra-two-3",
      trailer: "https://youtu.be/nmBrP8wWxxU",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/natra-two-3_gp01.jpeg",
      moTa: "ababababababab",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-04-05T00:00:00",
      danhGia: 0,
    },
    {
      maPhim: 1389,
      tenPhim: "Diệp Vấn",
      biDanh: "diep-van",
      trailer: "https://www.youtube.com/embed/lzIkybm47to",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/diep-van_gp01.jpg",
      moTa: "Diệp Vấn là một bộ phim điện ảnh võ thuật bán tiểu sử của Hồng Kông, công chiếu vào năm 2008. Phim nói về một quãng đời của Diệp Vấn, một trong những danh sư của võ phái Vịnh Xuân quyền.",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-05-04T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1404,
      tenPhim: "Mắt Biếc",
      biDanh: "mat-biec",
      trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/mat-biec_gp01.jpg",
      moTa: "Trứng rán cần mỡ, bắp cần bơ, yêu không cần cớ, cần cậu cơ ",
      maNhom: "GP01",
      ngayKhoiChieu: "2002-02-12T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1419,
      tenPhim: "Hai đứa trẻ",
      biDanh: "hai-dua-tre",
      trailer: "https://www.youtube.com/embed/AAgnQdiZFsQ",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/hai-dua-tre_gp01.png",
      moTa: "Hai Đứa Trẻ Mồ Côi",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-02-12T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1434,
      tenPhim: "Tennet 2",
      biDanh: "tennet-2",
      trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/abcabc_gp01.png",
      moTa: "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
      maNhom: "GP01",
      ngayKhoiChieu: "2020-10-10T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1449,
      tenPhim: "True Detective",
      biDanh: "true-detective",
      trailer: "https://www.youtube.com/embed/TXwCoNwBSkQ",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/true-detective_gp01.jpeg",
      moTa: "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-04-04T00:00:00",
      danhGia: 10,
    },
    {
      maPhim: 1464,
      tenPhim: "The Longest Ride",
      biDanh: "the-longest-ride",
      trailer: "https://www.youtube.com/embed/FUS_Q7FsfqU",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
      moTa: "After an automobile crash, the lives of a young couple intertwine with a much older man, as he reflects back on a past love.",
      maNhom: "GP01",
      ngayKhoiChieu: "2019-07-29T00:00:00",
      danhGia: 5,
    },
  ];
  console.log("moviefilms", moviefilms);
  return (
    <div className="comingMovie">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#showing">
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#coming">
            Sắp Chiếu
          </a>
        </li>
      </ul>
      <div className="showing_coming tab-content">
        <div id="showing" className="tab-pane container active">
          <Slider {...settings}>
            {movieList?.map((movie, index) => {
              return (
                <div key={index} class="card text-left ">
                  <img
                    class="card-img-top"
                    width="100%"
                    height="100%"
                    src={movie.hinhAnh}
                    alt=""
                  />
                  <button
                    className="btnPlay-small"
                    data-toggle="modal"
                    // data-target={`#${movie.maPhim}`}
                  >
                    <a class="venobox" href={movie.trailer} alt="image alt">
                    <FontAwesomeIcon icon="play" />
                    </a>
                  </button>

                  <div class="card-body">
                    <div class="card-title">
                      <span>p</span>{" "}
                      <ResponsiveEllipsis
                        text={movie.tenPhim}
                        maxLine="1"
                        ellipsis=" ..."
                        trimRight
                        basedOn="letters"
                      />
                    </div>
                    <p class="card-text">100 phút</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div id="coming" className="tab-pane container fade">
          <Slider {...settings}>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <button
                className="btnPlay-small"
                data-toggle="modal"
                data-target="#coming-myModal"
              >
                <FontAwesomeIcon icon="play" />
              </button>
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              {/* <button onClick={handleShowModal} className="btnPlay-small">
                <FontAwesomeIcon icon="play" />
              </button> */}
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              {/* <button onClick={handleShowModal} className="btnPlay-small">
                <FontAwesomeIcon icon="play" />
              </button> */}
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
            <div class="card text-left ">
              <img
                class="card-img-top"
                width="100%"
                height="100%"
                src="https://static.coindesk.com/wp-content/uploads/2020/02/Juventus-soccer-Cristian-Ronaldo-1035x666.jpg"
                alt=""
              />
              <div class="card-body">
                <div class="card-title">
                  <span>p</span> <span>Trạng Tí Phưu lưu ký</span>
                </div>

                <p class="card-text">100 phút</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* modal  */}

      <div class="modal modal_trailer fade" id="">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal body --> */}
            <div class="modal-body">
              <ReactPlayer
                width="100%"
                // height="100%"
                controls={true}
                // url={movie.trailer}
              />
            </div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <a data-dismiss="modal">+</a>
            </div>
          </div>
        </div>
      </div>

      {/* modal  */}
      <div class="modal modal_trailer fade" id="myModal1">
        <div class="modal-dialog dialog_trailer">
          <div class="modal-content content_trailer">
            {/* <!-- Modal body --> */}
            <div class="modal-body">
              <ReactPlayer
                width="100%"
                height="100%"
                controls={true}
                origin="window.location"
                // url="https://www.youtube.com/watch?v=m_ldl-lKHqg"
              />
            </div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer footer_trailer">
              <a data-dismiss="modal">+</a>
            </div>
          </div>
        </div>
      </div>

      <div class="modal modal_trailer fade" id="coming-myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            {/* <!-- Modal body --> */}
            <div class="modal-body">
              <ReactPlayer
                width="100%"
                height="100%"
                controls={true}
                url="https://www.youtube.com/watch?v=2OyG_9FQRgM"
              />
            </div>

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <a data-dismiss="modal">+</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
