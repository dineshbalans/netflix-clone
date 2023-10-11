import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { requests } from "../utils/data";

const Bannar = () => {
  const [movie, setMovie] = useState({});
  const [descBtn, setDescBtn] = useState(movie?.overview?.length > 150);
  console.log(descBtn);
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
        "--image-bp-url": `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        "--image-pp-url": `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
        // backgroundSize: "cover",
        // backgroundPosition: "center center",
        // backgroundRepeat : "no-repeat",
        // backgroundSize: "100%",
        // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
      className={`h-[450px] sm:h-[500px] sml:h-[535px] bg-[image:var(--image-pp-url)] md:bg-[image:var(--image-bp-url)] bg-cover bg-center sml:bg-top object-cover object-top text-gray-100 flex flex-col justify-end`}
    >
      <div className="sml:w-1/2 flex flex-col gap-4 pl-5 sml:pl-10">
        <h1 className="text-[24px] mdl:text-2xl lg:text-3xl lgl:text-5xl font-bold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="flex gap-2">
          <button className="bg-[rgba(56,54,54,0.5)] text-white px-3 mdl:px-4 lg:px-5 lgl:px-6 py-[2px] rounded-sm hover:text-black hover:bg-[#e6e6e6] duration-100">
            Play
          </button>
          <button className="bg-[rgba(51,51,51,0.5)] text-white px-3 mdl:px-4 lg:px-5 lgl:px-6 py-[2px] rounded-sm hover:text-black hover:bg-[#e6e6e6] duration-100">
            My List
          </button>
        </div>
        <h2 className="hidden md:block">
          <span>
            {descBtn ? movie?.overview : movie?.overview?.slice(0, 150)}
          </span>
          {movie?.overview?.length > 150 && (
            <button
              className="ml-2 text-blue-400"
              onClick={() => setDescBtn((prevState) => !prevState)}
            >
              {descBtn ? "read less" : "read more"}
            </button>
          )}
        </h2>
      </div>
      <div className="bg-gradient-to-t from-[#111] from-25% p-8 " />
    </section>
  );
};

export default Bannar;
