import React from "react";

function Td({ children, center }) {
  return (
    <td
      className={`border border-collapse border-gray-800 ${
        center ? "mx-auto" : ""
      }`}
    >
      {children}
    </td>
  );
}

export default Td;
