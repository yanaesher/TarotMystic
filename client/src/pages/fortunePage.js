import { createFortuneView } from "../views/fortuneView.js";
import { createFortuneCard } from "../views/tarotCardView.js";
import { fetchData } from "../utils/fetchData.js";
import { TARO_BASE_URL } from "../constants.js";
import { createLoaderView } from "../views/loaderView.js";
import { createErrorView } from "../views/errorView.js";

export function fortunePage() {
  const root = createFortuneView();

  const cardWrapper = root.querySelector("#card-wrapper");

  /* button elements */
  const singleCardButton = root.querySelector("#single-card");
  singleCardButton.addEventListener(
    "click",
    async () => await renderCard(cardWrapper)
  );

  const threeCardsButton = root.querySelector("#three-cards");

  const appearSearchButton = root.querySelector("#appear-search");

  return root;
}

function clearCardWrapper() {
  const wrapper = document.getElementById("card-wrapper");
  wrapper.innerHTML = "";
}

async function renderCard(container) {
  const loader = createLoaderView();
  try {
    clearCardWrapper();

    container.append(loader);
    loader.style.display = "block";

    const data = await fetchData(`${TARO_BASE_URL}/cards/random?n=1`);
    const card = createFortuneCard(data.cards[0]);

    container.append(card);
  } catch (error) {
    showError(error.message);
  } finally {
    loader.style.display = "none";
  }
}

function showError(errorMessage) {
  const root = document.getElementById("fortune");

  const errorElement = createErrorView(errorMessage);
  root.append(errorElement);
}
