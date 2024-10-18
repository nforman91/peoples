import React, { useState } from "react";
import styled from "styled-components";
import blue_planet2 from "../img/blue_planet2.jpg";
import { Button } from "@mui/material";
import Meta_Nav from "../components/Meta_Nav";

const Services = () => {
    const [servicesModal, setServicesModal] = useState(false);

    const toggleServicesModal = () => {
        setServicesModal(!servicesModal)
    }

    return (
        <StyledMetaServices>
                <Meta_Nav/>
                <StyledServices>
                <StyledP>Services</StyledP>
                <StyledP>***NEEDS COPY***</StyledP>
                </StyledServices>
            </StyledMetaServices>

        // START OF PLANET VERSION
        // <StyledServices className="planet">
        //             <StyledBluePlanet2 src={blue_planet2} onClick={toggleServicesModal} alt="blue planet"/>
        //             <Button variant="text" onClick={toggleServicesModal}>Services</Button>
        //             {servicesModal && (
        //                 <StyledServicesModal>
        //                     {/* <StyledServicesOverlay onClick={toggleServicesModal}/> */}
        //                     <StyledServicesModalContent>
        //                         <h2>Services Modal!</h2>
        //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
        //                         <StyledServicesCloseButton onClick={toggleServicesModal}>CLOSE</StyledServicesCloseButton>
        //                     </StyledServicesModalContent>
        //                 </StyledServicesModal>
        //             )}
        //         </StyledServices>
    );
};

const StyledMetaServices = styled.div`
    /* display: flex; */
`;

const StyledP = styled.p`
    padding: 50px;
`;

const StyledServices = styled.div`
    display: flex;
    flex-direction: column;
`;

// START OF PLANET VERSION
// STYLED BLUE PLANET 2
const StyledBluePlanet2 = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% -5vh;
    cursor: pointer;
    position: relative;
    z-index: 2;
`;

// SERVICES
// const StyledServices = styled.div`
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
//     z-index: 1;
// `;

// const StyledServicesOnButton = styled.button`
//     display: block;
//     font-family: 'Permanent Marker';
//     font-size: 25px;
//     /* word-wrap: wrap; */
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
// `;

const StyledServicesModal = styled.div`
    width: 70vh;
    height: 60vh;
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 5vh;
    margin: 70vh 0 30vh 100vh;
    z-index: 3;
`;

const StyledServicesOverlay = styled.div`
    width: 100vw;
    height: 60vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledServicesModalContent = styled.div`
    position: absolute;
    top: 20%;
    line-height: 1.4;
    border-radius: 3px;
    max-width: 600px;
    /* min-width: 300px; */
    /* padding: 5vh; */
    z-index: 3;
`;

const StyledServicesCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    z-index: 3;
`;

export default Services;
