import { data } from "../data.js";

export function createFortuneView() {
  const root = document.createElement("main");
  root.className = "fortune";
  root.innerHTML = String.raw`
  <div class="container">
  <div class="tarot-intro">
  <p class="greeting">Greetings, <span class="user-name">${data.userName}</span>, Seeker of Truth. 🌙</p>
<p class="question">What is it your heart is looking for today? </p>
<p class="choice-title">Choose your path:</p>

<ul class="choices">
    <li><button id="single-card">🔮 A single card to guide you</button></li>
    <li><button id="three-cards">✨ The mystery of three cards</button></li>
	 <li><button id="apper-search">🔍 Search by Keyword</button></li>
  </ul>

  <div id="searchContainer" hidden>
  <input type="text" id="search" placeholder="Search by keyword..." />
  <button id="executeSearch">🔍 Execute Search</button>
</div>

  </div>
  <div id="card-wrapper">
  
  </div>
  </div>
  `;
  return root;
}
