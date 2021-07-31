import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading/loading";
import { userProfileApi } from "../../stores/actions/movie.action";
import ModalUpdate from "./modalUpdate";

import Trade_1 from "./trade_1";
import Trade_2 from "./trade_2";

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
  }, []);

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
      <section className="greeting">
        <h1 className="mb-4">Xin chào {userProfile?.hoTen}</h1>
        <img
          width="20%"
          src={"./assets/images/user-profile/user_profile.png"}
        />
        {/* hình ảnh user */}
      </section>
      <section className="profile_info mt-5">
        <div>
          Tài khoản: <span>{userProfile?.taiKhoan}</span>
        </div>
        <div>
          Họ tên: <span>{userProfile?.hoTen}</span>
        </div>
        <div>
          Email: <span>{userProfile?.email}</span>
        </div>
        <div>
          Số điện thoại: <span>{userProfile?.soDT}</span>
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
          <Trade_1 userProfile={userProfile} />
          <Trade_2 userProfile={userProfile} />
        </div>
      </section>

      {/* modal update */}
      <ModalUpdate userProfile={userProfile} />
    </div>
  );
}

export default UserProfile;
