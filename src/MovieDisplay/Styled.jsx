import styled from "styled-components";



export const CustomButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "$isSelected",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  width: 100%;
  border-radius: 50%; 
  background-color: ${({ $isSelected }) =>
    $isSelected
      ? "rgba(207, 207, 207, 0.3)"
      : "rgba(207, 207, 207, 0.1)"};
`;



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
  `};
`;


export const PhoneBody = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "$displayWidth" &&
    prop !== "$displayHeight" &&
    prop !== "$isActive",
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
width: ${({ $displayWidth }) => $displayWidth}; 
height: ${({ $displayHeight }) => $displayHeight};
border-radius: 25px;
outline: 1px solid rgb(199, 199, 199);
transition: box-shadow 3s ease-in-out;


  ${({ $isActive }) =>
    $isActive
      ? `
    box-shadow: 
    inset 0px -1px 0px 5px rgba(0, 0, 0, 1),
      -1px 1px 1px 1px #a0a0a0,
      5px 3px 5px 2px #000000,
      3px 4px 0px #545454ff;
      ` : `      
      box-shadow:
       inset 0px 0px 0px 5px rgba(0, 0, 0, 1),      
        0px 1px 1px 1px rgba(255, 255, 255, 1),
      
        5px 2px 0px 10px rgba(50, 50, 50, 1),     
        20px -5px 10px 10px rgba(15, 15, 15, 0.8);
    `
  }
  }

`

