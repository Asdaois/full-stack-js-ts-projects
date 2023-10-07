import React from "react";
import Th from "./Th";

function TableLayout({ headers, children }) {
  return (
    <table className="table-auto border-collapse border border-gray-600 min-w-[80%]">
      <thead className="">
        <tr>
          {headers.map((value) => (
            <Th>{value}</Th>
          ))}
        </tr>
      </thead>
      <tbody className="">{children}</tbody>
    </table>
  );
}

export default TableLayout;
