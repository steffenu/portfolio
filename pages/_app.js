// import "semantic-ui-css/semantic.min.css";

import "../src/styles/main.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {

    box-sizing: border-box;
  }
`;

/* important to override semantic ui */

const theme = {
  colors: {
    primary: "#00FFC4",
    bg: "#212336",
    bg2: "#2B2D41",
    red: "#FF4A57",
  },

  abstand: {
    seitenabstand: "8rem",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
