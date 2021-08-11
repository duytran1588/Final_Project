import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/loading";
import { userProfileApi } from "../../stores/actions/movie.action";
import ModalUpdate from "./modalUpdate";
import profile from "./images/profile.jpg";
import Trade1 from "./trade_1";
import Trade2 from "./trade_2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserProfile() {
  const account = {
    taiKhoan: "",
  };
  //lấy data dưới local storage
  const user = JSON.parse(localStorage.getItem("userLogin"));
  account.taiKhoan = user?.taiKhoan;

  //dispatch taiKhoan call api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileApi(account));
  }, [dispatch]);

  //lên reducer lấy userprofile
  const userProfile = useSelector((state) => {
    return state.cinemaReducer.userProfile;
  });

  const loading = useSelector((state) => {
    return state.movieReducer.loading;
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="user-profile container">
      <div className="greeting ">
        <img src={profile} alt="" />
      </div>
      <section style={{ marginTop: "6rem" }} className="profile_info">
        <div className="profile_info_detail">
          <div>
            <FontAwesomeIcon icon="user" />
          </div>
          &nbsp;&nbsp; Tài khoản:&nbsp; <span>{userProfile?.taiKhoan}</span>
        </div>
        <div className="profile_info_detail">
          <div style={{ textTransform: "uppercase" }}>
            {userProfile?.hoTen[0]}
          </div>
          &nbsp;&nbsp; Họ tên:&nbsp; <span>{userProfile?.hoTen}</span>
        </div>
        <div className="profile_info_detail">
          <div>
            <FontAwesomeIcon icon="envelope" />
          </div>
          &nbsp;&nbsp; Email:&nbsp; <span>{userProfile?.email}</span>
        </div>
        <div className="profile_info_detail">
          <div>
            <FontAwesomeIcon icon="phone-alt" />
          </div>
          &nbsp;&nbsp; Số điện thoại:&nbsp;
          <span>{userProfile?.soDT}</span>
        </div>
        <div className="trade_modal">
          <div className="mb-5">
            <button
              type="button"
              className="btn btn-danger "
              data-toggle="collapse"
              data-target="#trade_detail"
            >
              Chi tiết giao dịch
            </button>
            <button
              className="btn btn-danger ml-3"
              data-toggle="modal"
              data-target="#modal_Update"
            >
              Cập nhật
            </button>
          </div>
          <Trade1 userProfile={userProfile} />
          <Trade2 userProfile={userProfile} />
        </div>
      </section>

      {/* modal update */}
      <ModalUpdate userProfile={userProfile} />
    </div>
  );
}

export default UserProfile;
