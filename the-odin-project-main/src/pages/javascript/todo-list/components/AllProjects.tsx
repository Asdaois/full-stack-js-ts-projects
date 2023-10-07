import React from "react";
import TodoProject from "../models/TodoProject";
import Project from "./Project";

interface AllProjectsProps {
  projects: TodoProject[];
  updateProject: (project: TodoProject, index: number) => void;
}

export default function AllProjects({
  projects,
  updateProject,
}: AllProjectsProps) {
  return (
    <div className="p-4 flex flex-col gap-4">
      {projects.length === 0 && (
        <div className="text-red-500">There are not projects yet</div>
      )}

      {projects.map((project, id) => {
        return (
          <Project
            id={id}
            project={project}
            updateProject={updateProject}
            key={id}
          />
        );
      })}
    </div>
  );
}
