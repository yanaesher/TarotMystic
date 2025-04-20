export function createFortuneCard(data) {
  const cardElement = document.createElement("div");
  cardElement.className = "taro-card";

  cardElement.innerHTML = `
	  <div class="card-visual">
		 <img src="./public/tarocards/${data.name_short}.jpeg" alt="${data.name}" />
	  </div>
	  <div class="card-info hidden">
		 <h3>${data.name}</h3>
		 <p class="card-meaning"><strong>Meaning:</strong> ${data.meaning_up}</p>
	  </div>
	`;

  cardElement.addEventListener("click", () => {
    const visual = cardElement.querySelector(".card-visual");
    const info = cardElement.querySelector(".card-info");

    visual.classList.toggle("hidden");
    info.classList.toggle("hidden");
  });

  return cardElement;
}
