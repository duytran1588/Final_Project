import React, { useEffect } from "react";
import "./cinema-info.scss";

function CinemaInfo() {
  //khi render dữ liệu xong chạy useEffect để gán active cho phần tử đầu tiên của cột 1
  useEffect(() => {
    //khi render dữ liệu xong chạy useEffect để gán active cho phần tử đầu tiên của cột 1
    document.querySelector(".col-md-1 ul li a").classList.add("active");
    //gán active cho phần tử ul đầu tiên ở cột 2
    document.querySelector(".col-md-4 ul").classList.add("active");
    //gán active cho li đầu tiên của ul ở cột 2
    document.querySelector(".col-md-4 ul li").classList.add("active");
    //gán active cho ul đầu tiên ở cột 3
    document.querySelector(".col-md-7 ul").classList.add("active");
  }, []);

  const chooseCinema = (id, id2) => {
    //gỡ active cho toàn bộ các li trong ul active ở cột 2
    if (document.querySelector(".col-md-4 ul.active li.active") !== null) {
      document
        .querySelector(".col-md-4 ul.active li.active")
        .classList.remove("active");
    }
    //gán active cho mỗi thẻ li đầu tiên của cột 2
    document.querySelector(`.col-md-4 #${id} li`).classList.add("active");
    //gỡ active cho toàn bộ thẻ a nằm trong li của ul active ở cột 2
    if (document.querySelector(".col-md-4 ul.active li a.active") !== null) {
      document
        .querySelector(".col-md-4 ul.active li a.active")
        .classList.remove("active");
    }
    //gán active lại cho thẻ a của li đầu tiên trong ul active
    document
      .querySelector(".col-md-4 ul.active li a")
      .classList.add("active");
    //gỡ active ở tất cả các ul trong cột 3
    if (document.querySelector(".col-md-7 ul.active") !== null) {
      document.querySelector(".col-md-7 ul.active").classList.remove("active");
    }
    //gán active cho ul trong cột 3 ứng với mỗi li đầu tiên của cột 2 mỗi khi click vào icon ở cột 1
    document.querySelector(`.col-md-7 #${id2}`).classList.add("active");
  };

  //thay đổi opacity cho thẻ li ở cột 2 khi có onClick vào 1 thẻ bất kì
  const changeOpacity = (id) => {
    //gỡ active của các thẻ li (nếu có) trong cùng ul
    if (document.querySelector(".col-md-4 ul.active li.active") !== null) {
      document
        .querySelector(".col-md-4 ul.active li.active")
        .classList.remove("active");
    }
    //thẻ nào được click vào sẽ được gán active
    document.querySelector(`.col-md-4 ul #${id}`).classList.add("active");
  };

  return (
    <div>
      <section id="schedule">
        <div className="small-container text-align">
          <div>
            <img
              className="img-fluid"
              src={"./assets/images/background_cinema_info/back-news.png"}
            />
          </div>
          <div className="row">
            {/* dữ liệu cho cột thứ 1  */}
            <div className="col-md-1 ">
              <ul className="nav nav-tabs">
                {/* 6 li lặp lại => dùng map để render ra các rạp (truyền tham số cho href ở thẻ a),
                mỗi li sẽ có thêm function chooseCinema */}
                <li
                  onClick={() => {
                    chooseCinema("bhd", "bhd__bitexco"); //tạm thời có thể sẽ lấy từ api truyền xuống
                  }}
                  className="nav-item cinema__icon"
                >
                  <a className="nav-link" data-toggle="tab" href="#bhd">
                    <img
                      className="img-fluid"
                      src={"./assets/images/cinemas_logo/bhd.png"}
                    />
                  </a>
                </li>
                <li
                  onClick={() => {
                    chooseCinema("star", "cns__haibatrung");
                  }}
                  className="nav-item cinema__icon"
                >
                  {/*myFunction2() không để ở body onload vì khi click vào star, chi nhánh đầu tiên sáng*/}
                  <a className="nav-link" data-toggle="tab" href="#star">
                    <img
                      className="img-fluid"
                      src={"./assets/images/cinemas_logo/cinestar.png"}
                    />
                  </a>
                </li>
                <li
                  onClick={() => {
                    chooseCinema("ddc", "ddc__dongda");
                  }}
                  className="nav-item cinema__icon"
                >
                  <a className="nav-link" data-toggle="tab" href="#ddc">
                    <img
                      className="img-fluid"
                      src={"./assets/images/cinemas_logo/ddc.png"}
                    />
                  </a>
                </li>
                <li
                  onClick={() => {
                    chooseCinema("mega", "megaCaoThang");
                  }}
                  className="nav-item cinema__icon"
                >
                  <a className="nav-link" data-toggle="tab" href="#mega">
                    <img
                      className="img-fluid"
                      src={"./assets/images/cinemas_logo/mega.png"}
                    />
                  </a>
                </li>
                <li
                  onClick={() => {
                    chooseCinema("dcine", "dcineBenThanh");
                  }}
                  className="nav-item cinema__icon"
                >
                  <a className="nav-link" data-toggle="tab" href="#dcine">
                    <img
                      className="img-fluid"
                      src={"./assets/images/cinemas_logo/doine.jpg"}
                    />
                  </a>
                </li>
                <li
                  onClick={() => {
                    chooseCinema("lotte", "lotteThuDuc");
                  }}
                  className="nav-item cinema__icon"
                >
                  <a className="nav-link" data-toggle="tab" href="#lotte">
                    <img
                      className="img-fluid"
                      src={"./assets/images/cinemas_logo/lotte.png"}
                    />
                  </a>
                </li>
              </ul>
            </div>
            {/* end cot 1  */}
            {/* dữ liệu cho cột thứ 2  */}
            <div id="addInfo" className="tab-content col-md-4">
              {/* bhd info, khi render ra truyền tham số từ mảng truyên tham số thích hợp để
              id này của ul được dk bởi href bên trên  */}
              <ul className="tab-pane nav nav-tabs" id="bhd">
                <li id="bhd_1" className="nav-item">
                  {/*phải để onclick trong thẻ a vì lúc này a là tám màn phủ thẻ li nên ko click trực tiếp váo li được*/}
                  <a
                    onClick={() => {
                      changeOpacity("bhd_1");
                    }}
                    id="cinema__bitexco"
                    className="nav-link"
                    data-toggle="tab"
                    href="#bhd__bitexco"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src={
                            "./assets/images/bhd_logos/bhd-star-bitexco-16105952137769.png"
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-success">
                          BHD Star - <span className="text-dark">Bitexco</span>
                        </p>
                        <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/28-bhd-star-cineplex-icon-68"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="bhd_2" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("bhd_2");
                    }}
                    className="nav-link"
                    data-toggle="tab"
                    href="#bhd__phamhung"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src={
                            "./assets/images/bhd_logos/bhd-star-bitexco-16105952137769.png"
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-success">
                          BHD Star -{" "}
                          <span className="text-dark">Phạm Hùng</span>
                        </p>
                        <p>L4-Satra Phạm Hùng, XL Hà Nội, Q.2 </p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/96-bhd-star-cineplex-pham-hung"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="bhd_3" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("bhd_3");
                    }}
                    id="cinema__3thang2"
                    className="nav-link"
                    data-toggle="tab"
                    href="#bhd__3thang2"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src={
                            "./assets/images/bhd_logos/bhd-star-bitexco-16105952137769.png"
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-success">
                          BHD Star -{" "}
                          <span className="text-dark">Vincom 3/2</span>
                        </p>
                        <p>L5-Vincom 3/2, 3C Đường 3/2.</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/21-bhd-star-cineplex-3-2"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="bhd_4" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("bhd_4");
                    }}
                    id="cinema__levanviet"
                    className="nav-link"
                    data-toggle="tab"
                    href="#bhd__levanviet"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src={
                            "./assets/images/bhd_logos/bhd-star-bitexco-16105952137769.png"
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-success">
                          BHD Star -{" "}
                          <span className="text-dark">Vincom Lê Văn Việt</span>
                        </p>
                        <p>L4-Vincom Plaza, 50 Lê Văn Việt</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/130-bhd-star-cineplex-le-van-viet"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="bhd_5" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("bhd_5");
                    }}
                    id="cinema__quangtrung"
                    className="nav-link"
                    data-toggle="tab"
                    href="#bhd__quangtrung"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src={
                            "./assets/images/bhd_logos/bhd-star-bitexco-16105952137769.png"
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-success">
                          BHD Star -{" "}
                          <span className="text-dark">Vincom Quang Trung</span>
                        </p>
                        <p>B1-Vincom QT, 190 Quang Trung</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/109-bhd-star-cineplex-quang-trung"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="bhd_6" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("bhd_6");
                    }}
                    id="cinema__thaodien"
                    className="nav-link"
                    data-toggle="tab"
                    href="#bhd__thaodien"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src={
                            "./assets/images/bhd_logos/bhd-star-bitexco-16105952137769.png"
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-success">
                          BHD Star -{" "}
                          <span className="text-dark">Vincom Thảo Điền</span>
                        </p>
                        <p>L5-Megamall, 159 XL Hà Nội, Q2</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/119-bhd-star-thao-dien"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* end bhd  */}
              {/* star  */}
              <ul className="tab-pane nav nav-tabs" id="star">
                <li id="star_1" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("star_1");
                    }}
                    id="star__HaiBaTrung"
                    className="nav-link"
                    data-toggle="tab"
                    href="#cns__haibatrung"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/cinestar-hai-ba-trung-15383833704033.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p>
                          CNS - <span className="text-dark">Hai Bà Trưng</span>
                        </p>
                        <p>135 Hai Bà Trưng, Bến Nghé, Q1</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/169-cinestar-hai-ba-trung"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="star_2" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("star_2");
                    }}
                    className="nav-link"
                    data-toggle="tab"
                    href="#cns__quocthanh"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/cinestar-quoc-thanh-15379636956745.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p>
                          CNS- <span className="text-dark">Quốc Thanh</span>
                        </p>
                        <p>271 Nguyễn Trãi, Q1</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/97-cinestar-quoc-thanh"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* end star  */}
              {/* ddc  */}
              <ul className="tab-pane nav nav-tabs" id="ddc">
                <li className="nav-item">
                  <a
                    id="dongDa"
                    className="nav-link "
                    data-toggle="tab"
                    href="#ddc__dongda"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/ddc-dong-da-15379624326697.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p>
                          DDC - <span className="text-dark">Đống Đa</span>
                        </p>
                        <p>890 Trần Hưng Đạo, Q5</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/56-ttcp-dong-da"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* end ddc  */}
              {/* mega  */}
              <ul className="tab-pane nav nav-tabs" id="mega">
                <li className="nav-item">
                  <a
                    id="caoThang"
                    className="nav-link "
                    data-toggle="tab"
                    href="#megaCaoThang"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/mega-gs-cao-thang-15380164745357.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p>
                          MegaGS<span> - Cao Thắng</span>
                        </p>
                        <p>19 Cao Thắng, Q3</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/108-mega-gs-cao-thang"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* end mega  */}
              {/* dcine info  */}
              <ul className="tab-pane nav nav-tabs" id="dcine">
                <li className="nav-item">
                  <a
                    id="benThanh"
                    className="nav-link "
                    data-toggle="tab"
                    href="#dcineBenThanh"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/dcine-ben-thanh-15738149453578.png"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p>
                          DCine<span> - Bến Thành</span>
                        </p>
                        <p>6 Mạc Đĩnh Chi, Bến Nghé, ...</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/108-mega-gs-cao-thang"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* end dcine  */}
              {/* lotte system  */}
              <ul className="tab-pane nav nav-tabs" id="lotte">
                <li id="lotte_1" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("lotte_1");
                    }}
                    id="thuDuc"
                    className="nav-link "
                    data-toggle="tab"
                    href="#lotteThuDuc"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/lotte-cinema-thu-duc-15383864347748.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-danger">
                          Lotte<span className="text-dark"> - Thủ Đức</span>
                        </p>
                        <p>2-Joy Citipoint, KCX Linh Trun...</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/147-lotte-cinema-thu-duc"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="lotte_2" className="nav-item">
                  <a
                    id="namSaiGon"
                    onClick={() => {
                      changeOpacity("lotte_2");
                    }}
                    className="nav-link "
                    data-toggle="tab"
                    href="#lotteNamSaiGon"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/lotte-cinema-nam-sai-gon-15383867312967.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-danger">
                          Lotte<span className="text-dark"> - Nam Sài Gòn</span>
                        </p>
                        <p>L3-Lotte Mart NSG, 469 Nguy...</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/2-lotte-nam-sai-gon"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="lotte_3" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("lotte_3");
                    }}
                    id="congHoa"
                    className="nav-link "
                    data-toggle="tab"
                    href="#lotteCongHoa"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/lotte-cinema-cong-hoa-15383860949090.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-danger">
                          Lotte<span className="text-dark"> - Cộng Hòa</span>
                        </p>
                        <p>L3-Pico Plaza, 20 Cộng Hòa, T...</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/37-lotte-cong-hoa"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="lotte_4" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("lotte_4");
                    }}
                    id="cantavil"
                    className="nav-link "
                    data-toggle="tab"
                    href="#lotteCantavil"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/lotte-cinema-cantavil-15383866510260.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-danger">
                          Lotte<span className="text-dark"> - Cantavil</span>
                        </p>
                        <p>L7-Cantavil Premier, Xa Lộ Hà...</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/44-lotte-cantavil"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="lotte_5" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("lotte_5");
                    }}
                    id="phuTho"
                    className="nav-link "
                    data-toggle="tab"
                    href="#lottePhuTho"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/lotte-cinema-phu-tho-15383865322515.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-danger">
                          Lotte<span className="text-dark"> - Phú Thọ</span>
                        </p>
                        <p>L4-Lotte Mart Phú Thọ, Q11</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/60-lotte-phu-tho"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li id="lotte_6" className="nav-item">
                  <a
                    onClick={() => {
                      changeOpacity("lotte_6");
                    }}
                    id="goVap"
                    className="nav-link "
                    data-toggle="tab"
                    href="#lotteGoVap"
                  />
                  <div className="row">
                    <div className="col-md-3">
                      <div className="cinema__add">
                        <img
                          className="img-fluid"
                          src="./images/lotte-cinema-go-vap-15383873960955.jpg"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="cinema__info">
                        <p className="text-danger">
                          Lotte<span className="text-dark"> - Gò Vấp</span>
                        </p>
                        <p>L3-Lotte Mart, 242 Nguyễn Vă...</p>
                        <a
                          className="text-danger"
                          href="https://tix.vn/rap-chieu-phim/141-lotte-cinema-go-vap"
                        >
                          [chi tiết]
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* end lotte  */}
            </div>
            {/* dữ liệu cột 3  */}
            <div id="sheduleInfo" className="col-md-7 tab-content">
              {/* thông tin các rạp bhd  */}
              <ul className="tab-pane" id="bhd__bitexco">
                <li data-toggle="collapse" data-target="#film__time">
                  {/*collapse in bootstrap 4*/}
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src={
                          "./assets/images/movies/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        }
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">P</span>
                        <span>Cuộc sống nhiệm màu - Soul</span>
                        <p>100 phút - TIX 9 - IMDb 8</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time" className="show">
                    {/*collapse bs4-- có 2 class/ class="collapse: ban đầu ko có data, class="show" ban đầu có, phải set 1 trong 2 class này để khi click vào content ko bị giật*/}
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:45</span>
                      <span>~ 22:25</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time1">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src={
                          "./assets/images/movies/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        }
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time1" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 0:38 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>23:15</span>
                      <span>~ 01:23</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time2">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src={
                          "./assets/images/movies/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        }
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C13</span>
                        <span>Thợ Săn Quái Vật - Monster Hunter</span>
                        <p>104 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time2" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:25</span>
                      <span>~ 23:09</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time3">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src={
                          "./assets/images/movies/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        }
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time3" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:50</span>
                      <span> ~ 23:49 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time4">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src={
                          "./assets/images/movies/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        }
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time4" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time5">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src={
                          "./assets/images/movies/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        }
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time5" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time6">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src={
                          "./assets/images/movies/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        }
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>'Em' là của em</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time6" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time7">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src={
                          "./assets/images/movies/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        }
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>94 phút - TIX 5.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time7" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:24 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time8">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src={
                          "./assets/images/movies/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        }
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C13</span>
                        <span>Listen To The universe</span>
                        <p>119 phút - TIX 0 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time8" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>19:30</span>
                      <span>~ 21:29 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="bhd__phamhung">
                <li data-toggle="collapse" data-target="#film__time9">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/soul-16032488077578_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">P</span>
                        <span>Cuộc sống nhiệm màu - Soul</span>
                        <p>100 phút - TIX 9 - IMDb 8</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time9" className="show">
                    <p>2D Lồng Tiếng</p>
                    <a href="https://tix.vn/login">
                      <span>20:45</span>
                      <span>~ 22:25</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time10">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time10" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:40</span>
                      <span>~ 00:20 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time11">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time11" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>17:50</span>
                      <span> ~ 19:58 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>19:35</span>
                      <span>~ 21:43 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:00</span>
                      <span> ~ 00:08 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time12">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/em-la-cua-em-16091411645152_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>'Em' là của em</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time12" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time13">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time13" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>17:40</span>
                      <span> ~ 19:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:15</span>
                      <span> ~ 00:14 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time14">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C13</span>
                        <span>Sám hối</span>
                        <p>99 phút - TIX 5.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time14" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:15</span>
                      <span>~ 21:54</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:10</span>
                      <span>~ 23:49</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time15">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>94 phút - TIX 5.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time15" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:24 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time16">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/listen-to-the-universe-c13-16106860008968_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C13</span>
                        <span>Listen To The universe</span>
                        <p>119 phút - TIX 0 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time10" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>19:30</span>
                      <span>~ 21:29 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="bhd__3thang2">
                <li data-toggle="collapse" data-target="#film__time17">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/soul-16032488077578_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">P</span>
                        <span>Cuộc sống nhiệm màu - Soul</span>
                        <p>100 phút - TIX 9 - IMDb 8</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time17" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>18:45</span>
                      <span>~ 20:25</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:45</span>
                      <span>~ 22:25</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time18">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time18" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:35</span>
                      <span>~ 22:15 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:35</span>
                      <span>~ 00:15 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time19">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time19" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>17:50</span>
                      <span> ~ 19:58 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>19:35</span>
                      <span>~ 21:43 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:00</span>
                      <span> ~ 00:08 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time20">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/em-la-cua-em-16091411645152_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>'Em' là của em</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time20" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time21">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/nghe-sieu-kho-extreme-job-c18-16074190927361_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Nghề siêu khó - Extreme Job</span>
                        <p>111 phút - TIX 8.9 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time21" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:30</span>
                      <span> ~ 22:21 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:15</span>
                      <span> ~ 00:14 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time22">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C13</span>
                        <span>Sám hối</span>
                        <p>99 phút - TIX 5.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time22" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:15</span>
                      <span>~ 21:54</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:10</span>
                      <span>~ 23:49</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time23">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>94 phút - TIX 5.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time23" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:24 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time24">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time24" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>18:40</span>
                      <span>~ 20:08 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="bhd__levanviet">
                <li data-toggle="collapse" data-target="#film__time25">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/soul-16032488077578_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">P</span>
                        <span>Cuộc sống nhiệm màu - Soul</span>
                        <p>100 phút - TIX 9 - IMDb 8</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time25" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>18:45</span>
                      <span>~ 20:25</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:45</span>
                      <span>~ 22:25</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time26">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time26" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>17:40</span>
                      <span> ~ 19:20 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span>~ 20:10 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>19:25</span>
                      <span> ~ 21:05 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:20</span>
                      <span>~ 22:00</span>
                    </a>
                    {/* <br/> <br/> */}
                    <div className="mt-4" />
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:30 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time27">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time27" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>17:50</span>
                      <span> ~ 19:58 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>19:35</span>
                      <span>~ 21:43 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:00</span>
                      <span> ~ 00:08 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time28">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/em-la-cua-em-16091411645152_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>'Em' là của em</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time28" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time29">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/nghe-sieu-kho-extreme-job-c18-16074190927361_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Nghề siêu khó - Extreme Job</span>
                        <p>111 phút - TIX 8.9 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time29" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:30</span>
                      <span> ~ 22:21 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:15</span>
                      <span> ~ 00:14 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time30">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C13</span>
                        <span>Sám hối</span>
                        <p>99 phút - TIX 5.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time30" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:15</span>
                      <span>~ 21:54</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:10</span>
                      <span>~ 23:49</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time31">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>94 phút - TIX 5.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time31" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:24 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time32">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/thuyen-truong-rang-kiem-va-vien-kim-cuong-ma-thuat-captain-sabertooth-and-the-magic-diamond-p-16105980048686_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="mb-3 film__title">
                        <span>C18</span>
                        <span>
                          Thuyền Trưởng Răng Kiếm và Viên Kim Cương Ma Thuật -
                          Captain Sabertooth and The Magic Diamond
                        </span>
                        <p>82 phút - TIX 7.9 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time32" className="show">
                    <p>2D Lồng Tiếng</p>
                    <a href="https://tix.vn/login">
                      <span>18:10</span>
                      <span>~ 19:32 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>19:50</span>
                      <span>~ 21:12 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="bhd__quangtrung">
                <li data-toggle="collapse" data-target="#film__time33">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/soul-16032488077578_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">P</span>
                        <span>Cuộc sống nhiệm màu - Soul</span>
                        <p>100 phút - TIX 9 - IMDb 8</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time33" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>19:20</span>
                      <span>~ 21:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time34">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time34" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:30</span>
                      <span>~ 22:10 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:15</span>
                      <span>~ 23:55 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time35">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time35" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>18:05</span>
                      <span> ~ 20:13 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>19:35</span>
                      <span>~ 21:43 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:25</span>
                      <span> ~ 22:33 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:00</span>
                      <span> ~ 00:08 </span>
                    </a>
                    <div className="mt-4" />
                    <a href="https://tix.vn/login">
                      <span>22:45</span>
                      <span> ~ 00:53 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time36">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/em-la-cua-em-16091411645152_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>'Em' là của em</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time36" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ none</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time37">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/nghe-sieu-kho-extreme-job-c18-16074190927361_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Nghề siêu khó - Extreme Job</span>
                        <p>111 phút - TIX 8.9 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time37" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:30</span>
                      <span> ~ 22:21 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:15</span>
                      <span> ~ 00:14 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time38">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C13</span>
                        <span>Sám hối</span>
                        <p>99 phút - TIX 5.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time38" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:15</span>
                      <span>~ 21:54</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:10</span>
                      <span>~ 23:49</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time39">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>94 phút - TIX 5.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time39" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:24 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time40">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time40" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>18:40</span>
                      <span>~ 20:08 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="bhd__thaodien">
                <li data-toggle="collapse" data-target="#film__time41">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/soul-16032488077578_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">P</span>
                        <span>Cuộc sống nhiệm màu - Soul</span>
                        <p>100 phút - TIX 9 - IMDb 8</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time41" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>18:45</span>
                      <span>~ 20:25</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:45</span>
                      <span>~ 22:25</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time42">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time42" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>17:40</span>
                      <span> ~ 19:20 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span>~ 20:10 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>19:25</span>
                      <span> ~ 21:05 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:20</span>
                      <span>~ 22:00</span>
                    </a>
                    <div className="mt-4" />
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:30 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time43">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time43" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>17:50</span>
                      <span> ~ 19:58 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>19:35</span>
                      <span>~ 21:43 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:00</span>
                      <span> ~ 00:08 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time44">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/em-la-cua-em-16091411645152_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>'Em' là của em</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time44" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ none</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time45">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/nghe-sieu-kho-extreme-job-c18-16074190927361_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Nghề siêu khó - Extreme Job</span>
                        <p>111 phút - TIX 8.9 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time45" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:30</span>
                      <span> ~ 22:21 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:15</span>
                      <span> ~ 00:14 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time46">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C13</span>
                        <span>Sám hối</span>
                        <p>99 phút - TIX 5.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time46" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:15</span>
                      <span>~ 21:54</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:10</span>
                      <span>~ 23:49</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time47">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>94 phút - TIX 5.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time47" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:24 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time48">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/thuyen-truong-rang-kiem-va-vien-kim-cuong-ma-thuat-captain-sabertooth-and-the-magic-diamond-p-16105980048686_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="mb-3 film__title">
                        <span>C18</span>
                        <span>
                          Thuyền Trưởng Răng Kiếm và Viên Kim Cương Ma Thuật -
                          Captain Sabertooth and The Magic Diamond
                        </span>
                        <p>82 phút - TIX 7.9 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time48" className="show">
                    <p>2D Lồng Tiếng</p>
                    <a href="https://tix.vn/login">
                      <span>18:10</span>
                      <span>~ 19:32 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>19:50</span>
                      <span>~ 21:12 </span>
                    </a>
                  </div>
                </li>
              </ul>
              {/* end bhd  */}
              {/* thông tin các rạp cns  */}
              <ul className="tab-pane" id="cns__haibatrung">
                <li data-toggle="collapse" data-target="#film__time49">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time49" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time50">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time50" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>23:15</span>
                      <span>~ 01:23</span>
                    </a>
                    <br />
                    <br />
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>23:15</span>
                      <span>~ 01:23</span>
                    </a>
                    <br />
                    <br />
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>23:15</span>
                      <span>~ 01:23</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time51">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/nha-kho-quy-am-the-shed-c18-16098376740973_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>nhà kho quỷ ám - the shed </span>
                        <p>57 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time51" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>23:59</span>
                      <span>~ 00:56</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time52">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time52" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time53">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time53" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time54">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time54" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time55">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time55" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time56">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/listen-to-the-universe-c13-16106860008968_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C13</span>
                        <span>Listen To The universe</span>
                        <p>119 phút - TIX 0 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time56" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>19:30</span>
                      <span>~ 21:29 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="cns__quocthanh">
                <li data-toggle="collapse" data-target="#film__time57">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time57" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time58">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time58" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time59">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time59" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time60">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time60" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time61">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/nha-kho-quy-am-the-shed-c18-16098376740973_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>nhà kho quỷ ám - the shed </span>
                        <p>57 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time61" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>23:59</span>
                      <span>~ 00:56</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time62">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time62" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time63">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time63" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
              </ul>
              {/* end cns  */}
              {/* thông tin các rạp ddc  */}
              <ul className="tab-pane" id="ddc__dongda">
                <li data-toggle="collapse" data-target="#film__time64">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time64" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time65">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time65" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time66">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time66" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time67">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time67" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time68">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time68" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time69">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time69" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
              </ul>
              {/* end ddc  */}
              {/* thông tin các rạp mega  */}
              <ul className="tab-pane" id="megaCaoThang">
                <li data-toggle="collapse" data-target="#film__time70">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time70" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time71">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time71" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time72">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time72" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time73">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time73" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time74">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time74" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time75">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time75" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
              </ul>
              {/* end mega  */}
              {/* thông tin các rạp dcine  */}
              <ul className="tab-pane" id="dcineBenThanh">
                <li data-toggle="collapse" data-target="#film__time76">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time76" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time77">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time77" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time78">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time78" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time79">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time79" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time80">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time80" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time81">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time81" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
              </ul>
              {/* end dcine  */}
              {/* thông tin các rạp lotte  */}
              <ul className="tab-pane" id="lotteThuDuc">
                <li data-toggle="collapse" data-target="#film__time82">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time82" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time83">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time83" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time84">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time84" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time85">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time85" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time86">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time86" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time87">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time87" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="lotteNamSaiGon">
                <li data-toggle="collapse" data-target="#film__time88">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time88" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time89">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time89" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time90">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time90" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time91">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time91" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time92">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time92" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time93">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time93" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="lotteCongHoa">
                <li data-toggle="collapse" data-target="#film__time94">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time94" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time95">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time95" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time96">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time96" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time97">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time97" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time98">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time98" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time99">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time99" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="lotteCantavil">
                <li data-toggle="collapse" data-target="#film__time100">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time100" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time101">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time101" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time102">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time102" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time103">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time103" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time104">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time104" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time105">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time105" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="lottePhuTho">
                <li data-toggle="collapse" data-target="#film__time106">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time106" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time107">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time107" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time108">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time108" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time109">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time109" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time110">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time110" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time111">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time111" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
              </ul>
              <ul className="tab-pane" id="lotteGoVap">
                <li data-toggle="collapse" data-target="#film__time112">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Đường Cong Của Quỷ - The Cursed Lesson</span>
                        <p>88 phút - TIX 5.3 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time112" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>22:50</span>
                      <span>~ 00:18 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time113">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/mien-dat-hua-the-promised-neverland-c16-16105101900047_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Miền Đất Hứa - The Promised Neverland</span>
                        <p>119 phút - TIX 8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time113" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:40</span>
                      <span> ~ 14:39 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>16:10</span>
                      <span> ~ 18:09 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>18:30</span>
                      <span> ~ 20:29 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time114">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/sam-hoi-16105115146337_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C18</span>
                        <span>Sám hối</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time114" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>21:00</span>
                      <span>~ 22:40 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time115">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Lừa Đểu Gặp Lừa Đảo - The Con-Heartist</span>
                        <p>128 phút - TIX 8.8 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time115" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span> ~ 22:08 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:40</span>
                      <span>~ 23:48 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>22:30</span>
                      <span> ~ 00:38 </span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time116">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/chi-muoi-ba-2-16061875740652_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span className="bg-success">C18</span>
                        <span>Chị Mười Ba: 3 Ngày Sinh Tử</span>
                        <p>100 phút - TIX 7.5 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time116" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>13:20</span>
                      <span>~ 15:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>17:20</span>
                      <span>~ 19:00</span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>21:20</span>
                      <span>~ 23:00</span>
                    </a>
                  </div>
                </li>
                <li data-toggle="collapse" data-target="#film__time117">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="img-fluid"
                        src="./images/cuoc-giai-cuu-sinh-tu-redemption-day-c18-16105120605594_60x60.png"
                      />
                    </div>
                    <div className="col-9">
                      <div className="film__title">
                        <span>C16</span>
                        <span>Cuộc giải cứu sinh tử - Redemption Day</span>
                        <p>0 phút - TIX 7.6 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div id="film__time117" className="show">
                    <p>2D Digital</p>
                    <a href="https://tix.vn/login">
                      <span>12:20</span>
                      <span>~ 13:54 </span>
                    </a>
                    <a href="https://tix.vn/login">
                      <span>20:00</span>
                      <span>~ 21:34 </span>
                    </a>
                  </div>
                </li>
              </ul>
              {/* end lotte  */}
            </div>
          </div>
          <div>
            <img
              className="img-fluid"
              src={"./assets/images/background_cinema_info/back-news.png"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CinemaInfo;
