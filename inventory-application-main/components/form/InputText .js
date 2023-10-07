import React, { useState } from "react";

function InputText({ name, displayName, required, value, handleChange }) {
  const [newValue, setNewValue] = useState(value);

  /**
   *
   * @param {import("react").BaseSyntheticEvent} e
   */
  const handleValue = (e) => {
    setNewValue(e.target.value);
    if (handleChange) handleChange(e);
  };

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor={name}
        >
          {displayName}
        </label>
      </div>
      <div className="md:w-2/3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          name={name}
          id={name}
          type="text"
          onChange={handleValue}
          value={newValue}
          required={required ? required : false}
        />
      </div>
    </div>
  );
}

export default InputText;
