import React from "react";

export default function FormInput({ label, handleChange, ...props }) {
  return (
    <div className="relative w-full mx-0 group my-11">
      <input
        onChange={handleChange}
        placeholder=" "
        {...props}
        className="form-input bg-white text-subColor-700 text-lg py-[6px] pr-2 
          pl-1 block rounded-none my-[20px] mx-0 w-full
          focus:outline-none border-solid border-b-2 border-subColor-700 peer "
      />
      <label
        {...props}
        className={`${
          props.length ? "text-mainColor text-xs" : ""
        } form-input-label focus-within:text-mainColor capitalize peer-focus:text-subColor-600 absolute peer-placeholder-shown:text-base peer-placeholder-shown:text-subColor-400 peer-placeholder-shown:top-2 -top-3.5 left-0 text-sm transition-all duration-300 peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-sm`}
      >
        {label ? `${label}` : ""}
      </label>
    </div>
  );
}
