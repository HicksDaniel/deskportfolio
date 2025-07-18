import styled from "styled-components";

// ————————————————————————————
// CustomButton (unchanged)
// ————————————————————————————
export const CustomButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "$isSelected",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 90%;
  aspect-ratio: 1/1;
  border-radius: 50%;
    background-color: ${({ $isSelected }) =>
    $isSelected
      ? "rgba(207, 207, 207, 0.3)"
      : "rgba(207, 207, 207, 0.1)"};
`;

// ————————————————————————————
// TabletDisplay
// ————————————————————————————
export const TabletDisplay = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "$displayWidth" &&
    prop !== "$displayHeight" &&
    prop !== "$isActive",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3%;
  background-color: black;
  width: ${({ $displayWidth }) => $displayWidth};
  height: ${({ $displayHeight }) => $displayHeight};
  transition: box-shadow 3s ease-in-out;

  ${({ $isActive }) =>
    $isActive
      ? `
    box-shadow:
      -0.75px 0 0 1.5px #a0a0a0,
      8px 5px 15px 0 #000000,
      3px 0 0.5px #393939;
  `
      : `
    outline: 1px solid rgb(199, 199, 199);
    box-shadow:
      1px 3px 0 0 rgba(199, 199, 199, 1),
      0px 8px 1px -5px rgba(255, 255, 255, 1),
      10px 11px 1px 2px rgba(50, 50, 50, 1),
      14px 10px 0 0 rgba(50, 50, 50, 1),
      12px 13px 10px 5px rgba(0, 0, 0, 1),
      12px 11px 0 1px rgba(0, 0, 0, 1),
      15px 8px 0 1px rgba(50, 50, 50, 1),
      40px 15px 15px 2px rgba(15, 15, 15, 0.8);
  `}

  /* nested selector needs an & */
  & .background-container {
    display: flex;
    width: 96%;
    height: 95%;
    border-radius: 2%;
    background-size: cover;
    border: 1px solid rgba(22, 22, 22, 0.8);
  }
`;

// ————————————————————————————
// FeaturedFilmContainer
// ————————————————————————————
export const FeaturedFilmContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  border-radius: 2%;
  background-color: rgba(0, 0, 0, 0.1);

   & .feature-container {
    display: flex;
    flex-flow: column nowrap;
    width: 92%;
  }

  & .header-bar {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 25%;
  }

  & .search-container {
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    height: 60%;
    width: 50%;
  }

  & .search-bar {
    display: flex;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 50%;
    width: 100%;
  }

  & .search-bar-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 100%;
  }

  & .feature-info {
    display: flex;
    align-self: flex-start;
    text-transform: capitalize;
    align-items: center;
    padding: 0px 20px;
    height: 40%;
    justify-content: space-between;
    width: 35%;
  }

  & .movie-showcase {
    display: flex;
    flex-flow: column nowrap;
    height: 40%;
    width: 60%;
  }

  & .movie-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1;
    margin: 0px;
    padding: 0px;
    align-items: center;
    width: 100%;
    height: 100%;

  }

  & .movie-subtitle {
    display: flex;
    text-transform: capitalize;
    font-size: 100%;
    justify-content: flex-start;
    align-items: center;
    height: 25%;
  }

  & .movie-buttons {
    display: flex;
    align-items: center;
    height: 25%;
  }

  & .movie-buttons>button {
    display: flex;
    background-color: transparent;
    border: 1px solid white;
    justify-content: space-evenly;
    font-size: 10px;
    border-radius: 40px;
    margin-right: 10px;
    align-items: center;
    width: 30%;
    height: 80%;
  }

  & .footer-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 35%;
    width: 100%;
  }

  & .movie-choices-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 55%;
    width: 55%;
  }

  & .add-favorites-container {
    display: flex;
    transform: translateY(50px);
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 15%;
  }

  & .add-favorites-buttons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
    height: 100%;
  }

  & .button-style {
    display: flex;
    background-color: rgba(120, 120, 120, 0.7);
    border: 2px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    width: 20%;
    align-items: center;
    font-size: 20px;
    justify-content: center;
    border-radius: 50%;
  }
}
  `
  ;

// ————————————————————————————
// PhoneBody
// ————————————————————————————
export const PhoneBody = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "$displayWidth" &&
    prop !== "$displayHeight" &&
    prop !== "$isActive" &&
    prop !== "$deskActive",
})`
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  background-image: url('/mobilebackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  aspect-ratio: 9/18.5;
  border-radius: 25px;
  outline: 1px solid rgb(199, 199, 199);
  transition: box-shadow 3s ease-in-out, transform 0.5s ease-in-out;

  /* one-liner transforms */
  ${({ $isActive }) =>
    $isActive ? `transform: rotate(0deg);` : `transform: rotate(15deg);`}

  /* conditional shadows */
  ${({ $deskActive }) =>
    $deskActive
      ? `
    box-shadow:
      inset 0px -1px 0px 5px rgba(0, 0, 0, 1),
      -1px 1px 1px 1px #a0a0a0,
      5px 3px 5px 2px #000000,
      3px 4px 0px #545454ff;
  `
      : `
    box-shadow:
      inset 0px 0px 0px 5px rgba(0, 0, 0, 1),
      0px 1px 1px 1px rgba(255, 255, 255, 1),
      5px 2px 0px 5px rgba(50, 50, 50, 1),
      20px 10px 10px 10px rgba(15, 15, 15, 0.8);
  `}

  /* properly nest your inner elements */
  & .contents-layout {
    width: 100%;
    padding-top: 3rem;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 25px;
    scrollbar-width: none;
    pointer-events: auto;
    margin: 2% 0;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  & .black-bar {
    position: absolute;
    margin-top: 10%;
    width: 30%;
    height: 4%;
    border-radius: 50px;
    background-color: rgb(0, 0, 0);
    pointer-events: none;
  }

  & .black-border {
    position: absolute;
    box-shadow: inset 0px 0px 1px 4px black;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: transparent;
    pointer-events: none;
  }
`;

export const MovieListContainer = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "$isSelected" &&
    prop !== "bgImage",
})`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  width: 19%;
  height: 80%;
    opacity: ${({ $isSelected }) => $isSelected ? "1" : ".5"};
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: -10px;
    border-radius: 5px 15px 5px 15px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
  
  & .selected-marker {
  width:80%;
  height: 5px;
  border-radius: 10px;
  opacity: ${({ $isSelected }) => $isSelected ? "1" : "0"};
  background-color: #ffffff80;
}`
export const SideNavContainer = styled.div.withConfig({

})`  
    display: flex;
    margin-right: 20px;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 5%;
    height: 100%;
    border-right: 1.5px solid rgba(180, 180, 180, 0.3);
  }

& .side-nav-contents {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;
    height: 70%;
    width: 100%
  }
}`