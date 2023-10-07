import logo from "assets/restaurant-images/logo.jpg";
import React from "react";

export default function NavBar({ handleClick, tabs, currentTab }) {
  return (
    <div className="flex justify-center">
      <img
        src={logo}
        alt=""
        className="object-scale-down h-24 w-24 rounded-full self-center object-center mx-4 hidden sm:block"
      />
      <nav className="flex justify-center items-center">
        {Object.keys(tabs).map((tab, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                handleClick(tab);
              }}
              className={`capitalize hover:cursor-pointer mx-3 border-2 ${
                currentTab === tab
                  ? "border-red-500 ring-red-400 transform translate-y-2"
                  : "border-blue-500 ring-blue-400"
              } p-3 text-xl bg-gray-500 text-gray-300 ring-8  rounded-sm transition-transform duration-1000 hover:ring-indigo-600 h-14 top-1/2`}
            >
              {tab}
            </div>
          );
        })}
      </nav>
      <img
        src={logo}
        alt=""
        className={`object-scale-down h-24 w-24 rounded-full self-center object-center mx-4 hidden md:block`}
      />
    </div>
  );
}
