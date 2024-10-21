import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const BlueRibbon = () => {
    return (
        <StyledBlueRibbon>
            <Nav/>
            <p>Blue Ribbon Bacon Festival</p>
            <a href="blueribbonbaconfestival.com" target="_blank">Blue Ribbon Bacon Festival Website</a>
        </StyledBlueRibbon>
    );
};

const StyledBlueRibbon = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export default BlueRibbon;
