/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";

const HeroNavLink = ({ btnText }) => {
  const { activeLink, setActiveLink, setHiddenMenu } = useContext(MovieContext);

  return (
    <button
      style={{ color: activeLink === btnText ? "#f9a5ff" : "#fff" }}
      css={styles}
      onClick={() => {
        setActiveLink(btnText);
        setHiddenMenu(true);
      }}
    >
      {btnText}
    </button>
  );
};

const styles = css`
  border: none;
  outline: none;
  background: transparent;
  font-size: 20px;
  margin-right: 20px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  @media (max-width: 680px) {
    font-size: 16px;
    padding: 10px;
    margin-right: 0;
  }
`;

export default HeroNavLink;
