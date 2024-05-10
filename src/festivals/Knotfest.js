import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const Knotfest = () => {
    return (
        <StyledKnotfest>
            <Nav/>
            <p>Knotfest</p>
            <a href="knotfest.com" target="_blank">Knotfest Website</a>
        </StyledKnotfest>
    );
};

const StyledKnotfest = styled.div`
    display: flex;
    height: 100%;
`;

export default Knotfest;
