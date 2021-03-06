import React from "react";
import "./pagination.scss";

function PaginationUser({
  postsPerPage,
  totalPosts,
  paginate,
  paginateArrow,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage, //lưu props để chạy css cho ô chuyển trang có number trùng với currentPage
  paginateTarget,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i); //tất cả các ô chuyển trang
  }

  //viết hàm dàn pagination
  const render_User_Pagination = () => {
    return pageNumbers.map((number, index) => {
      if (
        number < maxPageNumberLimit + 1 &&
        number > minPageNumberLimit &&
        index < pageNumbers.length - 1
      ) {
        return (
          <li
            key={index}
            id={`pageUser_${number}`}
            style={{ cursor: "pointer" }}
            className="page-item"
          >
            <a
              id={`aUser_${number}`}
              onClick={() => paginate(number)}
              className={`page-link ${
                currentPage === number ? "pagination_active" : ""
              } `}
            >
              {number}
            </a>
          </li>
        );
      } else {
     
        return null;
      }
    });
  };

  //viết hàm dàn pagination last
  const render_Last_Pagination = () => {
    const number = pageNumbers[pageNumbers.length - 1];
    return (
      <li
        id={`pageUser_${number}`}
        style={{ cursor: "pointer" }}
        key={number}
        className="page-item"
      >
        <a
          id={`aUser_${number}`}
          onClick={() => paginate(number)}
          className={`page-link ${
            currentPage === number ? "pagination_active" : ""
          } `}
        >
          {number}
        </a>
      </li>
    );
  };

  let pageIncrementBtn = null;
  if (
    pageNumbers.length > maxPageNumberLimit &&
    pageNumbers.length - maxPageNumberLimit !== 1 //trang cuối và trang kế không cần cách nhau bằng dấu "..."
  ) {
    //chừng nào số lượng tất cả các ô chuyển trang còn nhiều hơn max thì vẫn tạo ô ...
    //mục đích xét if là để ô cuối cùng không xuất hiện ô ...
    pageIncrementBtn = (
      <li
        style={{ cursor: "pointer" }}
        className="page-item"
        onClick={() => paginateArrow("next")}
      >
        <a className="page-link">&hellip;</a>
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    //thực thế min mới = 10
    pageDecrementBtn = (
      <li
        style={{ cursor: "pointer" }}
        className="page-item"
        onClick={() => paginateArrow("prev")}
      >
        <a className="page-link">&hellip;</a>
      </li>
    );
  }

  return (
    <nav aria-label="Page user navigation example">
      <ul className="pagination user_pagination pagination-sm ">
        {/* thêm firt pagination */}
        <li
          className="page-item"
          style={{
            cursor: `${currentPage === pageNumbers[0] ? "default" : "pointer"}`,
          }}
        >
          <a
            className={`page-link ${
              currentPage === pageNumbers[0] ? "disable_pagination" : ""
            }`}
            onClick={() => paginateTarget("first")}
          >
            First
          </a>
        </li>
        <li
          id="pageUser_Prev"
          style={{
            cursor: `${currentPage === pageNumbers[0] ? "default" : "pointer"}`,
          }}
          className="page-item"
        >
          <a
            id={`aUser_Prev`}
            onClick={() => paginateArrow("prev")}
            className={`page-link ${
              currentPage === pageNumbers[0] ? "disable_pagination" : ""
            }`}
          >
            Prev
          </a>
        </li>

        {pageDecrementBtn}
        {render_User_Pagination()}
        {pageIncrementBtn}
        {render_Last_Pagination()}
        <li
          id="pageUser_Next"
          style={{
            cursor: `${
              currentPage === pageNumbers[pageNumbers.length - 1]
                ? "default"
                : "pointer"
            }`,
          }}
          className="page-item"
        >
          <a
            id={"aUser_Next"}
            onClick={() => paginateArrow("next")}
            className={`page-link ${
              currentPage === pageNumbers[pageNumbers.length - 1]
                ? "disable_pagination"
                : ""
            }`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationUser;
