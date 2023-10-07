import React from "react";
import "./custom-button.css";

export default function CustomButton({
  children,
  isGoogleSignIn,
  addClass,
  inverted,
  ...props
}) {
  return (
    <button
      className={`${addClass} block w-auto h-13 py-0 text-base font-bold leading-10 tracking-wide uppercase  border border-transparent border-solid cursor-pointer custom-button min-w-167px px-9  ${
        isGoogleSignIn
          ? "bg-[#4285F4] text-white hover:bg-[#357ae8]  hover:text-white"
          : inverted
          ? "hover:border-white text-black bg-white hover:text-white hover:bg-black border"
          : "hover:border-subColor-900 text-white bg-black hover:text-black  hover:bg-white"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
