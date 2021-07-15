import React from "react";
import Movie_Form from "../../../components/movie-form-group/movie_form";

function AddMovieModal(props) {
  const {getMoviePageList} = props;
  return (
    <>
      <div
        class="modal fade"
        id="addMovieModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
        style={{ padding: 0 }}
      >
        <div class="modal-dialog" style={{ maxWidth: "600px" }} role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Thêm phim</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  document.getElementById("btn_close_movie_modal").click();
                }}
              >
                <span aria-hidden="true">+</span>
              </button>
            </div>
            <div class="modal-body">
              {/* form-group */}
              <Movie_Form getMoviePageList={getMoviePageList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMovieModal;
