import React from "react";
import { useQuery } from "react-query";
import instance from "../utils/axios";

const useFetch = (fetchURL, onSuccess) => {
  const movieFetcher = async () => {
    return await instance.get(fetchURL);
  };

  const { data } = useQuery("fetchMoviesData", movieFetcher, {
    onSuccess,
    onError: (error) => {
      window.alert(error);
    },
  });
  return data;
};

export default useFetch;
