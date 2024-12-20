import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const Knotfest = () => {
    return (
        <>
            <Nav/>
            <StyledKnotfest>
                <p>Knotfest</p>
                <a href="knotfest.com" target="_blank">Knotfest Website</a>
            </StyledKnotfest>
        </>
    );
};

const StyledKnotfest = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 1rem;
`;

export default Knotfest;
