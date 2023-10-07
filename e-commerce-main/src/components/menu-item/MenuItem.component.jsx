import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

function MenuItem({ title = "", imageUrl, size = "", linkUrl = "" }) {
  const history = useHistory();
  const match = useRouteMatch();

  function handleClick() {
    history.push(`${match.url}${linkUrl}`);
  }

  return (
    <div
      className={`min-w-3/10 h-60 flex-auto flex items-center justify-center 
      border border-solid border-black mt-0 mx-2 mb-4 first:mr-2 last:ml-2 
      group hover:cursor-pointer overflow-hidden ${size && "h-96"}`}
      onClick={handleClick}
    >
      <div
        className="bg-center bg-cover w-full h-full transform 
        group-hover:scale-110 transition-transform duration-6000"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/*"content"*/}
      <div
        className="h-24 px-6 py-0 flex flex-col items-center justify-center  
        border border-solid border-black bg-white opacity-70 absolute 
        group-hover:opacity-90"
      >
        <h1 className="font-bold mb-6px text-2xl text-gray-600">
          {title.toUpperCase()}
        </h1>
        <span className="font-light text-base">SHOW NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
