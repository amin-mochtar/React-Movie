import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {

  const [hiddenMenu, setHiddenMenu] = useState(true);

  const [activeLink, setActiveLink] = useState("Popular");

  const [showPagination, setShowPagination] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);

  const [series, setSeries] = useState([]);

  const [detailMovie, setDetailMovie] = useState()

  const [nowPlaying, setNowPlaying] = useState([])

  const [search, setSearch] = useState("");
 
  const [currentPage, setCurrentPage] = useState(1);

  const [popularMovies, setPopularMovies] = useState([]);

  const API_KEY = "9d4fbae6d45a1f406cc115a66a4de03d";

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${currentPage}`
    );
    const data = await response.json();
    if (search.trim() === "") {
      setMovies(data);
    }
  };

  const getSeries = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${currentPage}`
    );
    const data = await response.json();
    if (search.trim() === "") {
      setSeries(data);
    }
  };

  const getNowPlaying = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`
    );
    const data = await response.json();
      setNowPlaying(data.results);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=${currentPage}`
    );
    const searchData = await searchResponse.json();
    setMovies(searchData);
    setShowPagination(false);
  };

  const newPage = (direction) => {
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
      setIsLoading(true);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPopularMovies = async () => {
    const popularMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`
    );
    const popularMoviesData = await popularMoviesResponse.json();
    setPopularMovies(popularMoviesData);
  };

  useEffect(() => {
    getPopularMovies();
    getNowPlaying();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setShowPagination(true);
    }
    getMovies();
    getSeries()
  }, [search, currentPage]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(loadingTimeout);
  }, [movies, currentPage]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        search,
        setSearch,
        activeLink,
        setActiveLink,
        handleSearch,
        currentPage,
        setCurrentPage,
        newPage,
        showPagination,
        setShowPagination,
        isLoading,
        setIsLoading,
        popularMovies,
        setPopularMovies,
        nowPlaying,
        setNowPlaying,
        hiddenMenu,
        setHiddenMenu,
        detailMovie,
        setDetailMovie,
        series,
        setSeries,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
