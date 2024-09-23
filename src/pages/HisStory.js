import React, { useState } from "react";
import styled from "styled-components";
import white_planet from "../img/white_planet.jpg";
import { Button } from "@mui/material";
import Meta_Nav from "../components/Meta_Nav";

const HisStory = () => {
    const [storyModal, setStoryModal] = useState(false);

    const toggleStoryModal = () => {
        setStoryModal(!storyModal)
    }

    return (
        <StyledMetaStory>
                <Meta_Nav/>
                <StyledStory>
                <StyledP>Story</StyledP>
                <StyledP>***NEEDS COPY***</StyledP>
                </StyledStory>
            </StyledMetaStory>

        // START OF PLANET VERSION
        // <StyledStory>
        //             <Button variant="text" onClick={toggleStoryModal}>His Story</Button>
        //             {storyModal && (
        //                 <StyledStoryModal>
        //                     {/* <StyledStoryOverlay onClick={toggleStoryModal}/> */}
        //                     <StyledStoryModalContent>
        //                         <h2>Hello Modal!</h2>
        //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
        //                         <StyledStoryCloseButton onClick={toggleStoryModal}>CLOSE</StyledStoryCloseButton>
        //                     </StyledStoryModalContent>
        //                 </StyledStoryModal>
        //             )}
        //             <StyledWhitePlanet src={white_planet} onClick={toggleStoryModal} alt="white planet"/>
        //         </StyledStory>
    );
};

const StyledMetaStory = styled.div`
    display: flex;
`;

const StyledP = styled.p`
    padding: 50px;
`;

const StyledStory = styled.div`
    display: flex;
    flex-direction: column;
`;

// START OF PLANET VERSION
// STYLED WHITE PLANET
const StyledWhitePlanet = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    z-index: 2;
    margin-bottom: 5;
`;

// HIS STORY
// const StyledStory = styled.div`
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
//     padding-right: 20vh;
//     /* border: 1px solid white; */
//     z-index: 1;
//     margin-bottom: 50px;
// `;

// const StyledStoryOnButton = styled.button`
//     display: block;
//     font-family: 'Permanent Marker';
//     font-size: 25px;
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
// `;

const StyledStoryModal = styled.div`
    width: 100vh;
    height: 50vh;
    position: fixed;
    background-color: white;
    margin: 0 0 80vh 50vh;
    z-index: 3;
`;

const StyledStoryOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledStoryModalContent = styled.div`
    position: absolute;
    /* top: 40%; */
    /* left: 50%; */
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
    z-index: 3;
`;

const StyledStoryCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    z-index: 3;
`;

export default HisStory;
