import Link from "next/link";
import React from "react";

function NavLink({ href, displayName }) {
  return (
    <Link href={href}>
      <a className="capitalize hover:bg-gray-600 hover:text-white p-1">{displayName}</a>
    </Link>
  );
}

export default NavLink;
