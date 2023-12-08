import { createGlobalStyle } from "styled-components";
import galaxy from "../img/galaxy.jpg";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        /* background-color: yellow; */
        background-image: url("../img/galaxy.jpg");
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
