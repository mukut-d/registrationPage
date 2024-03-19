import { useState } from "react";

export default function Input({
  idClass = false,
  icon,
  placeholder,
  id,
  error = false,
  onChange,
  ...props
}) {
  const idInput = idClass ? idClass : id;

  return (
    <>
      <div
        className="flex items-center justify-center gap-4 bg-rose-50 backdrop-blur-md rounded-md w-full px-4 py-4"
        id={idInput}
      >
        {icon}
        <input
          className="w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none pl-[8px]"
          placeholder={placeholder}
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
