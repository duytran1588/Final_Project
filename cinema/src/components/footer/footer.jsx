import React from "react";
import cgv from "./contacts/cgv.png";
import bhd from "./contacts/f32670fd0eb083c9c4c804f0f3a252ed.png";
import laban from "./contacts/laban.png";
import go123 from "./contacts/123go.png";
import IVB from "./contacts/IVB.png";
import viettinBank from "./contacts/VIETTINBANK.png";
import agribank from "./contacts/AGRIBANK.png";
import dcine from "./contacts/dcine-ben-thanh-15738149453578.png";
import star from "./contacts/star.png";
import payoo from "./contacts/payoo.jpg";
import zaloPay from "./contacts/zalopay_icon.png";
import starlight from "./contacts/STARLIGHT.png";
import touch from "./contacts/TOUCH.png";
import ddc from "./contacts/ddc.png";
import beta from "./contacts/bt.jpg";
import mega from "./contacts/mega.png";
import cinestar from "./contacts/cinestar.png";
import galaxy from "./contacts/galaxycine.png";
import lotte from "./contacts/lotte.png";
import android from "./mobile-app/android-logo.png";
import apple from "./mobile-app/apple-logo.png";
import facebook from "./social-network/facebook-logo.png";
import zalo from "./social-network/zalo-logo.png";
import zion from "./contacts/zion-logo.jpg";
import unknown from "./contacts/d1e6bd560daa9e20131ea8a0f62e87f8.png";
const handleOver = (choose, id) => {
  let icon = document.getElementById(id);
  if (icon) {
    if (choose === 1) {
      icon.style.visibility = "visible";
    } else {
      icon.style.visibility = "hidden";
    }
  }
};

function Footer() {
  const contacts = [
    {
      link: "https://www.cgv.vn/",
      logo: cgv,
      ma: "cgv",
    },
    {
      link: "https://www.bhdstar.vn/",
      logo: bhd,
      ma: "bhd",
    },
    {
      link: "https://www.cgv.vn/",
      logo: laban,
      ma: "laban",
    },
    {
      link: "https://www.cgv.vn/",
      logo: go123,
      ma: "124go",
    },
    {
      link: "https://www.cgv.vn/",
      logo: IVB,
      ma: "ivb",
    },
    {
      link: "https://www.cgv.vn/",
      logo: viettinBank,
      ma: "viettinBank2",
    },
    {
      link: "https://www.cgv.vn/",
      logo: agribank,
      ma: "agribank",
    },
    {
      link: "https://www.cgv.vn/",
      logo: viettinBank,
      ma: "viettinBank",
    },
    {
      link: "https://www.cgv.vn/",
      logo: payoo,
      ma: "payoo",
    },
    {
      link: "https://www.cgv.vn/",
      logo: zaloPay,
      ma: "zaloPay",
    },
    {
      link: "https://www.cgv.vn/",
      logo: dcine,
      ma: "dcine",
    },
    {
      link: "https://www.cgv.vn/",
      logo: starlight,
      ma: "starLight",
    },
    {
      link: "https://www.cgv.vn/",
      logo: star,
      ma: "star",
    },
    {
      link: "https://www.cgv.vn/",
      logo: touch,
      ma: "touch",
    },
    {
      link: "https://www.cgv.vn/",
      logo: ddc,
      ma: "ddc",
    },
    {
      link: "https://www.cgv.vn/",
      logo: beta,
      ma: "beta",
    },
    {
      link: "https://www.cgv.vn/",
      logo: mega,
      ma: "mega",
    },
    {
      link: "https://www.cgv.vn/",
      logo: cinestar,
      ma: "cinestar",
    },
    {
      link: "https://www.cgv.vn/",
      logo: galaxy,
      ma: "galaxy",
    },
    {
      link: "https://www.cgv.vn/",
      logo: lotte,
      ma: "lotte",
    },
  ];
  return (
    <section id="footer">
      <div className="small-container">
        <ul>
          <li>
            <p>TIX</p>
            <a className="d-block" href="https://tix.vn/faq">
              FAQ
            </a>
            <a href="https://tix.vn/brand-guideline/">Brand Guidelines</a>
          </li>
          <li>
            <p>Chính sách</p>
            <a className="d-block" href="https://tix.vn/thoa-thuan-su-dung">
              Thỏa thuận sử dụng
            </a>
            <a href="https://tix.vn/chinh-sach-bao-mat">Chính sách bảo mật</a>
          </li>
          <li>
            <p>Đối tác</p>
            <div className="partner">
              <div className="row">
                {contacts.map((contact, index) => {
                  return (
                    <div key={index} style={{ width: "20%" }}>
                      <a
                        onMouseOver={() => {
                          handleOver(1, contact.ma);
                        }}
                        onMouseOut={() => {
                          handleOver(2, contact.ma);
                        }}
                        target="_blank"
                        rel="noreferrer"
                        href={contact.link}
                      >
                        <img src={contact.logo} alt="logo" />
                        <p id={contact.ma}>{contact.ma}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </li>
          <li className="app__logo">
            <p>Mobile App</p>
            <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/">
              <img src={android} alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/">
              <img src={apple} alt="" />
            </a>
          </li>
          <li className="social__network">
            <p>Social</p>
            <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/">
              <img src={facebook} alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.cgv.vn/">
              <img src={zalo} alt="" />
            </a>
          </li>
        </ul>
        <hr />
        <div className="row footer__ending">
          <div className="col-2">
            <img src={zion} alt="" />
          </div>
          <div className="col-8">
            <p className="text-white mb-0">
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </p>
            <p className="my-1">
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam. Giấy chứng nhận đăng ký kinh doanh số:
              0101659783, đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020
              do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp. Số Điện Thoại
              (Hotline): 1900 545 436
            </p>
            <p>
              Email: <a href="mailto:support@tix.vn">support@tix.vn</a>
            </p>
          </div>
          <div className="col-2 text-right">
            <a href="http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1">
              <img src={unknown} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
