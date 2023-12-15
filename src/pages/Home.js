import React, { useState } from "react";
import styled from "styled-components";
import galaxy from "../img/galaxy.jpg";
import peoples_bw_on_white_logo from "../img/peoples_bw_on_white_logo.jpg";
// import planets from "../planets/Planets";
// import Info from "../components/Info";
import blue_planet from "../img/blue_planet.jpg";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import ButtonMailTo from "../components/ButtonMailTo";

const Home = () => {
    const [waterModal, setWaterModal] = useState(false);
    const [servicesModal, setServicesModal] = useState(false);
    const [hushModal, setHushModal] = useState(false);
    const [tbdModal, setTbdModal] = useState(false);
    const [festivalsModal, setFestivalsModal] = useState(false);
    const [humanModal, setHumanModal] = useState(false);
    const [merchModal, setMerchModal] = useState(false);
    const [storyModal, setStoryModal] = useState(false);

    // const [planet, setPlanet] = useState();
    // const [planetsInfo, setPlanetsInfo] = useState(planets);

    const toggleWaterModal = () => {
        setWaterModal(!waterModal)
    }

    const toggleServicesModal = () => {
        setServicesModal(!servicesModal)
    }

    const toggleHushModal = () => {
        setHushModal(!hushModal)
    }

    const toggleTbdModal = () => {
        setTbdModal(!tbdModal)
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
        <StyledUniverse id="a" src={galaxy} alt="picture of a galaxy"></StyledUniverse>
            <StyledOne>
                <div className="StyledPlanet">
                    {}
                </div>
                <StyledWater className="planet">
                <StyledBluePlanet 
                    // src={blue_planet} alt="blue planet"
                />
                {/* {planetsInfo &&
                    <Info planetsInfo={planetsInfo} setPlanetsInfo={setPlanetsInfo}/>
                } */}
                <StyledWaterOnButton onClick={toggleWaterModal}>Water Works Amphitheater</StyledWaterOnButton>
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
                </StyledWater>
                
            </StyledOne>
            <StyledTwo>
                <StyledServices className="planet">
                    <StyledServicesOnButton onClick={toggleServicesModal}>Services</StyledServicesOnButton>
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
                    <StyledHushOnButton onClick={toggleHushModal}>Hush</StyledHushOnButton>
                    {hushModal && (
                        <StyledHushModal>
                            <StyledHushOverlay onClick={toggleHushModal}/>
                            <StyledHushModalContent>
                                <h4>HUSH</h4>
                                <p>HUSH – SILENT DISCO’S are the entertainment / party events sweeping the globe. This new sensation is a dance party with 3 DJ’s at the same time who are playing to a packed crowd in what appears to be total silence.  Participants all wear high-quality noise cancelling headphones and can choose between which DJ they like the best at any given moment.  It’s a spectacle to witness and an even bigger experience to participate in.  Think a packed room of people all grooving to their own beat or singing their favorite song at the top of their lungs with absolutely NO SOUND being played over amplified speakers.  This revolution started in Europe when creative rave organizers needed a solution to their late night parties being constantly shut down due to noise problems.  So they came up with this amazing idea of being able to throw dance parties with no amplified sound and it was an immediate smash hit.  It came to the United States via the festival circuit and it is now a staple part of many many music festivals around the county. We are very excited that we are now able to bring this technology to you at any location.  We do everything from large 15,000 person festivals to back yard / basement or office parties and everything in between.  We have never experienced anything so satisfying that is always a 100% home run with guests and neither will you.<br/><br/>Contact us at 
                                <ButtonMailTo label=" HUSHDSM " mailto="HUSHDSM@GMAIL.COM"/> 
                                for more details or a quote for your next unforgettable party.<br/><br/>Enough words …  Silent Discos are best described with video evidence</p>
                                <br/>
                                {/* <iframe src="https://www.youtube.com/watch?v=elAWsTOl0kM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video"/> */}
                                {/* <YouTube videoId="elAWsTOl0kM"/> */}
                                <ReactPlayer url="https://www.youtube.com/watch?v=elAWsTOl0kM"/>
                                <StyledHushCloseButton onClick={toggleHushModal}>CLOSE</StyledHushCloseButton>
                            </StyledHushModalContent>
                        </StyledHushModal>
                    )}
                </StyledHush>
            </StyledTwo>
            <StyledThree>
                <StyledTBD className="planet">
                    <StyledTbdOnButton onClick={toggleTbdModal}>Tbd</StyledTbdOnButton>
                    {tbdModal && (
                        <StyledTbdModal>
                            <StyledTbdOverlay onClick={toggleTbdModal}/>
                            <StyledTbdModalContent>
                                <h2>Hello Modal!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                                <StyledTbdCloseButton onClick={toggleTbdModal}>CLOSE</StyledTbdCloseButton>
                            </StyledTbdModalContent>
                        </StyledTbdModal>
                    )}
                    </StyledTBD>
                <StyledPeoplesLogo src={peoples_bw_on_white_logo} alt="People's Productions logo"/>
                <StyledFestivals className="planet">
                        <StyledFestivalsOnButton onClick={toggleFestivalsModal}>Festivals</StyledFestivalsOnButton>
                    {festivalsModal && (
                        <StyledFestivalsModal>
                            <StyledFestivalsOverlay onClick={toggleFestivalsModal}/>
                            <StyledFestivalsModalContent>
                                <h4>FESTIVALS</h4>
                                <p>FESTIVALS – Festival Season is our FAVORITE Season !!!  And People’s Productions has their hand in SO Many great festivals here in the Midwest.  We are the festival management Guru’s of Central Iowa.  We have a managing role in 10 different festivals over the course of the year.  We are here to promote the ones that we currently work with and fill you in our services for the ones that we don’t yet.  We are the experts in the field and bring a full staff for whatever is needed to facilitate the success of your event.  Whether you just need help with a couple of aspects of your event or need a managing director our crack staff is on top of everything in the Festie world and can bring you everything from talent procurement and production management to cost savings due to our large volume of events that we produce.  
Some of the services that we provide for various festivals : 
Talent Buying
Staging Operations
Production Management (Sound & Lights)
Vendor Coordination 
Infrastructure Procurement and Supervision 
Security Consultation
Entertainment Services
Volunteer Program Development 
Ticketing Oversight and Crowd Control 
Trash and Clean-Up Services
Marketing and Media Management 
Sponsorship Procurement
Stage Management 
Parking Services
Venue Liaison 

Some of the Festivals that we work with : 
Blue Ribbon Bacon Festival 
Hinterland Music Festival 
515 Alive Music Festival 
80-35 Music Festival 
Greenbelt Music Festival 
Iowa Craft Beer Festival
Oktoberfest DSM 
Field Daze Music Series
Ragbrai 
Truckin’ Food Truck Festival 
Des Moines Arts Festival
</p>
                                <StyledFestivalsCloseButton onClick={toggleFestivalsModal}>CLOSE</StyledFestivalsCloseButton>
                            </StyledFestivalsModalContent>
                        </StyledFestivalsModal>
                    )}
                    </StyledFestivals>
            </StyledThree>
            <StyledTwo>
                <StyledHuman className="planet">
                    <StyledHumanOnButton onClick={toggleHumanModal}>Human<br/>Foosball</StyledHumanOnButton>
                    {humanModal && (
                        <StyledHumanModal>
                            <StyledHumanOverlay onClick={toggleHumanModal}/>
                            <StyledHumanModalContent>
                                <h4>HUMAN FOOSBALL</h4>
                                <p>HUMAN FOOSBALL – Yep !  Its just like it sounds …  put a bunch of humans in a giant foosball table and let them kick their way to a championship !  If was only that simple …  but now it IS !  We have built the perfect mousetrap for your backyard party or company event.  Our giant foosball table is an exact replica of a standard foosball table but human sized.  It’s a 6 on 6 battle royale but there’s a no spinning your players rule because the players are all your family / friends / co-workers.  The 2 teams strap themselves into their respective poles and slide back and forth as a team “kicking” their way back and forth to score goals. It is a great activity for all ages …   We have been invited to everything from backyard birthday parties to middle school church functions and corporate team building retreats to St Patrick’s Day festivals and of course the World’s largest Bacon Festival.   We operate our Human Foosball Arena in a couple of different ways.  We can come set it up in your back yard / driveway / indoor gym or really anywhere that you have a 90’ x 40’ area for our layout.  It works on both grass or concrete or any inside surface.  We can either just set it up and let you enjoy at your leisure or we will come and manage it as a tournament complete with referee’s and a bracket system if you want to promote a competition.  Both options are crazy fun and enjoyable and something that your guests will be talking about for years to come.  
NEW IN 2024 !!! – We will be hosting a traveling bar league this fall !!! Contact us if you want to be a part of the fun with your team of 6 or if you want us to include your establishment as part of our traveling competition   HUMANFOOSBALL@GMAIL.COM 
</p>
                                <StyledHumanCloseButton onClick={toggleHumanModal}>CLOSE</StyledHumanCloseButton>
                            </StyledHumanModalContent>
                        </StyledHumanModal>
                    )}
                    </StyledHuman>
                <StyledMerch className="planet">
                    <StyledMerchOnButton onClick={toggleMerchModal}>Merch</StyledMerchOnButton>
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
                    <StyledStoryOnButton onClick={toggleStoryModal}>His Story</StyledStoryOnButton>
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
                </StyledStory>
            </StyledOne>
        </>    
    );
};

const StyledUniverse = styled.img`
    background-image: url("../img/galaxy.jpg");
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    /* opacity: 10%; */
`;

const StyledOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid white; */
    position: relative;
    z-index: 2;
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


// WATER WORKS AMPHITHEATER
const StyledWater = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17vh;
    height: 17vh;
    /* background-color: white; */
    /* background-image: url("../img/blue_planet.jpg"); */
    /* filter: blur(1rem); */
    line-height: 3vh;
    font-size: 20px;
    flex-wrap: wrap;
    border-radius: 50%;
    text-align: center;
    border: 1px solid white;
    .planet:hover{
        cursor: pointer;
        /* margin-top: -1vh; */
    }
`;

const StyledBluePlanet = styled.img`
    width: 17vh;
    height: 17vh;
    background-image: url("../img/blue_planet.jpg");
    border-radius: 50%;
`;

const StyledWaterOnButton = styled.button`
    display: block;
    font-family: 'Rubik Bubbles';
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

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


// SERVICES
const StyledServices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17vh;
    height: 17vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid white;
`;

const StyledServicesOnButton = styled.button`
    display: block;
    font-family: 'Silkscreen';
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

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


// HUSH
const StyledHush = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17vh;
    height: 17vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid white;
`;

const StyledHushOnButton = styled.button`
    display: block;
    font-family: 'Permanent Marker';
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

const StyledHushModal = styled.div`
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
    padding: 5vh;
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
        color: white;
    }
    a{
        color: black;
        text-decoration: none;
    }
`;


// TBD
const StyledTBD = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17vh;
    height: 17vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid white;
`;

const StyledTbdOnButton = styled.button`
    display: block;
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

const StyledTbdModal = styled.div`
    width: 100vh;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    border: 1px solid white;
    background-color: white;
    margin: 5vh 0 0 140vh;
`;

const StyledTbdOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledTbdModalContent = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
`;

const StyledTbdCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
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
    border-radius: 50%;
    text-align: center;
    border: 1px solid white;
`;

const StyledFestivalsOnButton = styled.button`
    display: block;
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

const StyledFestivalsModal = styled.div`
    width: 100vh;
    height: 100vh;
    position: fixed;
    border: 1px solid white;
    background-color: white;
    margin: 5vh 0 0 0;
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
    top: 40%;
    left: 50%;
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
`;

const StyledFestivalsCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`;


// PEOPLE'S LOGO
const StyledPeoplesLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    /* position: relative; */
    z-index: -1;
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
    border: 1px solid white;
`;

const StyledHumanOnButton = styled.button`
    display: block;
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

const StyledHumanModal = styled.div`
    width: 150vh;
    height: 50vh;
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
    position: absolute;
    /* top: 40%; */
    /* left: 50%; */
    line-height: 1.4;
    padding: 5vh;
    border-radius: 3px;
    /* max-width: 600px; */
    min-width: 300px;
`;

const StyledHumanCloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
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
    border-radius: 50%;
    text-align: center;
    border: 1px solid white;
`;

const StyledMerchOnButton = styled.button`
    display: block;
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

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
    border: 1px solid white;
`;

const StyledStoryOnButton = styled.button`
    display: block;
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

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

export default Home;
