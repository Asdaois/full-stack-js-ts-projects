import { createList } from "./list";
import { createMenucontext } from "./menuContext";

const createProject = (id) => {
  const project = {};
  project.name = `Project ${id + 1}`;
  project.id = `project-${id}`;
  project.todoLists = [];
  const createProjectHtml = (() => {
    const container = document.createElement("div");
    container.id = project.id;
    container.classList.add("project");
    document.querySelector("#project-container").appendChild(container);
  })();
  const menu = createMenucontext(project.id, true);
  menu.addOption("Create list", () => {
    const name = prompt("Input a name for the list:");
    const list = createList(name, project.todoLists.length, project.id);
    project.todoLists.push(list.getId());
  });
  menu.init();
};
export { createProject };
