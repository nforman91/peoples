import React, { useState } from "react";
import styled from "styled-components";
import pluto from "../img/pluto.jpg";
import { Button } from "@mui/material";
import Meta_Nav from "../components/Meta_Nav";

const Vending = () => {
    const [vendingModal, setVendingModal] = useState(false);

    const toggleVendingModal = () => {
        setVendingModal(!vendingModal)
    }

    return (
        <StyledMetaVending>
                <Meta_Nav/>
                <StyledVending>
                <StyledP>Vending</StyledP>
                <StyledP>We own and operate Several Food Trucks / Trailers and work with hundreds of other vendors with literally ANY type of food experience that you would like or need for ANY event – just contact us with your dates and needs and we will find you quality food vendors that will fit your needs that have been vetted and used at one of our many festivals</StyledP>
                </StyledVending>
            </StyledMetaVending>

        // START OF PLANET VERSION
        // <StyledVending>
        //     <StyledWhitePlanet2 src={pluto} onClick={toggleVendingModal} alt="white planet"/>
        //     <Button variant="text" onClick={toggleVendingModal}>Vending Services</Button>
        //     {vendingModal && (
        //         <StyledVendingModal>
        //             {/* <StyledVendingOverlay onClick={toggleVendingModal}/> */}
        //             <StyledVendingModalContent>
        //                 <h2>Vending Services</h2>
        //                 <p>We own and operate Several Food Trucks / Trailers and work with hundreds of other vendors with literally ANY type of food experience that you would like or need for ANY event – just contact us with your dates and needs and we will find you quality food vendors that will fit your needs that have been vetted and used at one of our many festivals</p>
        //                 <a href="info@peoplesproductions.biz">info@peoplesproductions.biz</a>
                        
        //             </StyledVendingModalContent>
        //             <StyledVendingCloseButton onClick={toggleVendingModal}>CLOSE</StyledVendingCloseButton>
        //         </StyledVendingModal>
        //     )}
        // </StyledVending>
    );
};

const StyledMetaVending = styled.div`
    display: flex;
`;

const StyledP = styled.p`
    padding: 50px;
`;

const StyledVending = styled.div`
    display: flex;
    flex-direction: column;
`;

// START OF PLANET VERSION
// STYLED WHITE PLANET 2
const StyledWhitePlanet2 = styled.img`
    width: 12vh;
    height: 15vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    padding-bottom: 0;
    /* position: absolute; */
    z-index: 0;
`;

// VENDING SERVICES

// const StyledVending = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 17vh;
//     height: 17vh;
//     line-height: 5vh;
//     font-size: 20px;
//     flex-wrap: wrap;
//     border-radius: 50%;
//     text-align: center;
//     /* border: 1px solid white; */
//     /* position: absolute; */
//     z-index: 1;
// `;

const StyledVendingModal = styled.div`
    width: 100vh;
    height: 60vh;
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 5vh;
    margin: 120vh 40vh 30vh 0vh;
    z-index: 3;
`;

const StyledVendingOverlay = styled.div`
    width: 100vw;
    height: 60vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 3;
`;

const StyledVendingModalContent = styled.div`
    position: absolute;
    top: 20%;
    line-height: 1.4;
    border-radius: 3px;
    max-width: 600px;
    /* min-width: 300px; */
    /* padding: 5vh; */
    z-index: 3;
`;

const StyledVendingCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    position: absolute;
    z-index: 3;
`;

export default Vending;
