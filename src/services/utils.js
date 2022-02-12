export const gifInfo = (gifs) => {
  const data = gifs.data.data.map((gif) => {
    return {
      id: gif.id,
      img: gif.images.downsized_medium.url,
    };
  });
  console.log(data);
  return data;
};
