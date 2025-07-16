import { useState } from "react";
import { MovieList } from "./MovieDataBase";
import "./RecommendedMovies.css";

export default function RecommendedMovies({ onClick }) {
  const [selected, setSelected] = useState(MovieList[0].title);

  const handleClick = (title) => {

    setSelected(title);
  };
  const renderedList = MovieList.map((m, index) => {
    const isSelectedMove = selected === m.title;
    return (
      <div className="movielist-container" key={index}>
        <div
          onClick={() => {
            onClick([m]);
            handleClick(m.title);
          }}
          className="recommended-movie-icon"
          style={{

            backgroundImage: `url(${m.image})`,
            opacity: isSelectedMove ? "1" : ".5",
            backgroundSize: "cover",
            backgroundPosition: "-28px",
          }}
        ></div>
        <div
          className="selected-marker"
          style={{
            opacity: isSelectedMove ? "100%" : "0%",
          }}
        ></div>
      </div>
    );
  });

  return renderedList;
}
