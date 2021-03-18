/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Navbar from "./Navbar/Navbar";
import Card from "../Card/Card";
// import Footer from "../Footer/footer";
import Title from "../TitleTop/Title";

const MainContainer = () => {
  return (
    <section css={styles} className="main">
      <Title />
      <Navbar />
      <Card />
      {/* <Footer /> */}
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: #1b1c22;
`;

export default MainContainer;
