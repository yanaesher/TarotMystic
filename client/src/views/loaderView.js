export function createLoaderView() {
  const loaderElement = document.createElement("div");
  loaderElement.id = "loader";
  loaderElement.style.display = "none";
  return loaderElement;
}
