import React from "react";
import Curriculum from "./Curriculum";

function Home() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">The Odin Project</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 mx-auto md:mt-5 md:text-xl lg:mx-0">
          All the principal projects of the curriculum The Odin Project build
          with react and tailwindcss
        </p>
      </div>
      <Curriculum />
    </div>
  );
}
export default Home;
