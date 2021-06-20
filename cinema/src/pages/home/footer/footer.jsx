import React, { useState } from "react";

const handleOver = (choose, id) => {
  let icon = document.getElementById(id);
  if (choose == 1) {
    icon.style.visibility = "visible";
  } else {
    icon.style.visibility = "hidden";
  }
};

function Footer() {
  const [contacts, setContacts] = useState([
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/cgv.png",
      ma: "cgv",
    },
    {
      link: "https://www.bhdstar.vn/",
      logo: "./assets/images/contacts/f32670fd0eb083c9c4c804f0f3a252ed.png",
      ma: "bhd",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/laban.png",
      ma: "laban",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/123go.png",
      ma: "124go",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/IVB.png",
      ma: "ivb",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/VIETTINBANK.png",
      ma: "viettinBank2",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/AGRIBANK.png",
      ma: "agribank",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/VIETTINBANK.png",
      ma: "viettinBank",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/payoo.jpg",
      ma: "payoo",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/zalopay_icon.png",
      ma: "zaloPay",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/dcine-ben-thanh-15738149453578.png",
      ma: "dcine",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/STARLIGHT.png",
      ma: "starLight",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/star.png",
      ma: "star",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/TOUCH.png",
      ma: "touch",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/ddc.png",
      ma: "ddc",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/bt.jpg",
      ma: "beta",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/mega.png",
      ma: "mega",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/cinestar.png",
      ma: "cinestar",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/galaxycine.png",
      ma: "galaxy",
    },
    {
      link: "https://www.cgv.vn/",
      logo: "./assets/images/contacts/lotte.png",
      ma: "lotte",
    },
  ]);
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
                        href={contact.link}
                      >
                        <img src={contact.logo} />
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
            <a target="_blank" href="https://www.cgv.vn/">
              <img src="./assets/images/mobile-app/android-logo.png" />
            </a>
            <a target="_blank" href="https://www.cgv.vn/">
              <img src="./assets/images/mobile-app/apple-logo.png" />
            </a>
          </li>
          <li className="social__network">
            <p>Social</p>
            <a target="_blank" href="https://www.cgv.vn/">
              <img src="./assets/images/social-network/facebook-logo.png" />
            </a>
            <a target="_blank" href="https://www.cgv.vn/">
              <img src="./assets/images/social-network/zalo-logo.png" />
            </a>
          </li>
        </ul>
        <hr />
        <div className="row footer__ending">
          <div className="col-2">
            <img src="./assets/images/contacts/zion-logo.jpg" />
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
              <img src="./assets/images/contacts/d1e6bd560daa9e20131ea8a0f62e87f8.png" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
