export function loadPage(pageFunc) {
  const appRoot = document.getElementById("app-root");
  appRoot.innerHTML = ``;
  const page = pageFunc();
  appRoot.append(page);
}
