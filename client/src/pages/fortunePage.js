import { createFortuneView } from "../views/fortuneView.js";
import { createFortuneCard } from "../views/tarotCardView.js";
import { fetchData } from "../utils/fetchData.js";
import { TARO_BASE_URL } from "../constants.js";
import { createLoaderView } from "../views/loaderView.js";
import { createErrorView } from "../views/errorView.js";

export function fortunePage() {
  const root = createFortuneView();

  const loader = createLoaderView();
  root.append(loader);

  /* button elements */
  const singleCardButton = root.querySelector("#single-card-btn");
  singleCardButton.addEventListener("click", onShowCard);

  const threeCardsButton = root.querySelector("#three-cards-btn");
  threeCardsButton.addEventListener("click", onShowThreeCards);

  const appearSearchButton = root.querySelector("#appear-search-btn");

  return root;
}

/*card helper functions*/
function clearCardWrapper() {
  const wrapper = document.getElementById("card-wrapper");
  wrapper.innerHTML = "";
}

function showError(errorMessage) {
  const root = document.getElementById("fortune");

  const errorElement = createErrorView(errorMessage);
  root.append(errorElement);
}

async function renderAndShowCards(container, count = 1) {
  const loader = document.getElementById("loader");
  try {
    clearCardWrapper();

    loader.style.display = "block";

    const data = await fetchData(`${TARO_BASE_URL}/cards/random?n=${count}`);

    data.cards.forEach((cardData) => {
      const cardElement = createFortuneCard(cardData);
      container.append(cardElement);
    });
  } catch (error) {
    showError(error.message);
  } finally {
    loader.style.display = "none";
  }
}

function onShowCard() {
  const cardWrapper = document.getElementById("card-wrapper");
  return renderAndShowCards(cardWrapper, 1);
}

function onShowThreeCards() {
  const cardWrapper = document.getElementById("card-wrapper");
  return renderAndShowCards(cardWrapper, 3);
}
