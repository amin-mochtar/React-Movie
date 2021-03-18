/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";
import NavLink from "./NavLink";

const NavbarMenu = () => {
  const { hiddenMenu } = useContext(MovieContext);

  return (
    <div css={styles} className={(hiddenMenu ? "hidden" : "") + " NavbarMenu"}>
      <NavLink btnText="All Movies" />
      <NavLink btnText="Series" />
      <NavLink btnText="WatchList" />
      <NavLink btnText="Favorite" />
    </div>
  );
};

const styles = css`
  padding-left: 100px;
  @media (max-width: 860px) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    padding-left: 0;
    padding: 40px 50px;
    width: 70%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 800ms ease-in-out;
    z-index: 100;
    &.hidden {
      left: -600px;
      opacity: 0;
    }
  }
`;

export default NavbarMenu;
