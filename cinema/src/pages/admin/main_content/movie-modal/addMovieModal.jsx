import React from "react";
import MovieForm from "../../../../components/movie-form-group/movie_form";

function AddMovieModal(props) {
  const {
    handleSubmit,
    handleChangeMovieInput,
    resetFormMovie,
    values,
    errors,
    button,
    idClose,
    guide
  } = props;
  return (
    <>
      <div
        className="modal fade"
        id="addMovieModal"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
        style={{ padding: 0 }}
      >
        <div className="modal-dialog" style={{ maxWidth: "600px" }} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thêm phim</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  const btn_close_movie_modal = document.getElementById(
                    idClose
                  );
                  if (btn_close_movie_modal) {
                    btn_close_movie_modal.click();
                  }
                }}
              >
                <span aria-hidden="true">+</span>
              </button>
            </div>
            <div className="modal-body">
              {/* form-group */}
              <MovieForm
                handleSubmit={handleSubmit}
                handleChangeMovieInput={handleChangeMovieInput}
                resetFormMovie={resetFormMovie}
                values={values}
                errors={errors}
                button={button}
                idClose={idClose}
                guide={guide}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMovieModal;
