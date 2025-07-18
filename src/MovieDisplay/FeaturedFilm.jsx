/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SearchBar from "../components/SearchBar";
import RecommendedMovies from "./RecommendedMovies";
import { FeaturedFilmContainer } from "./Styled";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function FeaturedFilm({ currentMovie, onClick }) {
  const { title, subtitle, releasedate, genres, image } = currentMovie;
  const [searchValue, setSearchValue] = useState("");

  return (
    <FeaturedFilmContainer>
      <div className="header-bar">

        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search movies…"
        />

        <div className="feature-info">
          <div>{releasedate}</div>
          <div>{genres}</div>
        </div>
      </div>

      <div className="movie-showcase">
        <div className="movie-title">

          {title.toUpperCase()}

        </div>
        <div className="movie-subtitle">{subtitle}</div>
        <div className="movie-buttons">
          <button
            style={{
              backgroundColor: "rgb(200,200,200)",
              color: "rgb(20,20,20)",
            }}
          >
            <PlayArrowRoundedIcon style={{ fontSize: "20px" }} /> Watch Now
          </button>
          <button
            style={{
              backgroundColor: "rgba(200,200,200, .3)",
              color: "rgb(200,200,200)",
              border: "1px solid rgba(200,200,200, .5)",
            }}
          >
            Trailer
          </button>
        </div>
      </div>

      <div className="footer-container">
        <div className="movie-choices-container">
          <RecommendedMovies onClick={onClick} />
        </div>
        <div className="add-favorites-container">
          <div className="add-favorites-buttons">
            <div className="button-style">
              <FavoriteRoundedIcon sx={{ fontSize: "inherit" }} />
            </div>
            <div className="button-style">
              <BookmarkBorderRoundedIcon sx={{ fontSize: "inherit" }} />
            </div>
            <div className="button-style">
              <AddRoundedIcon sx={{ fontSize: "inherit" }} />
            </div>
          </div>
        </div>
      </div>
    </FeaturedFilmContainer>
  );
}
