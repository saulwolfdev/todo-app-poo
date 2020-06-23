import view from "../Views/404.html";
export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  return divElement;
};