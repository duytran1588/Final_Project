<ul className="tab-pane nav nav-tabs" id="BHDStar">
{/* render các cụm rạp BHD */}
{cinemaBHD?.map((bhd, index) => {
  return (
    <li
      key={index}
      id={`bhd${index}`}
      // gán active cho phần tử đầu tiên của mỗi cụm rạp */}
      className={`nav-item ${index === 0 ? "active" : ""}`}
    >
      <a
        onClick={() => {
          changeOpacity(`bhd${index}`);
        }}
        // id={bhd.maCumRap}
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
              <span className="text-dark">{bhd.tenCumRap}</span>
            </p>
            <p>{bhd.diaChi}</p>
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
  );
})}
</ul>
{/* end bhd  */}
{/* CGV  */}
<ul className="tab-pane nav nav-tabs" id="CGV">
{cinemaCGV?.map((cinema, index) => {
  return (
    <li
      // gán active cho phần tử đầu tiên của mỗi cụm rạp */}
      className={`nav-item ${index === 0 ? "active" : ""}`}
      key={index}
      id={`cgv${index}`}
    >
      <a
        onClick={() => {
          changeOpacity(`cgv${index}`);
        }}
        id={cinema.maCumRap}
        className="nav-link"
        data-toggle="tab"
        href="#cns__haibatrung"
      />
      <div className="row">
        <div className="col-md-3">
          <div className="cinema__add">
            <img
              className="img-fluid"
              src="../../../assets/images/cinemas_logo/cgv.png"
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="cinema__info">
            <p>
              <span className="text-dark">
                {cinema.tenCumRap}
              </span>
            </p>
            <p>{cinema.diaChi}</p>
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
  );
})}
</ul>
{/* end CGV  */}
{/* cinemaCineStar  */}
<ul className="tab-pane nav nav-tabs" id="CineStar">
{cinemaCineStar?.map((cinema, index) => {
  return (
    <li
      // gán active cho phần tử đầu tiên của mỗi cụm rạp */}
      className={`nav-item ${index === 0 ? "active" : ""}`}
      key={index}
      id={`cineStar${index}`}
    >
      <a
        onClick={() => {
          changeOpacity(`cineStar${index}`);
        }}
        // id={cinema.maCumRap}
        className="nav-link "
        data-toggle="tab"
        href="#ddc__dongda"
      />
      <div className="row">
        <div className="col-md-3">
          <div className="cinema__add">
            <img
              className="img-fluid"
              src="../../../assets/images/cinemas_logo/star.png"
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="cinema__info">
            <p>
              <span className="text-dark">
                {cinema.tenCumRap}
              </span>
            </p>
            <p>{cinema.diaChi}</p>
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
  );
})}
</ul>
{/* end cineStar  */}
{/* mega  */}
<ul className="tab-pane nav nav-tabs" id="MegaGS">
{cinemaMega.map((cinema, index) => {
  return (
    <li
      // gán active cho phần tử đầu tiên của mỗi cụm rạp */}
      className={`nav-item ${index === 0 ? "active" : ""}`}
      key={index}
      id={`mega${index}`}
    >
      <a
        onClick={() => {
          changeOpacity(`mega${index}`);
        }}
        // id="caoThang"
        className="nav-link "
        data-toggle="tab"
        href="#megaCaoThang"
      />
      <div className="row">
        <div className="col-md-3">
          <div className="cinema__add">
            <img
              className="img-fluid"
              src="../../../assets/images/cinemas_logo/mega.png"
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="cinema__info">
            <p>
              <span>{cinema.tenCumRap}</span>
            </p>
            <p>{cinema.diaChi}</p>
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
  );
})}
</ul>
{/* end mega  */}
{/* galaxy  */}
<ul className="tab-pane nav nav-tabs" id="Galaxy">
{cinemaGalaxy?.map((cinema, index) => {
  return (
    <li
      // gán active cho phần tử đầu tiên của mỗi cụm rạp */}
      className={`nav-item ${index === 0 ? "active" : ""}`}
      key={index}
      id={`galaxy${index}`}
    >
      <a
        onClick={() => {
          changeOpacity(`galaxy${index}`);
        }}
        // id={cinema.maCumRap}
        className="nav-link "
        data-toggle="tab"
        href="#dcineBenThanh"
      />
      <div className="row">
        <div className="col-md-3">
          <div className="cinema__add">
            <img
              className="img-fluid"
              src="../../../assets/images/cinemas_logo/galaxy1.png"
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="cinema__info">
            <p>
              <span>{cinema.tenCumRap}</span>
            </p>
            <p>{cinema.diaChi}</p>
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
  );
})}
</ul>
{/* end galaxy  */}
{/* lotte system  */}
<ul className="tab-pane nav nav-tabs" id="LotteCinima">
{cinemaLotte.map((cinema, index) => {
  return (
    <li
      // gán active cho phần tử đầu tiên của mỗi cụm rạp */}
      className={`nav-item ${index === 0 ? "active" : ""}`}
      key={index}
      id={`lotte${index}`}
    >
      <a
        onClick={() => {
          changeOpacity(`lotte${index}`);
        }}
        // id={cinema.maCumRap}
        className="nav-link "
        data-toggle="tab"
        href="#lotteThuDuc"
      />
      <div className="row">
        <div className="col-md-3">
          <div className="cinema__add">
            <img
              className="img-fluid"
              src="../../../assets/images/cinemas_logo/lotte.png"
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="cinema__info">
            <p className="text-danger">
              <span className="text-dark">
                {cinema.tenCumRap}
              </span>
            </p>
            <p>{cinema.diaChi}</p>
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
  );
})}
</ul>
{/* end lotte  */}




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