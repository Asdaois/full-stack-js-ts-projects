export function changeNameToUrl(name = "") {
  return name.toLowerCase().replace(new RegExp(" ", "g"), "-");
}
