import React, { useState } from "react";
import styled from "styled-components";
import ring_planet from "../img/ring_planet.jpg";
import { Button } from "@mui/material";

const Merch = () => {
    const [merchModal, setMerchModal] = useState(false);

    const toggleMerchModal = () => {
        setMerchModal(!merchModal)
    }

    return (
        <StyledMerch className="planet">
                    
                    <Button variant="text" onClick={toggleMerchModal}>Merch</Button>
                    <StyledRingPlanet src={ring_planet} onClick={toggleMerchModal} alt="ring planet"/>
                    {merchModal && (
                        <StyledMerchModal>
                            {/* <StyledMerchOverlay onClick={toggleMerchModal}/> */}
                            <StyledMerchModalContent>
                                <h2>Merch Modal!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                                <StyledMerchCloseButton onClick={toggleMerchModal}>CLOSE</StyledMerchCloseButton>
                            </StyledMerchModalContent>
                        </StyledMerchModal>
                    )}
                </StyledMerch>
    );
};

// STYLED RING PLANET
const StyledRingPlanet = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    position: relative;
    z-index: 1;
`;

// MERCH
const StyledMerch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17vh;
    height: 17vh;
    line-height: 5vh;
    font-size: 20px;
    flex-wrap: wrap;
    border-radius: 50%;
    text-align: center;
    /* border: 1px solid white; */
    z-index: 1;
`;

// const StyledMerchOnButton = styled.button`
//     display: block;
//     font-family: 'Permanent Marker';
//     font-size: 25px;
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
// `;

const StyledMerchModal = styled.div`
    width: 100vh;
    height: 100vh;
    position: fixed;
    background-color: white;
    margin: 0 100vh 30vh 0;
    z-index: 3;
`;

const StyledMerchOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledMerchModalContent = styled.div`
    position: absolute;
    /* top: 40%; */
    /* left: 50%; */
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    /* max-width: 600px; */
    /* min-width: 300px; */
    z-index: 3;
`;

const StyledMerchCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    z-index: 3;
`;

export default Merch;
