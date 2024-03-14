import { useState } from "react";

export default function Input({
  idClass = false,
  label,
  id,
  error = false,
  onChange,
  ...props
}) {
  const idInput = idClass ? idClass : id;

  return (
    <>
      <div className="Input" id={idInput}>
        <label htmlFor={id}>{label}</label>
        <input
          style={{ border: error ? "2px solid red" : null }}
          id={id}
          {...props}
          onChange={() => {
            onChange(id, event.target.value);
          }}
        />
      </div>
    </>
  );
}
