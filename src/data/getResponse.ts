export async function getResponse(url: string, path: string, query: string) {
  // console.log('getting response for: ')
  // console.log(`http://${url}/${path}?${query}`)
  
  const res = await fetch(`http://${url}/${path}?${query}`);
  const resJson = await res.json();
  return resJson;
}