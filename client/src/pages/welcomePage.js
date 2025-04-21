import { createWelcomeView } from "../views/welcomeView.js";
import { createModalView } from "../views/modalView.js";
import { fortunePage } from "../pages/fortunePage.js";
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

function formHandler(event) {
  event.preventDefault();
  const isUserNameValid = getUserName();
  if (isUserNameValid) {
    loadPage(fortunePage);
  }
}

function getUserName() {
  const userName = document.getElementById("user-name");
  if (userName.value.trim().length === 0) {
    showError();
    return null;
  }
  data.userName = userName.value;
  localStorage.setItem("userName", userName.value);
  return userName.value;
}

function showError() {
  const error = document.getElementById("error-message");
  error.style.display = "block";
}
