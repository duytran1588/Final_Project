import React from "react";
import Movie_Form from "../../../../components/movie-form-group/movie_form";

function EditMovieModal(props) {
  const {
    handleSubmit,
    handleChangeMovieInput,
    resetFormMovie,
    values,
    errors,
    disabled,
    button,
    idClose,
  } = props;
  return (
    <>
      <div
        className="modal fade"
        id="editMovieModal"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
        style={{ padding: 0 }}
      >
        <div className="modal-dialog" style={{ maxWidth: "600px" }} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cập nhật</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  resetFormMovie();
                }}
              >
                <span aria-hidden="true">+</span>
              </button>
            </div>
            <div className="modal-body">
              {/* form-group */}
              <Movie_Form
                handleSubmit={handleSubmit}
                handleChangeMovieInput={handleChangeMovieInput}
                resetFormMovie={resetFormMovie}
                values={values}
                errors={errors}
                disabled={disabled}
                button={button}
                idClose={idClose}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditMovieModal;
