import React from "react";

function Form_group_input(props) {
  const { label, name, defaultValue, type, handleChange, id, error, disabled } = props;
  return (
    <>
      <label>{label}</label>
      <input
        onChange={handleChange}
        type="text"
        className="form-control"
        name={name}
        id={id}
        aria-describedby="helpId"
        placeholder
        defaultValue={defaultValue}
        type={type}
        disabled={disabled}
      />
      <small id="helpId" className="form-text text-danger mb-2">{error}</small>
    </>
  );
}

export default Form_group_input;
