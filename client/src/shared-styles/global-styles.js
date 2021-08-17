import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}


html {
    box-sizing: border-box;
}

body {
    box-sizing: inherit;
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${({ theme }) => theme.bgMain};
}
    a {
        text-decoration: none;
        color: grey;
    }

    ul {
        /* width: 100%; */
    }
li {
    list-style: none;
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}


`;
