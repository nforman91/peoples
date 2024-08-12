import React, { useState } from "react";
import styled from "styled-components";
import blue_planet from "../img/blue_planet.jpg";
import { Button } from "@mui/material";
// import { Modal, Text } from "react-native";
import styles from "../pages/modals/WaterWorks.module.scss";

const WaterWorks = () => {
    const [waterModal, setWaterModal] = useState(false);

    const toggleWaterModal = () => {
            setWaterModal(!waterModal)
        }

    return (
        <StyledWater>
            <StyledBluePlanet1 src={blue_planet} onClick={toggleWaterModal} alt="blue planet"/>
                {/* <StyledWater className="planet"> */}
                {/* <StyledBluePlanet 
                    src={blue_planet} alt="blue planet"
                /> */}
                {/* {planetsInfo &&
                    <Info planetsInfo={planetsInfo} setPlanetsInfo={setPlanetsInfo}/>
                } */}
            <Button variant="text" onClick={toggleWaterModal}>Water Works Amphitheater</Button>
            {/* <Modal>
                <Text>Hello World!</Text>
            </Modal> */}
            {waterModal && (
                // <StyledWaterModal>
                <div className={`${styles.container} ${styles.active}`}>
                    {/* <StyledWaterOverlay onClick={toggleWaterModal}/> */}
                    <StyledWaterModalContent className={styles.modal}>
                        <h2>Waterworks Amphitheater</h2>
                        <p>Tucked into the 2nd largest urban park in the country – The Lauridsen Amphitheater at Water Works Park is the premier outdoor venue in the state.  Featuring a Large 2 sided stage we are able to host everything from small intimate shows on the Southside Stage (Killinger Family Stage) from 100 people to 1250 people or flip around to the Great Lawn where we can host up to 15,000 people for concerts / festivals / events.  We are host to many great annual events suck as The Iowa Brewers Guild Brew Fest / The 80-35 Music Festival / The Des Moines Symphony Labor Day Pops Series / Oktoberfest DSM and more every season.  Last year we hosted both the camping and concert for RAGBRAI’s 50th year celebration where we were home to 18,000 campers and 20,000 + concert goers to see the headliner Lynyrd Skynyrd.  The Field Daze Music Series has brought us many great acts such as Willie Nelson / STYX / The Dead South / Koe Wetzel / (fill in others from previous seasons) – We are the perfect spot to host everything from a small community event or dance recital to large Concerts, Multi Day Festivals, Political Events and More</p>
                        <br/>
                        <p>contact us at 
                            <a href="info@peoplesproductions.biz">info@peoplesproductions.biz</a>
                            for more information</p>
                        <StyledWaterCloseButton onClick={toggleWaterModal}>CLOSE</StyledWaterCloseButton>
                        {/* <span className={styles.togglemodal}>CLOSE</span> */}
                    </StyledWaterModalContent>
                {/* </StyledWaterModal> */}
                </div>
            )}
        </StyledWater>
    );
};

const StyledWater = styled.div`
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
    position: relative;
    padding-right: 20vh;
    z-index: 1;
`;

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
    z-index: 0;
`;

// const StyledWaterModal = styled.div`
//     width: 100vh;
//     height: 80vh;
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     background-color: white;
//     padding: 5vh;
//     margin: 80vh 0 0 30vh;
//     position: fixed;
//     z-index: 3;
// `;

const StyledWaterOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 3;
`;

const StyledWaterModalContent = styled.div`
    position: absolute;
    /* top: 40%; */
    line-height: 1.4;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
    position: fixed;
    overflow-y: auto;
    z-index: 3;
`;

const StyledWaterCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    position: absolute;
    z-index: 3;
`;

export default WaterWorks;
