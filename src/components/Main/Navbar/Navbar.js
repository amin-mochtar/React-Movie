/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";
import Container from "../../Container/Container";
import NavbarLogo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";

const HeroNav = () => {
  const { hiddenMenu, setHiddenMenu } = useContext(MovieContext);

  return (
    <nav css={styles}>
      <Container>
        <div className="wrapper">
          <NavbarLogo />
          <NavbarMenu />
        </div>
        <NavbarSearch />
        <i
          onClick={() => setHiddenMenu(!hiddenMenu)}
          id="burgerMenu"
          className={hiddenMenu ? "fas fa-bars" : "fas fa-times"}
        ></i>
      </Container>
    </nav>
  );
};

const styles = css`
  position: relative;
  width: 100%;
  min-height: 70px;
  padding: 15px 0;
  background: #212229;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
    }
    #burgerMenu {
      color: #f9a5ff;
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 860px) {
    .container {
      #burgerMenu {
        display: block;
      }
    }
  }
  @media (max-width: 1365px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default HeroNav;
