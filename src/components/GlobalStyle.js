import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-image: url("../img/galaxy.jpg");
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
