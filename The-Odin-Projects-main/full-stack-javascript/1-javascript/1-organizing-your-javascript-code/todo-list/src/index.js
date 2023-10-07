import { createGlobalMenu } from "./globalMenu.js";

const todoAPI = (() => {
  const init = () => {
    const aplication = createGlobalMenu();
    aplication.init();
  };
  return { init };
})();
todoAPI.init();
