import { requestsPath } from "./request";

export const requests = [
  {
    id: "req_1",
    title: "NETFLIX ORIGINALS",
    URL: requestsPath.fetchNetflixOriginals,
  },
  {
    id: "req_2",
    title: "Trending Now",
    URL: requestsPath.fetchTrending,
  },
  {
    id: "req_3",
    title: "Top Rated",
    URL: requestsPath.fetchTopRated,
  },
  {
    id: "req_4",
    title: "Action Movies",
    URL: requestsPath.fetchActionMovies,
  },
  {
    id: "req_5",
    title: "Comedy Movies",
    URL: requestsPath.fetchComedyMovies,
  },
  {
    id: "req_6",
    title: "Horror Movies",
    URL: requestsPath.fetchHorrorMovies,
  },
  {
    id: "req_7",
    title: "Romance Movies",
    URL: requestsPath.fetchRomanceMovies,
  },
  {
    id: "req_8",
    title: "Documentaries",
    URL: requestsPath.fetchDocumentaries,
  },
];
