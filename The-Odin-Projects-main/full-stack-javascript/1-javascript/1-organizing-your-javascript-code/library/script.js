class Book {
  constructor(title, author, review = "") {
    this.title = title;
    this.author = author;
    this.review = review;
  }
}
class ControlLibrary {
  constructor(nameItem = "myLibrary") {
    this.nameItem = nameItem;
  }
  initLibrary() {
    myLibrary = this.loadItem();
    updateFromMyLibrary();
  }
  saveItem() {
    localStorage.setItem(this.nameItem, JSON.stringify(myLibrary));
  }
  loadItem() {
    let myLocalLibrary = localStorage.getItem(this.nameItem);
    if (myLocalLibrary) {
      return JSON.parse(myLocalLibrary);
    }
    return [];
  }
}

let myLibrary = [];
function removeFromList(index) {
  myLibrary.splice(index, 1);
}
myLibrary.push(
  new Book(
    "The storm files I",
    "Brandon Sanderson",
    "Is a great the best begin book serie"
  )
);
myLibrary.push(
  new Book(
    "Lucha por un nuevo ma*ana",
    "Jose Guevara",
    "Algun dia llegara un mejor dia"
  )
);

function addBookToLibrary(title, author, review) {
  let book = new Book(title, author, review);
  myLibrary.push(book);
}

function createHtml(book, index) {
  let bookHtml = document.createElement("div");
  bookHtml.classList.add("book");
  bookHtml.dataset.index = index;
  bookHtml.innerHTML = `
      <h3 class="booktitle">${book.title}</h3>
      <h4 class="bookauthor">${book.author}</h4>
      <hr />
      <p class="description">Review: ${book.review}</p>
      <input type="submit" value="Delete" class="button-delete" />
  `;
  return bookHtml;
}

const library = document.getElementById("library");
function removeallChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function updateFromMyLibrary() {
  removeallChildren(library);
  myLibrary.forEach((book, index) => {
    library.appendChild(createHtml(book, index));
  });
  const deleteButtons = library.querySelectorAll(".button-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.dataset.index);
      removeFromList(button.dataset.index);
      updateFromMyLibrary();
    });
  });
}

const formAdd = document.getElementById("add-form");

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let review = document.getElementById("review").value;
  addBookToLibrary(title, author, review);
  controlLibrary.saveItem();
  title = "";
  author = "";
  review = "";
  updateFromMyLibrary();
  toggleHide();
  return false;
});
const inputBook = document.getElementById("input-book");
const toggleHide = () => {
  inputBook.classList.toggle("input-book-hide");
};
const activeTimer = () => {
  timeoutVaribale = setTimeout(toggleHide, 3000);
};
let timeoutVaribale;
const createBookBotton = document.getElementById("create-book");
createBookBotton.addEventListener("click", () => {
  toggleHide();
  formAdd.reset();
  activeTimer();
});
formAdd.addEventListener("mouseenter", () => {
  clearTimeout(timeoutVaribale);
});
formAdd.addEventListener("mouseleave", () => {
  activeTimer();
});

let controlLibrary = new ControlLibrary();
const buttonSafeLocalstorage = document.getElementById("safe-localstorage");
buttonSafeLocalstorage.addEventListener("click", () => {
  controlLibrary.saveItem();
});
const buttonSafeCloud = document.getElementById("safe-cloud");
buttonSafeCloud.addEventListener("click", () => {});
controlLibrary.initLibrary();

/*
 * * Esto esta pendiente
 Firebase (check it out!) is an online database that can be set up relatively
 easily, allowing you to save your data to a server in the cloud! Teaching 
 you how to use it is beyond the scope of this tutorial, but it is almost
 definitely within your skill set. If you’re interested, check out this 
 video to seewhat it’s all about.
 */
