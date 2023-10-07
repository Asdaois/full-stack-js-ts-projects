import React, { useState } from "react";

function InputFullName({ firstName, lastName, handleChange }) {
  const [first, setFirst] = useState(firstName)
  const [last, setLast] = useState(lastName)

  /**
   * 
   * @param {import("react").BaseSyntheticEvent} e 
   */
  const handleFirstName = (e) => {
    setFirst(e.target.value)
    if(handleChange)
      handleChange(e)
  }
  /**
   * 
   * @param {import("react").BaseSyntheticEvent} e 
   */
  const handleLastName = (e) => {
    setLast(e.target.value)

    if(handleChange)
      handleChange(e)
  }

  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          First Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white border-gray-200"
          id="grid-first-name"
          type="text"
          name="first_name"
          value={first}
          onChange={handleFirstName}
          required
        />
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-last-name"
        >
          Last Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          name="last_name"
          value={last}
          onChange={handleLastName}
          required
        />
      </div>
    </div>
  );
}

export default InputFullName;
