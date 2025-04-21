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

  /* choices elements */
  const singleCardButton = root.querySelector("#single-card-btn");
  singleCardButton.addEventListener("click", onShowRandomCard);

  const threeCardsButton = root.querySelector("#three-cards-btn");
  threeCardsButton.addEventListener("click", onShowThreeRandomCards);

  const searchForm = root.querySelector("#search-form");
  searchForm.addEventListener("submit", onSearchSubmit);

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

async function renderCardsByUrl(container, url) {
  const loader = document.getElementById("loader");
  try {
    clearCardWrapper();
    loader.style.display = "block";

    const data = await fetchData(url);
    const cards = data.cards;

    if (!cards.length) {
      showError("No cards found.");
      return;
    }

    cards.forEach((cardData) => {
      const cardElement = createFortuneCard(cardData);
      container.append(cardElement);
    });
  } catch (error) {
    showError(error.message);
  } finally {
    loader.style.display = "none";
  }
}

/*CHOICES func*/

async function renderRandomCardsWithCount(container, count) {
  const url = `${TARO_BASE_URL}/cards/random?n=${count}`;
  await renderCardsByUrl(container, url);
}

function onShowRandomCard() {
  const cardWrapper = document.getElementById("card-wrapper");
  renderRandomCardsWithCount(cardWrapper, 1);
}

function onShowThreeRandomCards() {
  const cardWrapper = document.getElementById("card-wrapper");
  renderRandomCardsWithCount(cardWrapper, 3);
}

function onSearchSubmit(event) {
  event.preventDefault();

  const keyword = document.getElementById("search-input").value.trim();
  const CardWrapper = document.getElementById("card-wrapper");

  if (!keyword) {
    showError("Please enter a search keyword");
    return;
  }

  const url = `${TARO_BASE_URL}/cards/search?q=${keyword}`;

  renderCardsByUrl(CardWrapper, url);
}
