export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wNE80EeiY9Q9EDi3EHolnDBQ2KNrosBf&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    return gifs;
  };
  