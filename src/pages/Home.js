import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

// IMAGES
// import galaxy from "../img/galaxy.jpg";
// import universe_doughnut from "../img/universe_doughnut.jpg";
import galaxy2 from "../img/galaxy2.jpg";

// import peoples_bw_on_white_logo from "../img/peoples_bw_on_white_logo.jpg";
// import peoples_bw_on_white_logo from "../img/peoples_bw_on_white_logo.png";
import Peoples_transparent from "../img/Peoples_transparent.png";
import Peoples_transparent_white from "../img/Peoples_transparent_white.png";
// import planets from "../planets/Planets";
// import Info from "../components/Info";
import blue_planet from "../img/blue_planet.jpg";
import blue_planet2 from "../img/blue_planet2.jpg";
import brown_planet from "../img//brown_planet.jpg";
import brown_planet2 from "../img/brown_planet2.jpg";
import pluto from "../img/pluto.jpg";
import purple_planet from "../img/purple_planet.jpg";
import red_planet from "../img/red_planet.jpg";
import ring_planet from "../img/ring_planet.jpg";
import white_planet from "../img/white_planet.jpg";
import white_planet2 from "../img/white_planet2.jpg";
import earth from "../img/earth.jpg";

// FESTIVALS
import ReactPlayer from "react-player";
import Hinterland from "../festivals/Hinterland";
import Alive515 from "../festivals/Alive515";
import Music8035 from "../festivals/Music8035";
import Greenbelt from "../festivals/Greenbelt";
import IowaCraft from "../festivals/IowaCraft";
import Oktoberfest from "../festivals/Oktoberfest";
import FieldDaze from "../festivals/FieldDaze";
import Ragbrai from "../festivals/Ragbrai";
import Truckin from "../festivals/Truckin";
import DesMoinesArts from "../festivals/DesMoinesArts";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
// import Typography from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            "Permanent Marker"
        ].join(','),
        fontSize: 20,
        cursor: "pointer",
        color: 'white',
        text: 'white'
    },
});

const Home = () => {
    const [waterModal, setWaterModal] = useState(false);
    const [vendingModal, setVendingModal] = useState(false);
    const [servicesModal, setServicesModal] = useState(false);
    const [hushModal, setHushModal] = useState(false);
    const [futureModal, setFutureModal] = useState(false);
    const [festivalsModal, setFestivalsModal] = useState(false);
    const [humanModal, setHumanModal] = useState(false);
    const [merchModal, setMerchModal] = useState(false);
    const [storyModal, setStoryModal] = useState(false);
    const [contactModal, setContactModal] = useState(false);

    // const [planet, setPlanet] = useState();
    // const [planetsInfo, setPlanetsInfo] = useState(planets);

    const toggleWaterModal = () => {
        setWaterModal(!waterModal)
    }

    const toggleVendingModal = () => {
        setVendingModal(!vendingModal)
    }

    const toggleServicesModal = () => {
        setServicesModal(!servicesModal)
    }

    const toggleHushModal = () => {
        setHushModal(!hushModal)
    }

    const toggleFutureModal = () => {
        setFutureModal(!futureModal)
    }

    const toggleFestivalsModal = () => {
        setFestivalsModal(!festivalsModal)
    }

    const toggleHumanModal = () => {
        setHumanModal(!humanModal)
    }

    const toggleMerchModal = () => {
        setMerchModal(!merchModal)
    }

    const toggleStoryModal = () => {
        setStoryModal(!storyModal)
    }

    const toggleContactModal = () => {
        setContactModal(!contactModal)
    }

    // const showPlanetsInfo = (oneplanet) => {
    //     return (
    //         <div onClick={() => {
    //             setPlanet(oneplanet)

    //         }}
    //         className="single-planet-container" key={oneplanet.id}/>
    //     )
    // }

    return (
        <>
        <StyledUniverse id="a" src={galaxy2} alt="picture of a galaxy"></StyledUniverse>
        <ThemeProvider theme={theme}>
            <StyledOne>
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
                </StyledWater>
                {waterModal && (
                    <StyledWaterModal>
                        <StyledWaterOverlay onClick={toggleWaterModal}/>
                        <StyledWaterModalContent>
                            <h2>Hello Modal!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                            <StyledWaterCloseButton onClick={toggleWaterModal}>CLOSE</StyledWaterCloseButton>
                        </StyledWaterModalContent>
                    </StyledWaterModal>
                )}
                {/* </StyledWater> */}

                <StyledVending>
                    <StyledWhitePlanet2 src={pluto} onClick={toggleVendingModal} alt="white planet"/>
                    <Button variant="text" onClick={toggleVendingModal}>Vending Services</Button>
                </StyledVending>
                
            </StyledOne>
            <StyledTwo>
                <StyledServices className="planet">
                    <StyledBluePlanet2 src={blue_planet2} onClick={toggleServicesModal} alt="blue planet"/>
                    <Button variant="text" onClick={toggleServicesModal}>Services</Button>
                    {servicesModal && (
                        <StyledServicesModal>
                            <StyledServicesOverlay onClick={toggleServicesModal}/>
                            <StyledServicesModalContent>
                                <h2>Hello Modal!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                                <StyledServicesCloseButton onClick={toggleServicesModal}>CLOSE</StyledServicesCloseButton>
                            </StyledServicesModalContent>
                        </StyledServicesModal>
                    )}
                </StyledServices>
                <StyledHush className="planet">
                    <StyledRedPlanet src={red_planet} onClick={toggleHushModal} alt="red planet"/>
                    <Button variant="text" onClick={toggleHushModal}>Hush</Button>
                    {hushModal && (
                        <StyledHushModal>
                            <StyledHushOverlay onClick={toggleHushModal}/>
                            <StyledHushModalContent>
                                <h4>HUSH</h4>
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
            </StyledTwo>
            <StyledThree>
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
                {/* <StyledPeoplesLogo1 src={peoples_bw_on_white_logo} alt="People's Productions logo1"/> */}
                {/* <StyledLogo> */}
                    <StyledPeoplesLogo2 src={Peoples_transparent} alt="People's Productions logo2"/>
                    {/* <StyledPeoplesLogo2 src={Peoples_transparent_white} alt="People's Productions logo2 white"/> */}
                {/* </StyledLogo> */}
                <StyledFestivals className="planet">
                        
                            <Button variant="text" onClick={toggleFestivalsModal}>Festivals</Button>
                        
                        <StyledPurplePlanet src={purple_planet} onClick={toggleFestivalsModal} alt="purple planet"/>
                    {festivalsModal && (
                        <StyledFestivalsModal>
                            <StyledFestivalsOverlay onClick={toggleFestivalsModal}/>
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
                                        <br/>
                                    {/* <li><Link to="/blueribbon" element={</>}>Blue Ribbon Bacon Festival</Link></li> */}
                                    <li><Link to="/hinterland" element={<Hinterland/>}>Hinterland Music Festival</Link> </li>
                                    <li><Link to="/515alive" element={<Alive515/>}>515 Alive Music Festival</Link> </li>
                                    <li><Link to="/80-35" element={<Music8035/>}>80-35 Music Festival</Link> </li>
                                    <li><Link to="/greenbelt" element={<Greenbelt/>}>Greenbelt Music Festival</Link> </li>
                                    <li><Link to="/iowacraft" element={<IowaCraft/>}>Iowa Craft Beer Festival</Link></li>
                                    <li><Link to="/oktoberfest" element={<Oktoberfest/>}>Oktoberfest DSM</Link> </li>
                                    <li><Link to="/fielddaze" element={<FieldDaze/>}>Field Daze Music Series</Link></li>
                                    <li><Link to="/ragbrai" element={<Ragbrai/>}>Ragbrai</Link> </li>
                                    <li><Link to="/truckin" element={<Truckin/>}>Truckin’ Food Truck Festival</Link> </li>
                                    <li><Link to="/desmoinesarts" element={<DesMoinesArts/>}>Des Moines Arts Festival</Link></li>
                                    </ul>
                                    </StyledFestivalsLists>
                                <StyledFestivalsCloseButton onClick={toggleFestivalsModal}>CLOSE</StyledFestivalsCloseButton>
                            </StyledFestivalsModalContent>
                        </StyledFestivalsModal>
                    )}
                    </StyledFestivals>
            </StyledThree>
            <StyledTwo>
                <StyledHuman className="planet">
                    
                    <Button variant="text" onClick={toggleHumanModal}>Human<br/>Foosball</Button>
                    <StyledBrownPlanet1 src={brown_planet} onClick={toggleHumanModal} alt="brown planet"/>
                    {humanModal && (
                        <StyledHumanModal>
                            <StyledHumanOverlay onClick={toggleHumanModal}/>
                            <StyledHumanModalContent>
                                <h4>HUMAN FOOSBALL</h4>
                                <p>Yep !  Its just like it sounds …  put a bunch of humans in a giant foosball table and let them kick their way to a championship !  If was only that simple …  but now it IS !  We have built the perfect mousetrap for your backyard party or company event.  Our giant foosball table is an exact replica of a standard foosball table but human sized.  It’s a 6 on 6 battle royale but there’s a no spinning your players rule because the players are all your family / friends / co-workers.  The 2 teams strap themselves into their respective poles and slide back and forth as a team “kicking” their way back and forth to score goals. It is a great activity for all ages …   We have been invited to everything from backyard birthday parties to middle school church functions and corporate team building retreats to St Patrick’s Day festivals and of course the World’s largest Bacon Festival.   We operate our Human Foosball Arena in a couple of different ways.  We can come set it up in your back yard / driveway / indoor gym or really anywhere that you have a 90’ x 40’ area for our layout.  It works on both grass or concrete or any inside surface.  We can either just set it up and let you enjoy at your leisure or we will come and manage it as a tournament complete with referee’s and a bracket system if you want to promote a competition.  Both options are crazy fun and enjoyable and something that your guests will be talking about for years to come.  
<br/><br/>NEW IN 2024 !!! – We will be hosting a traveling bar league this fall !!! Contact us if you want to be a part of the fun with your team of 6 or if you want us to include your establishment as part of our traveling competition<br/><br/>
                                <a href="mailto:HUMANFOOSBALL@GMAIL.COM">humanfoosball@gmail.com</a>
                                </p>
                                <ReactPlayer url="https://www.youtube.com/watch?v=2hhPGexC_98"/>
                                <br/>
                                <StyledHumanCloseButton onClick={toggleHumanModal}>CLOSE</StyledHumanCloseButton>
                            </StyledHumanModalContent>
                        </StyledHumanModal>
                    )}
                    </StyledHuman>
                <StyledMerch className="planet">
                    
                    <Button variant="text" onClick={toggleMerchModal}>Merch</Button>
                    <StyledRingPlanet src={ring_planet} onClick={toggleMerchModal} alt="ring planet"/>
                    {merchModal && (
                        <StyledMerchModal>
                            <StyledMerchOverlay onClick={toggleMerchModal}/>
                            <StyledMerchModalContent>
                                <h2>Hello Modal!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                                <StyledMerchCloseButton onClick={toggleMerchModal}>CLOSE</StyledMerchCloseButton>
                            </StyledMerchModalContent>
                        </StyledMerchModal>
                    )}
                </StyledMerch>
            </StyledTwo>
            <StyledOne>
                <StyledStory>
                    <Button variant="text" onClick={toggleStoryModal}>His Story</Button>
                    {storyModal && (
                        <StyledStoryModal>
                            <StyledStoryOverlay onClick={toggleStoryModal}/>
                            <StyledStoryModalContent>
                                <h2>Hello Modal!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                                <StyledStoryCloseButton onClick={toggleStoryModal}>CLOSE</StyledStoryCloseButton>
                            </StyledStoryModalContent>
                        </StyledStoryModal>
                    )}
                    <StyledWhitePlanet src={white_planet} onClick={toggleStoryModal} alt="white planet"/>
                </StyledStory>

                <StyledContact>
                    <Button variant="text" onClick={toggleContactModal}>Contact</Button>
                    <StyledBluePlanet1 src={earth} onClick={toggleContactModal} alt="earth"/>
                </StyledContact>

            </StyledOne>
            </ThemeProvider>
        </>    
    );
};

const StyledUniverse = styled.img`
    background-image: url("../img/galaxy.jpg");
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;
    /* opacity: 10%; */
`;

const StyledOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid white; */
    position: relative;
    z-index: 1;
    height: cover;
    h4{
        color: black;
    }
    a{
        color: black;
        text-decoration: none;
    }
    /* .planet:hover{
        margin-top: 1vh;
    } */
`;

// STYLED BLUE PLANET
const StyledBluePlanet1 = styled.img`
    width: 12vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    padding-bottom: 0;
    z-index: 1;
`;

// WATER WORKS AMPHITHEATER
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
    z-index: 1;
`;

// const StyledWater = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 17vh;
//     height: 17vh;
//     /* background-color: white; */
//     /* background-image: url("../img/blue_planet.jpg"); */
//     /* filter: blur(1rem); */
//     line-height: 3vh;
//     font-size: 20px;
//     flex-wrap: wrap;
//     border-radius: 50%;
//     text-align: center;
//     border: 1px solid white;
//     .planet:hover{
//         cursor: pointer;
//         /* margin-top: -1vh; */
//     }
// `;

// const StyledBluePlanet = styled.img`
//     width: 17vh;
//     height: 17vh;
//     background-image: url("../img/blue_planet.jpg");
//     border-radius: 50%;
// `;

// const StyledWaterOnButton = styled.button`
//     /* display: block; */
//     font-family: 'Permanent Marker';
//     font-size: 20px;
//     /* word-wrap: normal; */
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
//     z-index: 2;
// `;

const StyledWaterModal = styled.div`
    width: 100vh;
    height: 60vh;
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 5vh;
    margin: 70vh 0 0 0;
    z-index: 3;
`;

const StyledWaterOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledWaterModalContent = styled.div`
    position: absolute;
    top: 40%;
    line-height: 1.4;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
`;

const StyledWaterCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;

// STYLED WHITE PLANET 2
const StyledWhitePlanet2 = styled.img`
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    padding-bottom: 0;
    z-index: 1;
`;

// VENDING SERVICES

const StyledVending = styled.div`
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

// const StyledVendingOnButton = styled.button`
//     /* display: block; */
//     font-family: 'Permanent Marker';
//     font-size: 20px;
//     /* word-wrap: normal; */
//     background: none;
//     border: none;
//     color: white;
//     cursor: pointer;
//     z-index: 2;
// `;

const StyledTwo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid white; */
    position: relative;
    z-index: 2;
    h4{
        /* color: white; */
    }
    a{
        color: black;
        text-decoration: none;
    }
`;

// STYLED BLUE PLANET 2
const StyledBluePlanet2 = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% -5vh;
    cursor: pointer;
    z-index: 1;
`;


// SERVICES
const StyledServices = styled.div`
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
    width: 100vh;
    height: 60vh;
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 5vh;
    margin: 70vh 0 30vh 100vh;
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
`;

const StyledServicesCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;

// STYLED RED PLANET
const StyledRedPlanet = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    z-index: 1;
`;

// // STYLED BROWN PLANET 1
// const StyledBrownPlanet1 = styled.img`
//     width: 17vh;
//     height: 17vh;
//     border-radius: 50%;
//     object-fit: cover;
//     object-position: 50% 0;
//     cursor: pointer;
//     z-index: 1;
// `;

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
    height: 80vh;
    position: fixed;
    background-color: white;
    margin: 40vh 90vh 0 0;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center;  */
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
    line-height: 1.4;
    border-radius: 3px;
    /* max-width: 600px; */
    min-width: 300px;
    max-height: calc(100vh - 210px);
    overflow-y: auto;
    padding: 5vh;
    font-family: 'Lato';
`;

const StyledHushCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;

const StyledThree = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid white; */
    position: relative;
    z-index: 2;
    h4{
        /* color: white; */
    }
    a{
        color: black;
        text-decoration: none;
    }
`;

// STYLED BROWN PLANET 2
const StyledBrownPlanet2 = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    padding-right: 2vh;
    z-index: 1;
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
    z-index: 0;
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
`;

const StyledFutureCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;

// STYLED PURPLE PLANET
const StyledPurplePlanet = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    padding-left: 3vh;
    z-index: 1;
`;

// FESTIVALS
const StyledFestivals = styled.div`
    display: flex;
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
    z-index: 0;
`;

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
    margin: 5vh 120vh 0 0;
    z-index: 5;
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
`;


// PEOPLE'S LOGO
// const StyledLogo = styled.div`
//     margin: auto;
//     width: 30vh;
//     height: 30vh;
//     /* border: 1px solid white; */
//     background: inherit;
//     $b: 1.5em;
//     /* position: relative; */
// `;

// const StyledPeoplesLogo1 = styled.img`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 30vh;
//     height: 30vh;
//     border-radius: 50%;
//     /* position: relative; */
//     z-index: -1;
// `;

const StyledPeoplesLogo2 = styled.img`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* width: 100%; */
    width: 30vh;
    height: 30vh;
    /* border-radius: 30%; */
    /* position: relative; */
    z-index: -1;
    background-color: inherit;
    /* filter: blur(.2rem); */
    /* &before {
        top: -$b;
        right: -$b;
        bottom: -$b;
        left: -$b;
        background: inherit;
        border-color: transparent;
        background-clip: border-box;
        content: "";
        box-shadow: -10px -10px 10px 10px white inset;} */
`;

// // STYLED RED PLANET
// const StyledRedPlanet = styled.img`
//     width: 17vh;
//     height: 17vh;
//     border-radius: 50%;
//     object-fit: cover;
//     object-position: 50% 0;
//     cursor: pointer;
//     z-index: 1;
// `;

// STYLED BROWN PLANET 1
const StyledBrownPlanet1 = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    z-index: 1;
`;

// HUMAN FOOSBALL
const StyledHuman = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17vh;
    height: 17vh;
    line-height: 3vh;
    font-size: 20px;
    flex-wrap: wrap;
    border-radius: 50%;
    text-align: center;
    /* border: 1px solid white; */
    z-index: 0;
`;

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
    height: 90vh;
    position: fixed;
    background-color: white;
    margin: 0 0 50vh 80vh;
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
`;

const StyledHumanCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;

// STYLED RING PLANET
const StyledRingPlanet = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
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
    z-index: 0;
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
    margin: 5vh 0 0 0;
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
    top: 40%;
    left: 50%;
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
`;

const StyledMerchCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;

// STYLED WHITE PLANET
const StyledWhitePlanet = styled.img`
    width: 17vh;
    height: 17vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    cursor: pointer;
    z-index: 1;
`;

// HIS STORY
const StyledStory = styled.div`
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
    height: 100vh;
    position: fixed;
    background-color: white;
    margin: 5vh 0 0 0;
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
    top: 40%;
    left: 50%;
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
`;

const StyledStoryCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;

// CONTACT

const StyledContact = styled.div`
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
    z-index: 0;
`;

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

export default Home;
