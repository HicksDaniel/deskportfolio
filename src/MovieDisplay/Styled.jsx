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

  background-color: ${(props) =>
    props.$isSelected
      ? "rgba(207, 207, 207, 0.3)"
      : "rgba(207, 207, 207, 0.1)"};
`;



export const TabletDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3%;
  background-color: black;
      width: ${(props) => props.$displayWidth};
    height: ${(props) => props.$displayHeight};
  transition: box-shadow 5s ease-in-out;
  ${(props) =>
    props.$isActive ?
      `
     box-shadow: 
      -0.75px 0px 0px 1.5px #a0a0a0,
     8px 5px 15px 0px #000000,
     3px 0px 0.5px #393939;
      `
      :
      ` 
    outline: 1px solid rgb(199, 199, 199);
    box-shadow: 
      1px 3px 0px 0px rgba(199, 199, 199, 1),
      0px 8px 1px -5px rgba(255, 255, 255, 1),
      10px 11px 1px 2px rgba(50, 50, 50, 1),
      14px 10px 0px 0px rgba(50, 50, 50, 1),
      12px 13px 10px 5px rgba(0, 0, 0, 1),
      12px 11px 0px 1px rgba(0, 0, 0, 1),
      15px 8px 0px 1px rgba(50, 50, 50, 1),
      40px 15px 15px 2px rgba(15, 15, 15, 0.8);
  `

  }

`;

export const PhoneDisplay = styled.div`
    display: flex;
    flex-flow: column nowrap;
    z-index: 1;
    overflow: auto;
    justify-content: flex-start;
    align-items: center;
    width: ${(props) => props.$displayWidth};
    height: ${(props) => props.$displayHeight};
    border-radius: 30px;    
    background: rgb(224, 235, 255);
    border: 10px solid black;
 
    
    
    outline: 1px solid rgb(199, 199, 199);
    transition: box-shadow 5s ease-in-out;   
   

    ${(props) =>
    props.$isActive ? `
     box-shadow: 
      -4px 2px 5px 2px #a0a0a0,
     8px 5px 15px 0px #000000,
     3px 0px 0.5px #393939;
      ` : `box-shadow: 1px 3px 0px 0px rgba(199, 199, 199, 1),
        0px 8px 1px -5px rgba(255, 255, 255, 1),
        10px 11px 1px 2px rgba(50, 50, 50, 1), 14px 10px 0px 0px rgba(50, 50, 50, 1),
         13px 11px 10px 5px rgba(0, 0, 0, 1),
        15px 8px 0px 1px rgba(50, 50, 50, 1), 30px 15px 15px 12px rgba(15, 15, 15, 0.8);
    `

  }
}
`

