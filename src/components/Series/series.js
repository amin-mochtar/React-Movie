/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext, useEffect} from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../Container/Container";
import Loader from "../Container/Loader";

const Series = () => {
  const { series, isLoading, setActiveLink, setDetailMovie } = useContext(MovieContext);

  const getDetailTv = async (idMovie) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${idMovie}?api_key=0860eabec499e84cd0cbf33069762725`
      );
      const data = await response.json();
      console.log(data, "inidata")
      setDetailMovie(data);
  };
  
  useEffect(() => {
    getDetailTv()
  }, []);

  return (
    <div css={styles} className="movies">
      <Container>
        {series.results && series.results.length === 0 && (
          <h1 className="error">404 <p>Result not found</p></h1>
        )}
        {!isLoading ? (
          series.results &&
          series.results.map((movieItem, index) => (
            <img
              onClick={() => {
                setActiveLink("DetailMovie");
                getDetailTv(movieItem.id)
              }}
              key={index}
              src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
              alt="poster"
            />
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-of-type(1) {
      height: 68vh;
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
        margin: 200px 0 0 280px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
      &:nth-of-type(1) {
        .error {
          font-size: 30px;
          margin: 200px 0 0 40px;
        }
      }
      img {
        max-width: 100%;
        height: 500px;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 854px) {
    .container {
      &:nth-of-type(1) {
        .error {
          font-size: 38px;
          margin: 200px 0 0 180px;
        }
      }
      img {
        max-width: 48%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1144px) {
    .container {
      &:nth-of-type(1) {
        .error {
          font-size: 40px;
          margin: 200px 0 0 330px;
        }
      }
      img {
        max-width: 31%;
      }
    }
  }
  @media (min-width: 1145px) and (max-width: 1365px) {
    .container {
      &:nth-of-type(1) {
        .error {
          font-size: 45px;
          margin: 200px 0 0 400px;
        }
      }
      img {
        max-width: 23.4%;
      }
    }
  }
`;

export default Series;
