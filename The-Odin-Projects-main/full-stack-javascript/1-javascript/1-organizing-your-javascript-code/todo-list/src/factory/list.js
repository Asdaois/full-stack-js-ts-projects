import { createCard } from "./card.js";
import { createMenucontext } from "./menuContext";

const createList = (title = "", id, parentId) => {
  const list = {};
  list.title = title;
  list.id = `${parentId}-list-${id}`;
  list.parentId = parentId;
  const cards = [];

  const getParent = () => {
    return document.getElementById(list.parentId);
  };
  const createListHtml = (() => {
    const container = document.createElement("div");
    container.id = list.id;
    container.classList.add("list");

    const title = document.createElement("input");
    title.type = "text";
    title.id = "title";
    title.maxLength = "19";
    title.value = list.title;

    container.appendChild(title);
    getParent().appendChild(container);
  })();
  const getSelf = () => {
    return document.getElementById(list.id);
  };

  const getCard = (id) => {
    return getSelf().querySelector(`#${id}`);
  };

  const menu = createMenucontext(list.id, true);
  menu.addOption("Create card", () => {
    const card = createCard(cards.length, list.id);
    cards.push(card.getId());
  });
  menu.init();
  const getId = () => {
    return list.id;
  };
  return { getId };
};
export { createList };
