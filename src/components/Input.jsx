import { useState } from "react";

export default function Input({
  label,
  id,
  error = false,
  onChange,
  ...props
}) {
  return (
    <>
      <div style={{ border: error ? "2px solid red" : null }}>
        <label htmlFor="email">{label}</label>
        <input
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
