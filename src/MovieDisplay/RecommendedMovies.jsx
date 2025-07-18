import { useState } from "react";
import { MovieList } from "../libs/constants";
import { MovieListContainer } from "./Styled";

export default function RecommendedMovies({ onClick }) {
  const [selected, setSelected] = useState(MovieList[0].title);

  const handleClick = (title, m) => {
    onClick(m)
    setSelected(title);
  };
  const renderedList = MovieList.map((m, index) => {
    const isSelectedMove = selected === m.title;
    return (
      <MovieListContainer $isSelected={isSelectedMove} bgImage={m.image} key={index}
        onClick={() => {
          handleClick(m.title, m);
        }}>

        <div className="selected-marker" />
      </MovieListContainer>
    );
  });

  return renderedList;
}
