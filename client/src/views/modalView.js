export function createModalView() {
  const modalElement = document.createElement("div");
  modalElement.id = "modal";
  modalElement.className = "modal";
  modalElement.hidden = true;
  modalElement.innerHTML = String.raw`
  <div class="modal__content">
  <span id="close-modal" class="close-btn">&times;</span>
  <h2>Please, enter your name and API keys to continue</h2>
<form id="modal-form">
<label>Name</label>
<input type="text" id="user-name" placeholder="Your name">
<label>API keys</label>
<input type="password" id="api-key-deep" required>
<input type="password" id="api-key-pexels" required>
<button type="submit" id="submit-btn">Send</button>
 <p id="error-message" style="color: red; display: none;"></p>
</form>
 </div>
  `;
  return modalElement;
}
