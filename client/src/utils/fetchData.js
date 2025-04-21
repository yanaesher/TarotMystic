export async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error("Failed to fetch data from the server. Try again");
  return response.json();
}
