export function createWelcomeView(viewProp) {
  const root = document.createElement("div");
  root.className = "welcome";
  root.innerHTML = `
	  <section class="welcome-section">
		 <div class="container">
			<div class="welcome-card">
			
			  <div class="welcome-card left-card">
				 <div class="left-card__content">
					<h2 class="left-card__title">MoodWise</h2>
					<p class="left-card__creator-name">By Yana Seniuk</p>
					<button id="start-btn">Let's try</button>
					<p class="left-card__slogan">Your mood matters!</p>
				 </div>
			  </div>
			  
			  <div class="welcome-card right-card">
				 <div class="right-card__content">
					<h2 class="right-card__title">MoodWise</h2>
					<p class="right-card__desc">
					  Feeling off? MoodWise gives you friendly tips, kind words, and cozy ideas—
					  like a warm drink or meal—to help you feel a little better.
					</p>
				 </div>
			  </div>
 
			</div>
		 </div>
	  </section>

	  
	`;
  return root;
}
