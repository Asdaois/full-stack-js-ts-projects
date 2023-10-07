import { createProject } from "./factory/projects.js";

const createGlobalMenu = () => {
  const aplication = document.querySelector("#aplication");
  const menu = {};
  menu.id = "menu";
  menu.currentProject = "";
  menu.projectList = [];
  const init = () => {
    const projectContain = document.createElement("div");
    projectContain.id = "project-container";
    aplication.appendChild(projectContain);

    const menuDiv = document.createElement("div");
    menuDiv.id = menu.id;
    const createProjectSelection = document.createElement("div");
    createProjectSelection.textContent = "New Project";

    createProjectSelection.addEventListener("click", () => {
      const target = document.querySelector("#project-container");
      if (target.firstChild) target.removeChild(target.firstChild);
      createProject(menu.projectList.length);
    });
    menuDiv.appendChild(createProjectSelection);
    loadProyectList();

    aplication.appendChild(menuDiv);
  };
  const loadProyectList = () => {
    //Aca cargara datos desde locarstorage o desde la nube
    //
  };
  return { init };
};
export { createGlobalMenu };
