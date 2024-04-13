import React, { useState } from "react";
import styled from "styled-components";
import brown_planet2 from "../img/brown_planet2.jpg";
import { Button } from "@mui/material";

const Future = () => {
    const [futureModal, setFutureModal] = useState(false);

    const toggleFutureModal = () => {
        setFutureModal(!futureModal)
    }

    return (
        <StyledFuture className="planet">
                    <StyledBrownPlanet2 src={brown_planet2} onClick={toggleFutureModal} alt="brown planet"/>
                    <Button variant="text" onClick={toggleFutureModal}>Future Projects</Button>
                    {futureModal && (
                        <StyledFutureModal>
                            <StyledFutureOverlay onClick={toggleFutureModal}/>
                            <StyledFutureModalContent>
                                <h2>Hello Modal!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                                <StyledFutureCloseButton onClick={toggleFutureModal}>CLOSE</StyledFutureCloseButton>
                            </StyledFutureModalContent>
                        </StyledFutureModal>
                    )}
                    </StyledFuture>
    );
};

// STYLED BROWN PLANET 2
const StyledBrownPlanet2 = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    padding-right: 2vh;
    z-index: 2;
`;

// FUTURE PROJECTS
const StyledFuture = styled.div`
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    width: 17vh;
    height: 17vh;
    line-height: 5vh;
    font-size: 20px;
    /* flex-wrap: wrap; */
    border-radius: 50%;
    text-align: center;
    /* border: 1px solid white; */
    z-index: 1;
`;

// const StyledFutureOnButton = styled.button`
//     display: block;
//     font-family: 'Permanent Marker';
//     font-size: 25px;
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
// `;

const StyledFutureModal = styled.div`
    width: 100vh;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    border: 1px solid white;
    background-color: white;
    margin: 5vh 0 0 140vh;
    z-index: 3;
`;

const StyledFutureOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledFutureModalContent = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
    z-index: 3;
`;

const StyledFutureCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    z-index: 3;
`;

export default Future;