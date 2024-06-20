export const getGifs = async (category) => {
  const urlBase = "https://api.giphy.com/v1/gifs/search";
  const apiKey = "dFYCb3EpDlMbKDCB73rlO4KJuw9uAqct";
  const resp = await fetch(
    `${urlBase}?api_key=${apiKey}&q=${category}&limit=10`
  );
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
