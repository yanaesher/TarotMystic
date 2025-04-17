import { createWelcomeView } from "../views/welcomeView.js";
import { createModalView } from "../views/modalView.js";

export function welcomePage() {
  const root = createWelcomeView();
  const modalElement = createModalView();
  const startButton = root.querySelector("#start-btn");
  return root;
}
