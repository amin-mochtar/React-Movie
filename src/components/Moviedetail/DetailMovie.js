/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../Container/Container";

const DetailMovie = () => {
  const { detailMovie } = useContext(MovieContext);

  return (
    <div css={styles} className="popularMovies">
      <Container>

          <img
            // key={index}
            src={`https://image.tmdb.org/t/p/w400/${detailMovie.poster_path}`}
            alt="poster"
          />

          <div className="content">
            <h1>{detailMovie.title}</h1>
            <p>{detailMovie.overview}</p>
            <h5>Rating: {detailMovie.vote_average}</h5>
          </div>
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

export default DetailMovie;
