import React from "react";
import "./pagination.scss";

function Pagination_User({ postsPerPage, totalPosts, paginate, paginateArrow }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  pageNumbers.unshift("Prev");
  pageNumbers.push("Next");

  //viết hàm tách chuỗi
  const split_string = (string) => {
    const a_number = string.split("_");
    return parseInt(a_number[1]);
  };

  const changeStatusPage = (id) => {
    /**
     * Nếu click vào Pre / Next
     *  -dom tới thẻ a đang active
     *  -lấy id thẻ đó
     *  -tách ra lấy số
     *  -giảm / tăng số đó
     *  -dom tới thẻ a với id mới và gán active vào đó
     */
    if (id === "pageUser_Prev") {
      const a_active = document.querySelector(
        ".user_pagination li a.pagination_active"
      ).id;
      //tách số id
      const a_number_id = split_string(a_active);
      if (a_number_id > 1) {
        const a_prev_number = a_number_id - 1;
        //remove active cho các thẻ đang active
        document
          .querySelector(".user_pagination li a.pagination_active")
          ?.classList.remove("pagination_active");
        //gán active cho thẻ a có id mới
        document
          .getElementById(`aUser_${a_prev_number}`)
          .classList.add("pagination_active");
      }
    } else if (id === "pageUser_Next") {
      const a_active = document.querySelector(
        ".user_pagination li a.pagination_active"
      ).id;
      //tách số id
      const a_number_id = split_string(a_active);
      if (a_number_id < Math.ceil(totalPosts / postsPerPage)) {
        const a_next_number = a_number_id + 1;
        //remove active cho các thẻ đang active
        document
          .querySelector(".user_pagination li a.pagination_active")
          ?.classList.remove("pagination_active");
        //gán active cho thẻ a có id mới
        document
          .getElementById(`aUser_${a_next_number}`)
          .classList.add("pagination_active");
      }
    } else {
      document
        .querySelector(".user_pagination li a.pagination_active")
        ?.classList.remove("pagination_active");

      document.querySelector(`#${id} a`).classList.add("pagination_active");
    }
  };
  return (
    <nav aria-label="Page user navigation example">
      <ul className="pagination user_pagination">
        {pageNumbers.map((number) => {
          return (
            <li
              id={`pageUser_${number}`}
              onClick={() => {
                changeStatusPage(`pageUser_${number}`);
              }}
              style={{ cursor: "pointer" }}
              key={number}
              className="page-item"
            >
              <a
                id={`aUser_${number}`}
                onClick={
                  number === "Prev"
                    ? () => paginateArrow(1)
                    : number === "Next"
                    ? () => paginateArrow(2)
                    : () => paginate(number)
                }
                className={`page-link ${
                  number == 1 ? "pagination_active" : ""
                } `}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination_User;
