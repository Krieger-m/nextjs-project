export async function getResponse(url: string, path: string, query: string) {


  const res = await fetch(`${url}${path}${query}`);
  const resJson = await res.json();
  return resJson;
}