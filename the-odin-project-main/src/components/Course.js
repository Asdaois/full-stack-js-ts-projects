import { curriculum } from "data";
import { changeNameToUrl } from "helper/urlHelper";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Course() {
  const { course } = useParams();
  const [path, setPath] = useState(null);

  useEffect(() => {
    curriculum.paths.forEach((path, i) =>
      changeNameToUrl(path.title) === course ? setPath(path) : -1
    );
  }, [course]);
  return (
    <div className="">
      {path ? (
        <>
          <div className="container px-5 py-10 mx-auto text-center">
            <h1 className="text-4xl font-medium mb-4">{path.title}</h1>
            <h2 className="mx-auto text-base">{path.description}</h2>
          </div>
          <div className="flex flex-row flex-wrap justify-around">
            {path.projects.map((project, i) => {
              return (
                <div
                  key={project.title}
                  className="max-w-md bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-2xl w-1/3 min-w-min flex-grow m-2 mx-2"
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        src={project.image}
                        alt={`Preview of ${project.title}`}
                        className="h-48 w-full object-cover md:w-48  inset-0 object-left "
                      />
                    </div>
                    <div className="p-8 flex flex-col">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ">
                        <h3 className="whitespace-normal">{project.title}</h3>
                      </div>
                      <p className="mt-2 text-gray-500">
                        {project.description}{" "}
                      </p>
                      <Link
                        to={`/${changeNameToUrl(project.title)}`}
                        className="block text-lg leading-tight font-medium text-black hover:underline mt-auto"
                      >
                        Go to project
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Course;
