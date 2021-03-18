/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Container from "../Container/Container";

const Navbar = () => {

  return (
    <nav css={styles}>
      <Container>
        <div className="wrapper">
          <h1>ReactMovies<span>.com</span></h1>
        </div>
        <p>THE WORLD LARGEST WEB MOVIES SITE</p>
      </Container>
    </nav>
  );
};

const styles = css`
  position: relative;
  width: 100%;
  padding: 10px 0;
  background: #ffff;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
      span {
          color: blueviolet;
          font-weight: bold;
      }
    }
    p {
        margin-bottom: 0px;
        padding-top: 18px;
        letter-spacing: 5px;
        font-size: 12px;
        font-weight: bold;
    }
  }
  @media (max-width: 770px) {
    .container {
        max-width: 100%;
        margin: 0px;
        .wrapper {
            margin: 0px;
            h1 {
                font-size: 16px;
                margin: 0px;
            }
            span {
                color: blueviolet;
                font-weight: bold;
            }
          }
          p {
              font-size: 8px;
              padding-top: 10px;
              letter-spacing: 0px;
          }
    }
  }
  @media (max-width: 1365px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default Navbar;
