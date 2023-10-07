import { curriculum } from "data";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Curriculum() {
  const history = useHistory();
  const handleClick = (title) => {
    history.push(`/course/${title.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <div className="">
      <div className="container px-5 py-10 mx-auto text-center">
        <h2 className="text-4xl font-medium mb-4">{curriculum.title}</h2>
        <p className="mx-auto text-base">{curriculum.description}</p>
      </div>
      <div className="flex flex-col md:flex-row">
        {curriculum.paths.map((path) => (
          <div
            key={path.title}
            className="mx-2 border border-gray-800 p-6 rounded-lg mb-2 hover:shadow-md hover:bg-gray-300 lg:w-1/2"
            onClick={() => handleClick(path.title)}
          >
            <h2 className="text-4xl font-medium mb-4">{path.title}</h2>
            <p className="mx-auto text-base text-justify">{path.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
