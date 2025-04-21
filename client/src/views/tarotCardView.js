export function createFortuneCard(data) {
  const cardElement = document.createElement("div");
  cardElement.className = "taro-card";

  cardElement.innerHTML = `
	  <div ="card-visual">
		 <img class="tarot-card-img" src="./public/tarocards/${data.name_short}.jpeg" alt="${data.name}" />
		 <div class="card-info">
		 <h3>${data.name}</h3>
		 <p class="card-meaning"><strong>Meaning:</strong> ${data.meaning_up}</p>
	  </div>
	  </div>
	`;

  cardElement.addEventListener("click", () => {
    const info = cardElement.querySelector(".card-info");
    info.classList.toggle("visible");
  });

  return cardElement;
}
