import React, { useState } from "react";
import styled from "styled-components";
import brown_planet from "../img//brown_planet.jpg";
import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import Meta_Nav from "../components/Meta_Nav";

const HumanFoosball = () => {
    const [humanModal, setHumanModal] = useState(false);

    const toggleHumanModal = () => {
        setHumanModal(!humanModal)
    }

    return (
        <StyledMetaHuman>
                <Meta_Nav/>
                <StyledHuman>
                <StyledP>Human Foosball</StyledP>
                <StyledP>Yep !  Its just like it sounds …  put a bunch of humans in a giant foosball table and let them kick their way to a championship !  If was only that simple …  but now it IS !  We have built the perfect mousetrap for your backyard party or company event.  Our giant foosball table is an exact replica of a standard foosball table but human sized.  It’s a 6 on 6 battle royale but there’s a no spinning your players rule because the players are all your family / friends / co-workers.  The 2 teams strap themselves into their respective poles and slide back and forth as a team “kicking” their way back and forth to score goals. It is a great activity for all ages …   We have been invited to everything from backyard birthday parties to middle school church functions and corporate team building retreats to St Patrick’s Day festivals and of course the World’s largest Bacon Festival.   We operate our Human Foosball Arena in a couple of different ways.  We can come set it up in your back yard / driveway / indoor gym or really anywhere that you have a 90’ x 40’ area for our layout.  It works on both grass or concrete or any inside surface.  We can either just set it up and let you enjoy at your leisure or we will come and manage it as a tournament complete with referee’s and a bracket system if you want to promote a competition.  Both options are crazy fun and enjoyable and something that your guests will be talking about for years to come.  
 <br/><br/>NEW IN 2024 !!! – We will be hosting a traveling bar league this fall !!! Contact us if you want to be a part of the fun with your team of 6 or if you want us to include your establishment as part of our traveling competition<br/><br/>
                <a href="mailto:HUMANFOOSBALL@GMAIL.COM">humanfoosball@gmail.com</a>
                <ReactPlayer url="https://www.youtube.com/watch?v=2hhPGexC_98"/>
                </StyledP>
                </StyledHuman>
            </StyledMetaHuman>

        // START OF PLANET VERSION
//         <StyledHuman className="planet">
                    
//                     <Button variant="text" onClick={toggleHumanModal}>Human<br/>Foosball</Button>
//                     <StyledBrownPlanet1 src={brown_planet} onClick={toggleHumanModal} alt="brown planet"/>
//                     {humanModal && (
//                         <StyledHumanModal>
//                             {/* <StyledHumanOverlay onClick={toggleHumanModal}/> */}
//                             <StyledHumanModalContent>
//                                 <h4>HUMAN FOOSBALL</h4>
//                                 <p>Yep !  Its just like it sounds …  put a bunch of humans in a giant foosball table and let them kick their way to a championship !  If was only that simple …  but now it IS !  We have built the perfect mousetrap for your backyard party or company event.  Our giant foosball table is an exact replica of a standard foosball table but human sized.  It’s a 6 on 6 battle royale but there’s a no spinning your players rule because the players are all your family / friends / co-workers.  The 2 teams strap themselves into their respective poles and slide back and forth as a team “kicking” their way back and forth to score goals. It is a great activity for all ages …   We have been invited to everything from backyard birthday parties to middle school church functions and corporate team building retreats to St Patrick’s Day festivals and of course the World’s largest Bacon Festival.   We operate our Human Foosball Arena in a couple of different ways.  We can come set it up in your back yard / driveway / indoor gym or really anywhere that you have a 90’ x 40’ area for our layout.  It works on both grass or concrete or any inside surface.  We can either just set it up and let you enjoy at your leisure or we will come and manage it as a tournament complete with referee’s and a bracket system if you want to promote a competition.  Both options are crazy fun and enjoyable and something that your guests will be talking about for years to come.  
// <br/><br/>NEW IN 2024 !!! – We will be hosting a traveling bar league this fall !!! Contact us if you want to be a part of the fun with your team of 6 or if you want us to include your establishment as part of our traveling competition<br/><br/>
//                                 <a href="mailto:HUMANFOOSBALL@GMAIL.COM">humanfoosball@gmail.com</a>
//                                 </p>
//                                 <ReactPlayer url="https://www.youtube.com/watch?v=2hhPGexC_98"/>
//                                 <br/>
//                                 <StyledHumanCloseButton onClick={toggleHumanModal}>CLOSE</StyledHumanCloseButton>
//                             </StyledHumanModalContent>
//                         </StyledHumanModal>
//                     )}
//                     </StyledHuman>
    );
};

const StyledMetaHuman = styled.div`
    /* display: flex; */
`;

const StyledP = styled.p`
    padding: 50px;
`;

const StyledHuman = styled.div`
    display: flex;
    flex-direction: column;
`;

// START OF PLANET VERSION
// STYLED BROWN PLANET 1
const StyledBrownPlanet1 = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    position: relative;
    z-index: 2;
`;

// HUMAN FOOSBALL
// const StyledHuman = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 17vh;
//     height: 17vh;
//     line-height: 3vh;
//     font-size: 20px;
//     flex-wrap: wrap;
//     border-radius: 50%;
//     text-align: center;
//     /* border: 1px solid white; */
//     position: relative;
//     z-index: 1;
// `;

// const StyledHumanOnButton = styled.button`
//     display: block;
//     font-family: 'Permanent Marker';
//     font-size: 25px;
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
// `;

const StyledHumanModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150vh;
    height: 120vh;
    position: fixed;
    background-color: white;
    margin: 0 0 50vh 80vh;
    z-index: 3;
`;

const StyledHumanOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledHumanModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* position: absolute; */
    /* top: 40%; */
    /* left: 50%; */
    line-height: 1.4;
    padding: 5vh;
    border-radius: 3px;
    /* max-width: 600px; */
    min-width: 300px;
    max-height: calc(100vh - 210px);
    overflow-y: auto;
    font-family: 'Varela';
    position: relative;
    z-index: 3;
`;

const StyledHumanCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    z-index: 3;
`;

export default HumanFoosball;
