import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const Alive515 = () => {
    return (
        <>
            <Nav/>
            <StyledAlive515>
                <p>515 Alive Music Festival</p>
                <a href="515alive.com" target="_blank">515 Alive Music Festival Website</a>
            </StyledAlive515>
        </>
    );
};

const StyledAlive515 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 1rem;
`;

export default Alive515;
