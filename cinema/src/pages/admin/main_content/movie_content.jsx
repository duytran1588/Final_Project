import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "date-format";
import Pagination from "../../../components/pagination/pagination";
import axios from "axios";
import Swal from "sweetalert2";
import AddMovieModal from "./movie-modal/addMovieModal";
import EditMovieModal from "./movie-modal/editMovieModal";
import { useHistory } from "react-router";

function MovieContent() {
  const [posts, setPosts] = useState([]);
  //for movieSearch
  const [postsSearch, setPostsSearch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7; //7 phim 1 trang

  //data cho search movie
  const [movieSearch, setMovieSearch] = useState("");

  const changeHTTP = (hinhAnh) => {
    //tách hinhAnh url thành http
    let src_img = "";
    if (hinhAnh) {
      const src_img_http = hinhAnh.split(":");
      let src_img_https = src_img_http[0] + "s";
      src_img = src_img_https + ":" + src_img_http[1];
    }
    return src_img;
  };

  //data for add movie
  const [guide, setGuide] = useState({
    maPhim: "(*) Bắt buộc",
    tenPhim: "(*) Bắt buộc",
    biDanh: "(*) Bắt buộc",
    trailer: "(*) Bắt buộc",
    hinhAnh: "(*) Bắt buộc",
    moTa: "(*) Bắt buộc",
    ngayKhoiChieu: "(*) Bắt buộc",
    danhGia: "(*) Bắt buộc",
  });
  const [values, setValues] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "GP01",
    ngayKhoiChieu: "",
    danhGia: "",
  });
  const [errors, setErrors] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    ngayKhoiChieu: "",
    danhGia: "",
  });

  //hàm kiểm tra điều kiện
  const checkValid = () => {
    let isValid = true;
    for (let key in values) {
      if (values[key] === "" || values[key] === {}) {
        isValid = false;
        break;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        isValid = false;
        break;
      }
    }

    return isValid;
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    const isValid = checkValid();
    if (!isValid) {
      Swal.fire({
        title: "Thông tin của Bạn chưa đúng",
        icon: "error",
        confirmButtonText: "Vui lòng thử lại",
      });
      return;
    }

    Swal.fire({
      title: "Thêm phim mới?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
    }).then((result) => {
      if (result.isConfirmed) {
        let form_data = new FormData();
        for (let key in values) {
          form_data.append(key, values[key]);
        }

        //call api
        axios({
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
          method: "POST",
          data: form_data,
        })
          .then((res) => {
            console.log(res);
            //tắt modal
            const btn_close_movie_modal = document.getElementById(
              "btn_close_add_modal"
            );
            if (btn_close_movie_modal) {
              btn_close_movie_modal.click();
            }
            //render lại trang
            getMoviePageList();
            Swal.fire({
              title: "Thêm thành công",
              icon: "success", //success, error, warning
              confirmButtonText: "Đóng",
            });
          })
          .catch((err) => {
            Swal.fire({
              title: err.response.data,
              icon: "error", //success, error, warning
              confirmButtonText: "Đóng",
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Hủy");
      }
    });
  };
  const handleChangeMovieInput = (e) => {
    const { name, value } = e.target; //boc tach bien <ES6>

    let newValues = { ...values };
    if (name === "hinhAnh") {
      newValues[name] = e.target.files[0];
    } else {
      if (name === "tenPhim") {
        newValues.biDanh = value;
      }
      newValues[name] = value;
    }

    let newErrors = { ...errors };

    //yêu cầu bắt buộc trên input
    let newGuide = { ...guide };

    if (value.trim() !== "") {
      newGuide[name] = "";
    } else {
      newGuide[name] = "(*) Bắt buộc";
    }

    //xét lỗi rỗng
    if (value.trim() === "") {
      //loại bỏ các khoảng trắng bằng trim()
      newErrors[name] = "Vui lòng không để trống !";
    } else {
      if (name === "ngayKhoiChieu") {
        const reg =
          /^((0[1-9]|[12][0-9]|3[01])(\/)(0[13578]|1[02]))|((0[1-9]|[12][0-9])(\/)(02))|((0[1-9]|[12][0-9]|3[0])(\/)(0[469]|11))(\/)\d{4}$/;

        if (!reg.test(value)) {
          newErrors[name] = "Định dạng ngày chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else if (name === "danhGia") {
        const reg = /^([1-9]|10)$/;
        if (!reg.test(value)) {
          newErrors[name] = "Điểm chưa đúng";
        } else {
          newErrors[name] = "";
        }
      } else {
        newErrors[name] = "";
      }
    }

    //note: setState là phương thức bất đồng bộ => hạn chế gọi trong code
    setGuide(newGuide);
    setValues(newValues);
    setErrors(newErrors);
  };

  const resetFormMovie = () => {
    //set lại values và errors
    let newValues = { ...values };
    let newErrors = { ...errors };
    let newGuide = { ...guide };
    for (let key in newValues) {
      // if (key === "hinhAnh") {
      //   newValues[key] = {};
      // }
      if (key !== "maNhom") {
        newValues[key] = "";
      }
      // newValues[key] = "";
    }
    for (let key in newErrors) {
      newErrors[key] = "";
    }
    for (let key in newGuide) {
      newGuide[key] = "(*) Bắt buộc";
    }
    setGuide(newGuide);
    setValues(newValues);
    setErrors(newErrors);
    document.getElementsByClassName("movieForm")[0].reset(); //mất hình ảnh đã chọn khi thêm movie lần trước
  };

  //for edit movie
  const getDataFromMovie = (movie) => {
    setValues({
      maPhim: movie.maPhim,
      tenPhim: movie.tenPhim,
      biDanh: movie.biDanh,
      trailer: movie.trailer,
      hinhAnh: movie.hinhAnh,
      moTa: movie.moTa,
      maNhom: movie.maNhom,
      ngayKhoiChieu: format("dd/MM/yyyy", new Date(movie.ngayKhoiChieu)),
      danhGia: movie.danhGia,
    });
  };

  const handleEditMovie = (e) => {
    e.preventDefault();
    const isValid = checkValid();
    if (!isValid) {
      Swal.fire({
        title: "Thông tin của Bạn chưa đúng",
        icon: "error",
        confirmButtonText: "Vui lòng thử lại",
      });
      return;
    }

    Swal.fire({
      title: "Cập nhật phim?",
      showDenyButton: true,
      confirmButtonText: `Có`,
      denyButtonText: `Không`,
    }).then((result) => {
      if (result.isConfirmed) {
        const dataStorage = JSON.parse(localStorage.getItem("userLogin"));
        const accessToken = dataStorage.accessToken;
        let form_data = new FormData();
        for (let key in values) {
          form_data.append(key, values[key]);
        }
        //call api
        axios({
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
          method: "POST",
          data: form_data,
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((res) => {
            //tắt modal
            const btn_close_movie_modal = document.getElementById(
              "btn_close_edit_modal"
            );
            if (btn_close_movie_modal) {
              btn_close_movie_modal.click();
            }

            Swal.fire({
              title: "Cập nhật thành công",
              icon: "success", //success, error, warning
              confirmButtonText: "Đóng",
            });
            //render lại trang
            getMoviePageList();
          })
          .catch((err) => {
            Swal.fire({
              title: err.response.data,
              icon: "error", //success, error, warning
              confirmButtonText: "Đóng",
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Hủy");
      }
    });
  };

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

  //chuyển sang trang showtime detail
  const history = useHistory();
  const handleShowTimeDetail = (maPhim) => {
    history.push(`/lich-chieu/${maPhim}`);
  };

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
            <img height="100%" src={changeHTTP(movie.hinhAnh)} alt="" />
          </td>
          <td>{`${
            movie.moTa.length > 10
              ? movie.moTa.substring(0, 9) + " ..."
              : movie.moTa
          }`}</td>
          <td>{movie.maNhom}</td>
          <td>{format("dd/MM/yyyy", new Date(movie.ngayKhoiChieu))}</td>
          <td>
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                handleShowTimeDetail(movie.maPhim);
              }}
            >
              <FontAwesomeIcon icon="calendar-alt" />
            </button>
            <button
              data-toggle="modal"
              data-target="#editMovieModal"
              className="btn btn-success mr-2"
              onClick={() => {
                getDataFromMovie(movie);
              }}
            >
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

    const movie = movieSearch;

    const res = await axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${movie}`
    );

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
            title: err.response?.data,
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
            <img height="100%" src={changeHTTP(movie.hinhAnh)} alt="" />
          </td>
          <td>{`${
            movie.moTa.length > 10
              ? movie.moTa.substring(0, 9) + " ..."
              : movie.moTa
          }`}</td>
          <td>{movie.maNhom}</td>
          <td>{format("dd/MM/yyyy", new Date(movie.ngayKhoiChieu))}</td>
          <td>
            <button
              onClick={() => {
                handleShowTimeDetail(movie.maPhim);
              }}
              className="btn btn-primary mr-2"
            >
              <FontAwesomeIcon icon="calendar-alt" />
            </button>
            <button
              data-toggle="modal"
              data-target="#editMovieModal"
              className="btn btn-success mr-2"
              onClick={() => {
                getDataFromMovie(movie);
              }}
            >
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
          style={{
            padding: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <h2 className="text-center text-primary">Danh sách phim</h2>
          <button
            data-toggle="modal"
            data-target="#addMovieModal"
            className="btn btn-primary"
            style={{ borderRadius: "50%", width: "3rem", height: "3rem" }}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>

        <form onSubmit={handleSearchMovie} className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            name="movieSearch"
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
              alignItems: "center",
            }}
          >
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={postsSearch?.length}
              paginate={paginate}
              paginateArrow={paginateArrowSearch}
            />

            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
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

      <AddMovieModal
        handleSubmit={handleAddMovie}
        handleChangeMovieInput={handleChangeMovieInput}
        resetFormMovie={resetFormMovie}
        values={values}
        errors={errors}
        button={"Thêm"}
        idClose={"btn_close_add_modal"}
        guide={guide}
      />

      <EditMovieModal
        handleSubmit={handleEditMovie}
        handleChangeMovieInput={handleChangeMovieInput}
        resetFormMovie={resetFormMovie}
        values={values}
        errors={errors}
        disabled
        button={"Cập nhật"}
        idClose={"btn_close_edit_modal"}
        guide={guide}
      />
    </>
  );
}

export default MovieContent;
