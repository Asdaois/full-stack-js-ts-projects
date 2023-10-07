import React from "react";

export const SearchBox = ({ handleChange, placeholder }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      className="my-0 mx-auto block py-2 px-3 w-36 leading-7 mb-8 outline-none border-b border-green-500"
    />
  );
};
