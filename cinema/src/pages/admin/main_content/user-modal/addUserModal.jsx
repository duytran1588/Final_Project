import React from "react";
// import SignUpModal from "../../../components/signUp/signUpModal";
import SignUpModal from "../../../../components/signUp/signUpModal";

function AddUserModal(props) {
  const {
    values,
    errors,
    handleSubmit,
    handleChangeValue,
    title,
    button,
    resetInputForm,
    idClose,
   } = props;
  return (
    <div className="modal fade" id="addUserModal">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Thêm người dùng</h4>
            <button
              onClick={() => {
                resetInputForm();
              }}
              id="addUserModalClose"
              type="button"
              className="close"
              data-dismiss="modal"
            >
              +
            </button>
          </div>
          {/* Modal body */}
          <div className="addUser modal-body">
            <SignUpModal
              values={values}
              errors={errors}
              handleChangeValue={handleChangeValue}
              handleSubmit={handleSubmit}
              title={title}
              button={button}
              resetInputForm={resetInputForm}
              idClose={idClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserModal;
