import { createFortuneView } from "../views/fortuneView.js";
import { createFortuneCard } from "../views/tarotCardView.js";
import { fetchData } from "../utils/fetchData.js";
import { TARO_BASE_URL } from "../contants.js";
import { createLoaderView } from "../views/loaderView.js";

export function fortunePage() {
  const root = createFortuneView();
  const cardWrapper = root.querySelector("#card-wrapper");

  /* root elements */
  const singleCardButton = root.querySelector("#single-card");
  singleCardButton.addEventListener(
    "click",
    async () => await renderCard(cardWrapper)
  );

  const threeCardsButton = root.querySelector("#three-cards");

  const appearSearchButton = root.querySelector("#apper-search");

  return root;
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
    console.error(error.message);
  } finally {
    loader.style.display = "none";
  }
}

function clearCardWrapper() {
  const wrapper = document.getElementById("card-wrapper");
  wrapper.innerHTML = "";
}
