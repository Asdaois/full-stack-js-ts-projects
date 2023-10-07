import loadHome from "./modules/home_page.js";
import loadContact from "./modules/contact.js";
import loadMenu from "./modules/menu.js";

const API = (() => {
  const nav = document.querySelector("nav");
  const tags = [];
  const content = document.getElementById("content");

  createTags();
  content.appendChild(loadHome());

  function clear() {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  function createTag(id = "", text = "", handler) {
    const tag = document.createElement("div");
    tag.id = id;

    tag.addEventListener("click", () => {
      changeTag(id);
      content.appendChild(handler());
      tags.forEach((tag) => {
        if (tag.id != id) {
          tag.classList.remove("active");
          return;
        }
        tag.classList.add("active");
      });
    });
    const name = document.createElement("h2");
    name.textContent = text;
    tag.appendChild(name);
    tag.classList.add("tag");
    return tag;
  }

  function createTags() {
    const homeTag = createTag("home", "HOME", loadHome);
    homeTag.classList.add("active");
    nav.appendChild(homeTag);
    const menuTag = createTag("menu", "MENU", loadMenu);
    nav.appendChild(menuTag);
    const contactTag = createTag("contact", "CONTACT", loadContact);
    nav.appendChild(contactTag);
    const tagsNodes = document.querySelectorAll(".tag");
    tags.push(...tagsNodes);
  }

  function changeTag(id) {
    console.log({ id });
    clear();
  }

  return { clear };
})();
