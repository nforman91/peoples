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
    width: 20vh;
    height: 20vh;
    line-height: 20vh;
    font-size: 50px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
`;

export default Planets;
