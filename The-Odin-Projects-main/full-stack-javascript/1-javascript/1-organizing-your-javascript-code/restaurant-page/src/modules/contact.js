const contacts = [
  {
    name: "00000000",
    number: "****-77352230753",
    email: "cicicicici",
  },
];
function creanteH3(pre, post) {
  const h3 = document.createElement("h3");
  h3.textContent = `${pre}: ${post}`;
  return h3;
}
function createContact(name, number, email = "") {
  const infoContainer = document.createElement("div");
  infoContainer.appendChild(creanteH3("Name", name));
  infoContainer.appendChild(creanteH3("Number", number));
  infoContainer.appendChild(creanteH3("Email", email));
  return infoContainer;
}
function loadContact() {
  const contactContainer = document.createElement("div");
  contacts.forEach((contact) => {
    contactContainer.appendChild(
      createContact(contact.name, contact.number, contact.email)
    );
  });
  return contactContainer;
}

export default loadContact;
