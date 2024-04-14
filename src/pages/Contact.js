import React, { useState } from "react";
import styled from "styled-components";
import earth from "../img/earth.jpg";
import { Button } from "@mui/material";

const Contact = () => {
    const [contactModal, setContactModal] = useState(false);

    const toggleContactModal = () => {
        setContactModal(!contactModal)
    }

    return (
        <StyledContact>
                    <Button variant="text" onClick={toggleContactModal}>Contact</Button>
                    <StyledBluePlanet1 src={earth} onClick={toggleContactModal} alt="earth"/>
                </StyledContact>
    );
};

// STYLED BLUE PLANET
const StyledBluePlanet1 = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    background-size: cover;
    max-width: 100%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    padding-bottom: 0;
    position: relative;
    z-index: 2;
`;

// CONTACT

const StyledContact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vh;
    height: 17vh;
    line-height: 5vh;
    font-size: 20px;
    flex-wrap: wrap;
    border-radius: 50%;
    text-align: center;
    /* border: 1px solid white; */
    z-index: 2;
`;

// const StyledContactOnButton = styled.button`
//     /* display: block; */
//     font-family: 'Permanent Marker';
//     font-size: 25px;
//     /* word-wrap: normal; */
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
//     z-index: 2;
// `;

export default Contact;