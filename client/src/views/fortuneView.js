import { data } from "../data.js";

export function createFortuneView() {
  const root = document.createElement("main");
  root.className = "fortune";
  root.innerHTML = String.raw`
	<div class="container">
	  <div class="tarot-intro">
		 <p class="greeting">Greetings, <span class="user-name">${data.userName}</span>, Seeker of Truth!</p>
		 <p class="question">What is your heart looking for today? Think about what you want to ask before choosing a Tarot spread.</p>
		 <p class="choice-title">Choose your path:</p>
 
		 <ul class="choices">
			<li><button id="single-card-btn">A single card to guide you🔮</button></li>
			<li><button id="three-cards-btn">The mystery of three cards✨</button></li>
			<li>
			  <form id="search-form">
				 <input type="text" id="search-input" placeholder="Search by keyword...">
				 <button type="submit" id="search-btn"><img src="./public/icons8-search.svg" alt="icon"></button>
			  </form>
			</li>
		 </ul>
	  </div>
	  <div id="card-wrapper"></div>
	</div>
	`;

  return root;
}
