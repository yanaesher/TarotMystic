export async function fetchData(url, option = {}) {
  const response = await fetch(url, option);
  if (!response.ok) throw new Error("Failed to fetch data from the server");
  return response.json();
}
