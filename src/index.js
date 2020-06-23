import { router } from "./Routes/index.routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";
const init = () => {
  router(window.location.hash);
  window.addEventListener("hashchange", () => {
  router(window.location.hash);
  });
};
window.addEventListener("load", init);