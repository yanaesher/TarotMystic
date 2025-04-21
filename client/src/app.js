import { loadPage } from "./utils/loadPage.js";
import { welcomePage } from "./pages/welcomePage.js";
import { fortunePage } from "./pages/fortunePage.js";
import { data } from "./data.js";

function loadApp() {
  const savedUserName = localStorage.getItem("userName");
  if (!savedUserName) {
    loadPage(welcomePage);
  } else {
    data.userName = savedUserName;
    loadPage(fortunePage);
  }
}

window.addEventListener("load", loadApp);
