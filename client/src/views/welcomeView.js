export function createWelcomeView() {
  const root = document.createElement("div");
  root.className = "welcome";
  root.innerHTML = String.raw`
 <section class="welcome__section">
		 <div class="container">
			<div class="welcome-card">
			
			  <div class="welcome-card__side left-card">
				 <div class="left-card__content">
					<div class="left-card__header">
					  <h2 class="left-card__title">TarotMystic</h2>
					  <p class="left-card__creator-name">By Yana Seniuk</p>
					</div>
 
					<div class="call-to-action">
					  <button id="start-btn">Let’s try</button>
					  <p class="left-card__slogan">Find your prediction now!</p>
					</div>
				 </div>
			  </div>
			  
			  <div class="welcome-card__side right-card">
				 <div class="right-card__content">
					<h2 class="right-card__title"><strong>Welcome</strong></h2>
					<p class="right-card__desc">
					  Want to glimpse your future? TarotMystic reveals what's ahead with a simple tarot reading, guiding you with insights from the cards
					</p>
				 </div>
			  </div>
 
			</div>
		 </div>
	  </section>
	`;
  return root;
}
