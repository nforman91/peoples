import React, { useState } from "react";
import styled from "styled-components";
import purple_planet from "../img/purple_planet.jpg";
import { Button } from "@mui/material";

// FESTIVALS
import BlueRibbon from "../festivals/BlueRibbon";
import Hinterland from "../festivals/Hinterland";
import Alive515 from "../festivals/Alive515";
import Music8035 from "../festivals/Music8035";
import Greenbelt from "../festivals/Greenbelt";
import IowaCraft from "../festivals/IowaCraft";
import Oktoberfest from "../festivals/Oktoberfest";
import FieldDaze from "../festivals/FieldDaze";
import Ragbrai from "../festivals/Ragbrai";
import Truckin from "../festivals/Truckin";
import Knotfest from "../festivals/Knotfest";
import DesMoinesArts from "../festivals/DesMoinesArts";
import { Link } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material";
// import Typography from "@mui/material";
import Meta_Nav from "../components/Meta_Nav";

const Festivals = () => {
    const [festivalsModal, setFestivalsModal] = useState(false);

    const toggleFestivalsModal = () => {
        setFestivalsModal(!festivalsModal)
    }

    return (
        <StyledMetaFestivals>
                <Meta_Nav/>
                <StyledFestivals>
                    <StyledFestivalsModalContent>
                                <h4>FESTIVALS</h4>
                                <p>Festival Season is our FAVORITE Season !!!  And People’s Productions has their hand in SO Many great festivals here in the Midwest.  We are the festival management Guru’s of Central Iowa.  We have a managing role in 10 different festivals over the course of the year.  We are here to promote the ones that we currently work with and fill you in our services for the ones that we don’t yet.  We are the experts in the field and bring a full staff for whatever is needed to facilitate the success of your event.  Whether you just need help with a couple of aspects of your event or need a managing director our crack staff is on top of everything in the Festie world and can bring you everything from talent procurement and production management to cost savings due to our large volume of events that we produce.</p>  
                                    <br/><br/>
                                    <StyledFestivalsLists>
                                    
                                    <ul>
                                        <p>Some of the services that we provide for various festivals : </p>
                                        <br/>
                                    <li>Talent Buying</li>
                                    <li>Staging Operations</li>
                                    <li>Production Management (Sound & Lights)</li>
                                    <li>Vendor Coordination </li>
                                    <li>Infrastructure Procurement and Supervision </li>
                                    <li>Security Consultation</li>
                                    <li>Entertainment Services</li>
                                    <li>Volunteer Program Development </li>
                                    <li>Ticketing Oversight and Crowd Control </li>
                                    <li>Trash and Clean-Up Services</li>
                                    <li>Marketing and Media Management </li>
                                    <li>Sponsorship Procurement</li>
                                    <li>Stage Management </li>
                                    <li>Parking Services</li>
                                    <li>Venue Liaison </li>
                                    </ul>
                                    <br/><br/>
                                    
                                    <ul>
                                        <p>Some of the Festivals that we work with : </p>
                                        <p>(click on any festival to learn more!)</p>
                                        <br/>
                                    <li><Link to="/blueribbon" element={<BlueRibbon/>}>Blue Ribbon Bacon Festival</Link></li>
                                    <li><Link to="/hinterland" element={<Hinterland/>}>Hinterland Music Festival</Link> </li>
                                    <li><Link to="/515alive" element={<Alive515/>}>515 Alive Music Festival</Link> </li>
                                    <li><Link to="/80-35" element={<Music8035/>}>80-35 Music Festival</Link> </li>
                                    <li><Link to="/greenbelt" element={<Greenbelt/>}>Greenbelt Music Festival</Link> </li>
                                    <li><Link to="/iowacraft" element={<IowaCraft/>}>Iowa Craft Beer Festival</Link></li>
                                    <li><Link to="/oktoberfest" element={<Oktoberfest/>}>Oktoberfest DSM</Link> </li>
                                    <li><Link to="/fielddaze" element={<FieldDaze/>}>Field Daze Music Series</Link></li>
                                    <li><Link to="/ragbrai" element={<Ragbrai/>}>Ragbrai</Link> </li>
                                    <li><Link to="/truckin" element={<Truckin/>}>Truckin’ Food Truck Festival</Link> </li>
                                    <li><Link to="/knotfest" element={<Knotfest/>}>Knotfest</Link></li>
                                    <li><Link to="/desmoinesarts" element={<DesMoinesArts/>}>Des Moines Arts Festival</Link></li>
                                    </ul>
                                    </StyledFestivalsLists>
                            </StyledFestivalsModalContent>
                </StyledFestivals>
            </StyledMetaFestivals>
        
        // START OF PLANET VERSION
        // <StyledFestivals className="planet">
                        
        //                     <Button variant="text" onClick={toggleFestivalsModal}>Festivals</Button>
                        
        //                 <StyledPurplePlanet src={purple_planet} onClick={toggleFestivalsModal} alt="purple planet"/>
        //             {festivalsModal && (
        //                 <StyledFestivalsModal>
        //                     {/* <StyledFestivalsOverlay onClick={toggleFestivalsModal}/> */}
        //                     <StyledFestivalsModalContent>
        //                         <h4>FESTIVALS</h4>
        //                         <p>Festival Season is our FAVORITE Season !!!  And People’s Productions has their hand in SO Many great festivals here in the Midwest.  We are the festival management Guru’s of Central Iowa.  We have a managing role in 10 different festivals over the course of the year.  We are here to promote the ones that we currently work with and fill you in our services for the ones that we don’t yet.  We are the experts in the field and bring a full staff for whatever is needed to facilitate the success of your event.  Whether you just need help with a couple of aspects of your event or need a managing director our crack staff is on top of everything in the Festie world and can bring you everything from talent procurement and production management to cost savings due to our large volume of events that we produce.</p>  
        //                             <br/><br/>
        //                             <StyledFestivalsLists>
                                    
        //                             <ul>
        //                                 <p>Some of the services that we provide for various festivals : </p>
        //                                 <br/>
        //                             <li>Talent Buying</li>
        //                             <li>Staging Operations</li>
        //                             <li>Production Management (Sound & Lights)</li>
        //                             <li>Vendor Coordination </li>
        //                             <li>Infrastructure Procurement and Supervision </li>
        //                             <li>Security Consultation</li>
        //                             <li>Entertainment Services</li>
        //                             <li>Volunteer Program Development </li>
        //                             <li>Ticketing Oversight and Crowd Control </li>
        //                             <li>Trash and Clean-Up Services</li>
        //                             <li>Marketing and Media Management </li>
        //                             <li>Sponsorship Procurement</li>
        //                             <li>Stage Management </li>
        //                             <li>Parking Services</li>
        //                             <li>Venue Liaison </li>
        //                             </ul>
        //                             <br/><br/>
                                    
        //                             <ul>
        //                                 <p>Some of the Festivals that we work with : </p>
        //                                 <p>(click on any festival to learn more!)</p>
        //                                 <br/>
        //                             <li><Link to="/blueribbon" element={<BlueRibbon/>}>Blue Ribbon Bacon Festival</Link></li>
        //                             <li><Link to="/hinterland" element={<Hinterland/>}>Hinterland Music Festival</Link> </li>
        //                             <li><Link to="/515alive" element={<Alive515/>}>515 Alive Music Festival</Link> </li>
        //                             <li><Link to="/80-35" element={<Music8035/>}>80-35 Music Festival</Link> </li>
        //                             <li><Link to="/greenbelt" element={<Greenbelt/>}>Greenbelt Music Festival</Link> </li>
        //                             <li><Link to="/iowacraft" element={<IowaCraft/>}>Iowa Craft Beer Festival</Link></li>
        //                             <li><Link to="/oktoberfest" element={<Oktoberfest/>}>Oktoberfest DSM</Link> </li>
        //                             <li><Link to="/fielddaze" element={<FieldDaze/>}>Field Daze Music Series</Link></li>
        //                             <li><Link to="/ragbrai" element={<Ragbrai/>}>Ragbrai</Link> </li>
        //                             <li><Link to="/truckin" element={<Truckin/>}>Truckin’ Food Truck Festival</Link> </li>
        //                             <li><Link to="/knotfest" element={<Knotfest/>}>Knotfest</Link></li>
        //                             <li><Link to="/desmoinesarts" element={<DesMoinesArts/>}>Des Moines Arts Festival</Link></li>
        //                             </ul>
        //                             </StyledFestivalsLists>
        //                         <StyledFestivalsCloseButton onClick={toggleFestivalsModal}>CLOSE</StyledFestivalsCloseButton>
        //                     </StyledFestivalsModalContent>
        //                 </StyledFestivalsModal>
        //             )}
        //             </StyledFestivals>
    );
};

const StyledMetaFestivals = styled.div`
    display: flex;
`;

const StyledP = styled.p`
    padding: 50px;
`;

const StyledFestivals = styled.div`
    display: flex;
    flex-direction: column;
`;

// START OF PLANET VERSION
// STYLED PURPLE PLANET
const StyledPurplePlanet = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    padding-left: 3vh;
    z-index: 2;
`;

// FESTIVALS
// const StyledFestivals = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 17vh;
//     height: 17vh;
//     line-height: 5vh;
//     font-size: 20px;
//     /* flex-wrap: wrap; */
//     border-radius: 50%;
//     text-align: center;
//     /* border: 1px solid white; */
//     z-index: 1;
// `;

// const StyledFestivalsOnButton = styled.button`
//     display: block;
//     font-family: 'Permanent Marker';
//     font-size: 25px;
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
// `;

const StyledFestivalsModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150vh;
    height: 90vh;
    position: fixed;
    border: 1px solid white;
    background-color: white;
    margin: 5vh 140vh 0 0;
    z-index: 3;
`;

const StyledFestivalsOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledFestivalsModalContent = styled.div`
    position: absolute;
    /* top: 40%; */
    /* left: 50%; */
    line-height: 1.4;
    padding: 5vh 5vh 10vh 5vh;
    border-radius: 3px;
    /* max-width: 600px; */
    min-width: 300px;
    max-height: calc(100vh - 210px);
    overflow-y: auto;
    font-family: 'Josefin Sans';
    z-index: 3;
`;

const StyledFestivalsLists = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /* align-items: center; */
    margin: 0 0 0 2vh;
`;

const StyledFestivalsCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    z-index: 3;
`;

export default Festivals;
