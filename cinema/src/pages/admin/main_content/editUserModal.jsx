import React, { Component } from "react";
import SignUpModal from "../../../components/signUp/signUpModal";

class EditUserModal extends Component {
  render() {
    const {
      values,
      errors,
      handleSubmit,
      handleChangeValue,
      title,
      button,
      resetInputForm,
      idClose,
      disabled,
    } = this.props;
    return (
      <div className="modal fade" id="editUserModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Cập nhật thông tin</h4>
              <button
                onClick={() => {
                  resetInputForm();
                }}
                id="editUserModalClose"
                type="button"
                className="close"
                data-dismiss="modal"
              >
                +
              </button>
            </div>
            {/* Modal body */}
            <div className="editUser addUser modal-body">
              <SignUpModal
                values={values}
                errors={errors}
                handleChangeValue={handleChangeValue}
                handleSubmit={handleSubmit}
                title={title}
                button={button}
                resetInputForm={resetInputForm}
                idClose={idClose}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUserModal;
