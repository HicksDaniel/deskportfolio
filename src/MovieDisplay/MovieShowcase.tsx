import { useState, useEffect } from "react";
import { MovieList } from "./MovieDataBase";
import FeaturedFilm from "./FeaturedFilm";
import MovieSideNav from "./MovieSideNav";
import "./MovieShowcase.css";
import { useRef, Fragment } from "react";
import { TabletDisplay } from "./Styled";
import { useMaintainAspectRatio } from "../libs/hooks";

export default function MovieShowcase({ deskActive }) {
  const containerRef = useRef(null);
  const [currentMovie, setCurrentMovie] = useState(MovieList[0]);
  const { width, height } = useMaintainAspectRatio(containerRef, .625);


  const handleClick = (movie) => {
    setCurrentMovie(...movie);

  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "95%",
      height: "100%",
      maxWidth: "1920px",
      margin: "0 auto"
    }} ref={containerRef}>
      <TabletDisplay
        $isActive={deskActive}
        $displayWidth={`${width}px`}
        $displayHeight={`${height}px`}


      >

        <div
          className="background-container"
          style={{
            backgroundImage: ` url(${currentMovie.image})`,
          }}
        >
          <MovieSideNav />
          <FeaturedFilm
            currentMovie={currentMovie}
            onClick={(x) => handleClick(x)}
          />
        </div>
      </TabletDisplay>

    </div >
  );
}
