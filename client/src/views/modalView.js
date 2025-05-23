export function createModalView() {
  const overlay = document.createElement("div");
  overlay.id = "popup-overlay";
  overlay.hidden = true;

  overlay.innerHTML = String.raw`
	  <div id="popup" class="modal__content">
		 <span id="close-modal" class="close-btn">&times;</span>
		 <h2>Please, enter your name to continue</h2>
		 <form id="modal-form">
			<label>Name</label>
			<input type="text" id="user-name" placeholder="Your name">
				<p id="error-message" style="color: red; display: none;">Please, fill out your name</p>
			<button type="submit" id="submit-btn">Send</button>
		 </form>
	  </div>
	`;

  return overlay;
}
