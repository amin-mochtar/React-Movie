/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import Container from "../Container/Container";
import Movies from "../Movies/Movies";
import MoviesPagination from "../Movies/MoviesPagination";
import Popular from "../Popular/Popular";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/footer.js"
import Detail from "../Moviedetail/DetailMovie"
import Series from "../Series/series"

const Card = () => {
  const { activeLink } = useContext(MovieContext);

  return (
    <div css={styles} className="card">
      {activeLink === "All Movies" && (
        <Container>
          <React.Fragment>
            <Carousel />
            <Movies />
            <MoviesPagination />
            <Footer />
          </React.Fragment>
        </Container>
      )}
      {activeLink === "Popular" && (
        <Container>
          <Carousel />
          <Popular />
          <Footer />
        </Container>
      )}
      {activeLink === "DetailMovie" && (
        <Container>
          <Detail />
          <Footer />
        </Container>
      )}

      {activeLink === "Series" && (
        <Container>
          {/* <Carousel /> */}
          <Series />
          <Footer />
        </Container>
      )}
    </div>
  );
};

const styles = css`
  width: 100%;
  min-height: calc(100vh - 80px);
  
  display: flex;
  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 1365px) {
    > .container {
      max-width: 90%;
    }
  }
`;

export default Card;
