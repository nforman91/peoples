import React, { useState } from "react";
import styled from "styled-components";
import earth from "../img/earth.jpg";
import { Button } from "@mui/material";
import Meta_Nav from "../components/Meta_Nav";

const Contact = () => {
    const [contactModal, setContactModal] = useState(false);

    const toggleContactModal = () => {
        setContactModal(!contactModal)
    }

    return (
        <StyledMetaContact>
                <Meta_Nav/>
                <StyledContact>
                <StyledP>Contact</StyledP>
                <StyledP>***NEEDS COPY***</StyledP>
                </StyledContact>
            </StyledMetaContact>

        // START OF PLANET VERSION
        // <StyledContact>
        //             <Button variant="text" onClick={toggleContactModal}>Contact</Button>
        //             <StyledBluePlanet1 src={earth} onClick={toggleContactModal} alt="earth"/>
        //             {contactModal && (
        //                 <StyledContactModal>
        //                     {/* <StyledContactOverlay onClick={toggleContactModal}/> */}
        //                     <StyledContactModalContent>
        //                         <h2>Hello Modal!</h2>
        //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
        //                         <StyledContactCloseButton onClick={toggleContactModal}>CLOSE</StyledContactCloseButton>
        //                     </StyledContactModalContent>
        //                 </StyledContactModal>
        //             )}
        //         </StyledContact>
    );
};

const StyledMetaContact = styled.div`
    display: flex;
`;

const StyledP = styled.p`
    padding: 50px;
`;

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
`;

// START OF PLANET VERSION
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

// const StyledContact = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 25vh;
//     height: 17vh;
//     line-height: 5vh;
//     font-size: 20px;
//     flex-wrap: wrap;
//     border-radius: 50%;
//     text-align: center;
//     /* border: 1px solid white; */
//     margin-bottom: 50px;
//     z-index: 2;
// `;

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

const StyledContactModal = styled.div`
    width: 100vh;
    height: 100vh;
    position: fixed;
    background-color: white;
    margin: 0 35vh 50vh 0;
    z-index: 3;
`;

const StyledContactOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledContactModalContent = styled.div`
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

const StyledContactCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    z-index: 3;
`;

export default Contact;