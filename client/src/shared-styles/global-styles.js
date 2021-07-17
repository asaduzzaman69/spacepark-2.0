import { createGlobalStyle } from 'styled-components'

export const  GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,700&display=swap');

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
    background-color: ${({theme}) => theme.bgMain};
}


`