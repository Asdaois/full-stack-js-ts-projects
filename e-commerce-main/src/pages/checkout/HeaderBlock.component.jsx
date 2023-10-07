import React from "react";

export default function HeaderBlock({ name }) {
  return (
    <div className="header-Block capitalize w-1/4 last:w-[8%]">
      <span className="">{name}</span>
    </div>
  );
}
