import { createWelcomeView } from "../views/welcomeView.js";
import { createModalView } from "../views/modalView.js";

export function welcomePage() {
  const root = createWelcomeView();
  const modalElement = createModalView();

  root.append(modalElement);

  /* root elements */
  const startButton = root.querySelector("#start-btn");
  startButton.addEventListener("click", onShowModal);

  /* Modal elements */
  const closeBtn = modalElement.querySelector("#close-modal");

  if (closeBtn) {
    closeBtn.addEventListener("click", onHideModal);
  }

  return root;
}

function onShowModal() {
  const modalElement = document.getElementById("modal");

  if (modalElement.hidden === false) return;

  modalElement.hidden = false;
  document.body.classList.add("overlay");
}

function onHideModal() {
  const modalElement = document.getElementById("modal");

  if (!modalElement) return;

  modalElement.hidden = true;
}
