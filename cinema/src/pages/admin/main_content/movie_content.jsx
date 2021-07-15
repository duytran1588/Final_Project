import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "date-format";
import Pagination from "../../../components/pagination/pagination";
import axios from "axios";
import Swal from "sweetalert2";
import AddMovieModal from "./addMovieModal";

function Movie_content() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  //for movieSearch
  const [postsSearch, setPostsSearch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(7); //7 phim 1 trang

  //data cho search movie
  const [movieSearch, setMovieSearch] = useState("");

  // do dùng useSelector cần lk với redux sẽ render luôn thẻ cha => call API phải lưu state nội bộ để thẻ cha không render lại
  const getMoviePageList = async () => {
    const moviePageList = await axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    );

    setPosts(moviePageList.data);
  };

  useEffect(() => {
    getMoviePageList();
  }, []);

  // get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost); //lấy array từ firstIndex đến lastIndex(không bao gồm lastIndex)
  const currentPostsSearch = postsSearch?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

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

  //change page arrow for search
  const paginateArrowSearch = (number) => {
    if (number === 1) {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      if (currentPage < Math.ceil(postsSearch.length / postsPerPage)) {
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
            <button className="btn btn-primary mr-2">
              <FontAwesomeIcon icon="calendar-alt" />
            </button>
            <button className="btn btn-success mr-2">
              <FontAwesomeIcon icon="edit" />
            </button>
            <button
              onClick={() => {
                handleDeleteMovie(movie.maPhim);
              }}
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon="trash-alt" />
            </button>
          </td>
        </tr>
      );
    });
  };

  //tìm kiếm phim
  const handleChangeMovieSearch = (e) => {
    const { value } = e.target;
    setMovieSearch(value);
  };
  const handleSearchMovie = async (e) => {
    e.preventDefault();
    console.log(movieSearch);
    const movie = movieSearch;

    const res = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${movie}`
    );
    console.log(res.data);

    if (res.data.length !== 0) {
      setPostsSearch(res.data);
      setCurrentPage(1);
    } else {
      //không tìm thấy
      Swal.fire({
        title: "Không tìm thấy",
        text: "Vui lòng không gõ dấu",
        icon: "error", //success, error, warning
        confirmButtonText: "Đóng",
      });
    }
  };

  //xóa phim
  const handleDeleteMovie = (maPhim) => {
    //xác nhận delete
    Swal.fire({
      title: "Xóa phim?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
      // buttons: {
      confirmButton: { class: "sweet-confirm" },
      // },
    }).then((result) => {
      if (result.isConfirmed) {
        const dataStorage = JSON.parse(localStorage.getItem("userLogin"));
        const accessToken = dataStorage.accessToken;
        let promise = axios({
          method: "DELETE",
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        promise.then((res) => {
          //dùng tìm kiếm tìm movie, sau khi xóa xong, nhấn kết thúc tìm kiếm
          const finish_searching_movie = document.getElementById(
            "finish_searching_movie"
          );
          if (finish_searching_movie) {
            finish_searching_movie.click();
          }
          getMoviePageList();
          Swal.fire({
            title: "Xóa thành công",
            icon: "success", //success, error, warning
            confirmButtonText: "Đóng",
          });
        });
        promise.catch((err) => {
          console.log(err);
          Swal.fire({
            title: err.response.data,
            icon: "error", //success, error, warning
            confirmButtonText: "Đóng",
          });
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Hủy",
          confirmButtonText: "Đóng",
        });
      }
    });
  };

  const renderMovieSearch = () => {
    return currentPostsSearch?.map((movie, index) => {
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
            <button className="btn btn-primary mr-2">
              <FontAwesomeIcon icon="calendar-alt" />
            </button>
            <button className="btn btn-success mr-2">
              <FontAwesomeIcon icon="edit" />
            </button>
            <button
              onClick={() => {
                handleDeleteMovie(movie.maPhim);
              }}
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon="trash-alt" />
            </button>
          </td>
        </tr>
      );
    });
  };

  //Không dùng loading vì loading connect với reducer => nếu loading thay đổi dẫn đến thẻ cha thay đổi => trở
  //lại user_content được chọn mặc định

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
          <button
            data-toggle="modal"
            data-target="#addMovieModal"
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>

        <form onSubmit={handleSearchMovie} className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            name="movieSearch"
            id
            aria-describedby="helpId"
            placeholder="Nhập vào tên phim"
            onChange={handleChangeMovieSearch}
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
            <button className="btn" type="submit">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </form>

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
          <tbody>
            {postsSearch.length === 0
              ? renderMoviePageList()
              : renderMovieSearch()}
          </tbody>
        </table>
        {postsSearch.length === 0 ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts?.length}
            paginate={paginate}
            paginateArrow={paginateArrow}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={postsSearch?.length}
              paginate={paginate}
              paginateArrow={paginateArrowSearch}
            />

            <button
              id="finish_searching_movie"
              className="btn btn-danger"
              onClick={() => {
                setPostsSearch([]);
              }}
            >
              Kết thúc
            </button>
          </div>
        )}
      </div>

      <AddMovieModal getMoviePageList={getMoviePageList} />
    </>
  );
}

export default Movie_content;
