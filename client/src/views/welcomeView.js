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
					  <h2 class="left-card__title">MoodWise</h2>
					  <p class="left-card__creator-name">By Yana Seniuk</p>
					</div>
 
					<div class="call-to-action">
					  <button id="start-btn">Let’s try</button>
					  <p class="left-card__slogan">Your mood matters!</p>
					</div>
				 </div>
			  </div>
			  
			  <div class="welcome-card__side right-card">
				 <div class="right-card__content">
					<h2 class="right-card__title">
  <span class="icon-wrap">
    <img src="/client/public/mood-check.svg" alt="MoodWise Icon" />
  </span>
  <strong>Welcome</strong>
</h2>
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
