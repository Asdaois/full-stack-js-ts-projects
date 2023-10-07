const createMenucontext = (targetId, _overwriteChildrens = false) => {
  const overwriteChildrens = _overwriteChildrens;
  const menu = {};
  menu.targetId = targetId;
  menu.id = `menu-${targetId}`;
  menu.options = [];

  let menuHtml = document.getElementById(menu.id);
  let menuVisible = false;

  const getSelf = () => {
    return document.getElementById(menu.id);
  };
  const createMenuHtml = () => {
    const div = document.createElement("div");
    div.classList.add("menu");
    div.id = menu.id;

    const ul = document.createElement("ul");
    ul.classList.add("menu-options");
    const options = menu.options;
    options.forEach((option) => {
      const li = document.createElement("li");
      li.classList.add("menu-option");
      li.textContent = option.name;
      li.addEventListener("click", () => {
        option.handle(menu.targetId);
      });
      ul.appendChild(li);
    });

    div.appendChild(ul);
    return div;
  };
  const showMenu = ({ top, left }) => {
    menuHtml.style.left = `${left}px`;
    menuHtml.style.top = `${top}px`;
    toggleMenu("show");
  };
  const getTarget = () => {
    return document.getElementById(menu.targetId);
  };

  const toggleMenu = (command) => {
    menuHtml.style.display = command === "show" ? "block" : "none";
    menuVisible = !menuVisible;
  };

  window.addEventListener("click", () => {
    if (menuVisible) {
      toggleMenu("hide");
    }
  });

  const init = () => {
    getTarget().appendChild(createMenuHtml());
    menuHtml = document.getElementById(menu.id);
    getTarget().addEventListener("contextmenu", (e) => {
      const eventTargetId = e.target.id;
      if (eventTargetId == menu.targetId || overwriteChildrens) {
        const target = document.getElementById(menu.targetId);
        e.preventDefault();
        const origin = {
          left: e.clientX,
          top: e.clientY,
        };
        showMenu(origin);
      }
      return false;
    });
  };
  const addOption = (name, handle) => {
    const option = { name: name, handle: handle };
    menu.options.push(option);
  };
  return { addOption, init, showMenu };
};
export { createMenucontext };
