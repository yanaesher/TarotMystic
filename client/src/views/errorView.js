export function createErrorView(error) {
  const errorElement = document.createElement("div");
  errorElement.id = "error-overlay";
  errorElement.hidden = false;

  errorElement.innerHTML = String.raw`
	  <div id="error-popup">
		 <p id="error-message">${error}</p>
		 <button id="close-error-popup">Ok</button>
	  </div>
	`;

  const errorBtn = errorElement.querySelector("#close-error-popup");
  errorBtn.addEventListener("click", () => {
    errorElement.remove();
  });

  return errorElement;
}
