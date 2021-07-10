import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "date-format";
import Pagination from "../../../components/pagination/pagination";
import {
  startLoadingAction,
  stopLoadingAction,
} from "../../../stores/actions/movie.action";
import axios from "axios";

function Movie_content() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7); //7 phim 1 trang

  // do dùng useSelector cần lk với redux sẽ render luôn thẻ cha => call API phải lưu state nội bộ để thẻ cha không render lại
  const getMoviePageList = async () => {
    dispatch(startLoadingAction());
    const moviePageList = await axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    );
    dispatch(stopLoadingAction());
    setPosts(moviePageList.data);
  };

  useEffect(() => {
    getMoviePageList();
  }, []);
  // const moviePageList = posts;
  console.log(posts);

  // get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost); //lấy array từ firstIndex đến lastIndex(không bao gồm lastIndex)
  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //change page by arrow
  const paginateArrow = (number) => {
    if (number === 1) {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      if (currentPage < Math.ceil(posts.length / postsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    }
  };
  const renderMoviePageList = () => {
    return currentPosts?.map((movie, index) => {
      return (
        <tr key={index}>
          <td>{movie.maPhim}</td>
          <td>{`${
            movie.tenPhim.length > 10
              ? movie.tenPhim.substring(0, 9) + " ..."
              : movie.tenPhim
          }`}</td>
          <td style={{ height: "4rem" }}>
            <img height="100%" src={movie.hinhAnh} alt="" />
          </td>
          <td>{`${
            movie.moTa.length > 10
              ? movie.moTa.substring(0, 9) + " ..."
              : movie.moTa
          }`}</td>
          <td>{movie.maNhom}</td>
          <td>{format("dd/MM/yyyy", new Date(movie.ngayKhoiChieu))}</td>
          <td>
            <button className="btn btn-primary mr-2">Tạo lịch chiếu</button>
            <button className="btn btn-success mr-2">Sửa</button>
            <button className="btn btn-danger">Xóa</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      {/* for film management */}
      <div
        className="main_content_user tab-pane container"
        id="film_management"
      >
        <div
          className="text-right row border-bottom mb-3"
          style={{ padding: "1rem", justifyContent: "space-between" }}
        >
          {" "}
          <h2 className="text-center text-primary">Danh sách phim</h2>
          <button className="btn btn-primary">Thêm phim</button>
        </div>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            name
            id
            aria-describedby="helpId"
            placeholder="Nhập vào tên phim"
          />
          <div
            style={{
              backgroundColor: "#00000047",
              width: "2.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon="search" />
          </div>
        </div>

        <table className="text-center table table-bordered table-hover myTable">
          <thead className="text-primary">
            {/* <th>Tùy chọn</th> */}
            <tr>
              <th>Mã phim</th>
              <th style={{ width: "13%" }}>Tên phim</th>
              <th style={{ width: "9%" }}>Hình ảnh</th>
              <th style={{ width: "14%" }}>Mô tả</th>
              <th>Mã nhóm</th>
              <th>Ngày khởi chiếu</th>
              <th>
                <FontAwesomeIcon icon="cogs" />
              </th>
            </tr>
          </thead>
          <tbody>{renderMoviePageList()}</tbody>
        </table>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts?.length}
          paginate={paginate}
          paginateArrow={paginateArrow}
        />
      </div>
    </>
  );
}

export default Movie_content;
