import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const Alive515 = () => {
    return (
        <StyledAlive515>
            <Nav/>
            <p>515 Alive Music Festival</p>
            <a href="515alive.com" target="_blank">515 Alive Music Festival Website</a>
        </StyledAlive515>
    );
};

const StyledAlive515 = styled.div`
    display: flex;
    height: 100%;
`;

export default Alive515;
