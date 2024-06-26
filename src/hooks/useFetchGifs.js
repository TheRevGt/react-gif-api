import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImg = async () => {
    const gif = await getGifs(category);
    setGifs(gif);
    setIsLoading(false);
  };
  useEffect(() => {
    getImg();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
