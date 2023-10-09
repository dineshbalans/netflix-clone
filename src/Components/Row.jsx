import React, { useEffect, useState } from "react";
import instance from "../utils/axios";
import { useQuery } from "react-query";
import useFetch from "../hooks/useFetch";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const onSuccess = (data) => {
    setMovies(data.data.results);
  };

  const  data  = useFetch(fetchURL,onSuccess);
 

  return (
    <section className="">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="container mx-auto flex gap-2 overflow-y-hidden overflow-x-scroll px-2 py-4 scrollbar-hide">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            src={`${BASE_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`${
              isLargeRow ? "h-[250px]" : "h-[125px]"
            } w-[100%] object-contain rounded-sm hover:scale-120 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] duration-300 cursor-pointer`}
          />
        ))}
      </div>
    </section>
  );
};

export default Row;

//   useEffect(() => {
//     const fetchMoviesData = async () => {
//       const response = await instance.get(fetchURL);
//       setMovies(response.data.results);
//     };
//     fetchMoviesData();
//   }, []);
