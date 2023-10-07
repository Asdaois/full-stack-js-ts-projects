import React from "react";

function Th({ children }) {
  return (
    <th className="px-6 py-2 border border-gray-800 text-left bg-gray-700 text-gray-400">
      {children}
    </th>
  );
}

export default Th;
