import React from "react";
import styled from "styled-components";

const Planets = () => {
    return (
        <StyledPlanets/>
    );
};

const StyledPlanets = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vh;
    height: 10vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
`;

export default Planets;
