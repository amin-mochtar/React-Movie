import React, {useContext} from 'react';
import { MovieContext } from "../../Context/MovieContext";
import CarouselTop from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import NavLink from "../Main/Navbar/NavLink";
import NavSearch from "../Main/Navbar/NavbarSearch";


const Carousel = () => {
    const { nowPlaying, activeLink } = useContext(MovieContext);
    // console.log(nowPlaying, "nowwww")
    const dataCarousel = nowPlaying.slice(0, 5).map((item, index) => {
        return (
          <div style={{ height: 500, width: "100%" }} key={index}>
            <div className="carousel-center">
              <img style={{ height: 600 }} src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
            </div>
            <div className="carousel-center">
              
            </div>
            <div
              className="carousel-caption"
              style={{ textAlign: "center", fontSize: 35 }}
            >
              {item.title}
            </div>
          </div>
        );
      });
    return (
        <div>
            <div className="row mt-2">
                <div className="col">
                    <CarouselTop
                        autoplay={true}
                        pauseOnVisibility={false}
                        slidesshowSpeed={2000}
                        version={4}
                        indicators={true}
                    >
                        {dataCarousel}
                    </CarouselTop>
                </div>
            </div>
            <hr className="mt-5" style={{ borderTop: "1px solid #5a606b", padding: "5px"}}></hr>
            <div className="col" style={{display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>
            {activeLink && activeLink === "All Movies" && (
                  <h4 style={{ color: "#5a606b", fontWeight: "bolder" }}>All Movies</h4>
            )}
            {activeLink && activeLink === "Popular" && (
                  <h4 style={{ color: "#5a606b", fontWeight: "bolder" }}>Popular Movies</h4>
            )}
              <NavSearch />
              <div className="btn-info" style={{ color: "white", fontWeight: "bolder", padding: "5px", borderRadius:"6px"}} ><NavLink btnText={activeLink === "All Movies" ? 'Popular' : 'All Movies'} /> </div>
            </div>
        </div>
    );
}

export default Carousel;
