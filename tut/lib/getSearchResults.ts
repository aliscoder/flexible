export default async function getSearchResults(searchTerm: string) {
  const res = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + searchTerm);

  if (!res.ok) return undefined;

  const data: Result = await res.json();

  return data;
}
