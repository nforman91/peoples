import React, { useState } from "react";
import styled from "styled-components";
import red_planet from "../img/red_planet.jpg";
import { Button } from "@mui/material";
import ReactPlayer from "react-player";

const HUSH = () => {
    const [hushModal, setHushModal] = useState(false);

    const toggleHushModal = () => {
        setHushModal(!hushModal)
    }

    return (
        <StyledHush className="planet">
                    <StyledRedPlanet src={red_planet} onClick={toggleHushModal} alt="red planet"/>
                    <Button variant="text" onClick={toggleHushModal}>Hush</Button>
                    {hushModal && (
                        <StyledHushModal>
                            {/* <StyledHushOverlay onClick={toggleHushModal}/> */}
                            <StyledHushModalContent>
                                <h4>HUSH</h4>
                                <br/>
                                <p>SILENT DISCO’S are the entertainment / party events sweeping the globe. This new sensation is a dance party with 3 DJ’s at the same time who are playing to a packed crowd in what appears to be total silence.  Participants all wear high-quality noise cancelling headphones and can choose between which DJ they like the best at any given moment.  It’s a spectacle to witness and an even bigger experience to participate in.  Think a packed room of people all grooving to their own beat or singing their favorite song at the top of their lungs with absolutely NO SOUND being played over amplified speakers.  This revolution started in Europe when creative rave organizers needed a solution to their late night parties being constantly shut down due to noise problems.  So they came up with this amazing idea of being able to throw dance parties with no amplified sound and it was an immediate smash hit.  It came to the United States via the festival circuit and it is now a staple part of many many music festivals around the county. We are very excited that we are now able to bring this technology to you at any location.  We do everything from large 15,000 person festivals to back yard / basement or office parties and everything in between.  We have never experienced anything so satisfying that is always a 100% home run with guests and neither will you.<br/><br/>Contact us at 
                                <br/>
                                <a href="mailto:HUSHDSM@GMAIL.COM">hushdsm@gmail.com</a>
                                <br/>
                                for more details or a quote for your next unforgettable party.<br/><br/>Enough words …  Silent Discos are best described with video evidence</p>
                                <br/>
                                <ReactPlayer url="https://www.youtube.com/watch?v=elAWsTOl0kM"/>
                                <StyledHushCloseButton onClick={toggleHushModal}>CLOSE</StyledHushCloseButton>
                            </StyledHushModalContent>
                        </StyledHushModal>
                    )}
                </StyledHush>
    );
};

// STYLED RED PLANET
const StyledRedPlanet = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    z-index: 2;
`;

// HUSH
const StyledHush = styled.div`
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
    z-index: 0;
`;

// const StyledHushOnButton = styled.button`
//     display: block;
//     font-family: 'Permanent Marker';
//     font-size: 25px;
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
//     z-index: 2;
// `;

const StyledHushModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170vh;
    height: 100vh;
    position: fixed;
    background-color: white;
    margin: 40vh 90vh 0 0;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center;  */
    z-index: 3;
`;

const StyledHushOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledHushModalContent = styled.div`
    position: absolute;
    /* top: 20%; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    line-height: 1.4;
    border-radius: 3px;
    /* max-width: 600px; */
    min-width: 300px;
    max-height: calc(100vh - 210px);
    overflow-y: auto;
    /* padding-top: 5vh; */
    padding-right: 5vh;
    padding-bottom: 5vh;
    padding-left: 5vh;
    font-family: 'Lato';
    z-index: 3;
`;

const StyledHushCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    z-index: 5;
`;

export default HUSH;
