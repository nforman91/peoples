import React from "react";
// { useEffect }
import styled from "styled-components";
import Planets from "../components/Planets";

const Home = () => {
    return (
        <StyledHome>
            <Planets>Water Works Amphitheater</Planets>
            {/* <Planets>HUSH</Planets> */}
            {/* <Planets>People's</Planets> */}
        </StyledHome>
    );
};

const StyledHome = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    /* z-index: 10; */
`;

export default Home;
