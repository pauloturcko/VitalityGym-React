import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.mainFont};
    background-color: ${(props) => props.theme.colors.bgMainColor};
    color: ${(props) => props.theme.colors.textColor}
  }

`;

export default GlobalStyles;