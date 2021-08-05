import React from "react";

function FormGroupInput(props) {
  const { label, name, defaultValue, type, handleChange, id, error, disabled } =
    props;
  return (
    <>
      <label>{label}</label>
      <input
        onChange={handleChange}
        className="form-control"
        name={name}
        id={id}
        aria-describedby="helpId"
        defaultValue={defaultValue}
        type={type}
        disabled={disabled}
      />
      <small id="helpId" className="form-text text-danger mb-2">
        {error}
      </small>
    </>
  );
}

export default FormGroupInput;
