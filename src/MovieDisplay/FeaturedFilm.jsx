/* eslint-disable react/prop-types */
import { Textfit } from 'react-textfit';
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import RecommendedMovies from "./RecommendedMovies";
import "./FeaturedFilm.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { FormControl, OutlinedInput, FormHelperText } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function FeaturedFilm({ currentMovie, onClick }) {
  const { title, subtitle, releasedate, genres, image } = currentMovie;

  return (
    <div className="feature-container">
      <div className="header-bar">
        <div className="search-container">
          <FormControl
            className="search-bar"
            variant="standard"
            sx={{
              marginBottom: "10px",
              "& .MuiOutlinedInput-root": {
                color: "#cacaca",
                fontFamily: "Arial",
                fontWeight: "bold",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#707070",
                  borderWidth: "0px",
                },
              },
            }}
          >
            <OutlinedInput
              variant="standard"
              sx={{
                width: "100%",
              }}
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    justifySelf: "flex-end",
                    justifyContent: "flex-end",
                    transform: "translateX(10px)",
                  }}
                  position="end"
                >
                  <div className="search-bar-icon">
                    <TuneRoundedIcon
                      style={{
                        color: "rgba( 200, 200 , 200, .8",
                      }}
                    />
                  </div>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "flex-end",
                  }}
                  position="start"
                >
                  <SearchRoundedIcon
                    style={{ color: "rgba( 200, 200 , 200, .8" }}
                  />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </div>

        <div className="feature-info">
          <div>{releasedate}</div>
          <div>{genres}</div>
        </div>
      </div>
      <div className="movie-showcase">
        <div
          className="movie-title">
          <Textfit mode="multi" max={100} min={40} >
            {title.toUpperCase()}
          </Textfit>
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
          >Trailer</button>
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
    </div >
  );
}
