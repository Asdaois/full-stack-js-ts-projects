import { createMenucontext } from "./menuContext";

const Priority = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};
const Estate = {
  WORKING: "working",
  WAITING: "Waiting",
  COMPLETE: "complete",
  ABANDONED: "abandoned",
};
const createCard = (id, parentId) => {
  const card = {};
  card.parentId = parentId;
  card.id = `${parentId}-card-${id}`;
  card.title = "";
  card.estate = Estate.WAITING;
  card.priority = Priority.HIGH;
  card.description;
  card.note;

  const getParent = () => {
    return document.getElementById(card.parentId);
  };
  const getSelf = () => {
    return getParent().querySelector(`#${card.id}`);
  };

  const createSelet = (name, enums) => {
    const label = document.createElement("label");
    label.textContent = name + " ";
    const select = document.createElement("select");
    select.id = name;
    label.appendChild(select);
    const values = Object.values(enums);
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
    return label;
  };
  const createTextarea = (name, cols, rows, placeholder) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = name;
    fieldset.appendChild(legend);
    const textArea = document.createElement("textarea");
    textArea.id = name;
    textArea.cols = cols;
    textArea.rows = rows;
    textArea.maxLength = cols * rows;
    textArea.placeholder = placeholder;
    fieldset.appendChild(textArea);
    return fieldset;
  };

  const createCardElements = () => {
    const cardElements = [];
    const title = document.createElement("input");
    title.type = "text";
    title.id = "title";
    title.maxLength = "19";
    title.placeholder = "Do *****";
    cardElements.push(title);

    const containerSelects = document.createElement("div");
    containerSelects.classList.add("container-selects");
    containerSelects.appendChild(createSelet("estate", Estate));
    containerSelects.appendChild(createSelet("priority", Priority));

    cardElements.push(containerSelects);
    const description = createTextarea(
      "description",
      "30",
      "5",
      "Here goes the description"
    );
    cardElements.push(description);
    const note = createTextarea("note", "30", "3", "here goes the note");
    cardElements.push(note);

    return cardElements;
  };

  const createCardHtml = (() => {
    const cardhtml = document.createElement("div");
    cardhtml.id = card.id;
    cardhtml.classList.add("card");
    createCardElements().forEach((element) => {
      element.addEventListener("change", () => {
        getData();
      });
      cardhtml.appendChild(element);
    });
    getParent().appendChild(cardhtml);
  })();
  const menu = createMenucontext(card.id, true);
  menu.addOption("Delete card", () => {
    getParent().removeChild(getSelf());
  });
  menu.init();
  const getData = () => {
    const cardElement = getSelf();
    card.title = cardElement.querySelector("#title").value;
    card.estate = cardElement.querySelector("#estate").value;
    card.priority = cardElement.querySelector("#priority").value;
    card.description = cardElement.querySelector("#description").value;
    card.note = cardElement.querySelector("#note").value;
  };

  const getId = () => {
    return card.id;
  };
  return { getData, getId };
};
export { createCard };
