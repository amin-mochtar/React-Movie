/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../Container/Container";

const PopularMovies = () => {
  const { popularMovies, setActiveLink, setDetailMovie } = useContext(MovieContext);

  const getDetailMovie = async (idMovie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=0860eabec499e84cd0cbf33069762725`
    );
    const data = await response.json();
    console.log(data, "inidata")
    setDetailMovie(data);
  };

  useEffect(() => {
    getDetailMovie()
  }, []);

  return (
    <div css={styles} className="popularMovies">
      <Container>
        {popularMovies.results &&
          popularMovies.results.map((popularMovieItem, index) => (
            <img
              onClick={() => {
                setActiveLink("DetailMovie");
                getDetailMovie(popularMovieItem.id)
              }}
              key={index}
              src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`}
              alt="poster"
            />
          ))}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-of-type(1) {
      height: 81vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
      .error {
        font-size: 38px;
        color: red;
        height: 32px;
      }
    }
    img {
      width: 100%;
      max-width: 240px;
      height: 360px;
      margin: 10px 0;
      border: 1px solid black;
      cursor: pointer;
    }
  }
  @media (max-width: 600px) {
    .container {
      img {
        max-width: 100%;
        height: 500px;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 854px) {
    .container {
      img {
        max-width: 48%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1144px) {
    .container {
      img {
        max-width: 31%;
      }
    }
  }
  @media (min-width: 1145px) and (max-width: 1365px) {
    .container {
      img {
        max-width: 23.4%;
      }
    }
  }
`;

export default PopularMovies;
