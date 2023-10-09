import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { requests } from "../utils/data";

const Bannar = () => {
  const [movie, setMovie] = useState({});
  console.log(movie);
  const onSuccess = (data) => {
    setMovie(
      data.data.results[
        Math.floor(Math.random() * data.data.results.length - 1)
      ]
    );
  };

  useFetch(requests[0].URL, onSuccess);
  return (
    <section
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
      className="h-[535px] object-contain text-gray-100 flex flex-col justify-end"
    >
      <div className="w-1/2 flex flex-col gap-4 pl-10">
        <h1 className="text-5xl font-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="flex gap-2">
          <button className="bg-[rgba(51,51,51,0.5)] text-white px-6 py-[2px] rounded-sm hover:text-black hover:bg-[#e6e6e6] duration-100">
            Play
          </button>
          <button className="bg-[rgba(51,51,51,0.5)] text-white px-6 py-[2px] rounded-sm hover:text-black hover:bg-[#e6e6e6] duration-100">
            My List
          </button>
        </div>
        <h2>{movie?.overview?.slice(0, 150)}</h2>
      </div>
      <div className="bg-gradient-to-t from-[#111] from-25% p-8 " />
    </section>
  );
};

export default Bannar;
