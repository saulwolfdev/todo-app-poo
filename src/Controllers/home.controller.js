import view from "../Views/home.html";
export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  return divElement;
};