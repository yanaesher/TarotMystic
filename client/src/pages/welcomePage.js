import { createWelcomeView } from "../views/welcomeView.js";
import { createModalView } from "../views/modalView.js";
import { data } from "../data.js";
import { loadPage } from "../utils/loadPage.js";

export function welcomePage() {
  const root = createWelcomeView();
  const modalElement = createModalView();

  root.append(modalElement);

  /* root elements */
  const startButton = root.querySelector("#start-btn");
  startButton.addEventListener("click", onShowModal);

  /* Modal elements */
  const closeBtn = modalElement.querySelector("#close-modal");
  closeBtn.addEventListener("click", onHideModal);

  const formElement = modalElement.querySelector("#modal-form");
  formElement.addEventListener("submit", formHandler);
  return root;
}

function onShowModal() {
  const modalElement = document.getElementById("popup-overlay");

  if (modalElement.hidden === false) return;

  modalElement.hidden = false;
}

function onHideModal() {
  const modalElement = document.getElementById("popup-overlay");
  modalElement.hidden = true;
}

async function formHandler(event) {
  event.preventDefault();
  updateUserData();
  //   try {
  //     await isKeysValid();
  //     loadPage(userPromptPage);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
}

function getUserData() {
  const userName = document.getElementById("user-name").value.trim();
  const deepSeekKey = document.getElementById("api-key-deep").value.trim();
  if (userName.length === 0 || deepSeekKey.length === 0) {
    alert("Please, fill out all fields");
    return;
  }
  return { userName, deepSeekKey };
}

function updateUserData() {
  const { userName, deepSeekKey } = getUserData();
  data.userName = userName;
  data.apiKeys.deepSeek = deepSeekKey;
}
