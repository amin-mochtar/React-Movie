/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { MovieContext } from "../../../Context/MovieContext";

const NavbarLogo = () => {
  const { setActiveLink } = useContext(MovieContext);
  return (
    <h2 css={styles} onClick={() => {
      setActiveLink("Popular");
    }}><i className="fa fa-home"></i></h2>
    
  )
}


const styles = css`
  font-size: 30px;
  color: #cb6ad2;
  font-weight: 900;
  user-select: none;
  cursor: pointer;
  margin: 0;
  @media (max-width: 600px) {
      font-size: 16px
      color: #6ac3d2;
  }
`;

export default NavbarLogo;
