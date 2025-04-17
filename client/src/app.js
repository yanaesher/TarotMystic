import { loadPage } from "./utils/loadPage.js";
import { welcomePage } from "./pages/welcomePage.js";

function loadApp() {
  loadPage(welcomePage);
}

window.addEventListener("load", loadApp);
