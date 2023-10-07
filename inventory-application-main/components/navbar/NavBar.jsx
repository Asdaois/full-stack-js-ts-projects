import Link from "next/link";
import NavLink from "./NavLink";
import React from "react";

function NavBar() {
  return (
    <nav className="flex flex-col min-w-[9rem] border-b">
      <NavLink href="/" displayName="Home"/>
      <NavLink href="/users" displayName="Users"/>
      <NavLink href="/rentals" displayName="Rentals"/>
      <NavLink href="/machines" displayName="Machines"/>
      <NavLink href="/machine-types" displayName="Machine types"/>
      <NavLink href="/users/create" displayName="Add new User"/>
      <NavLink href="/rentals/create" displayName="Add Rental"/>
      <NavLink href="/machines/create" displayName="Add Machine"/>
      <NavLink href="/machine-types/create" displayName="Add Machine types"/>
    </nav>
  );
}

export default NavBar;
