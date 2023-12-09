import React, { useState } from "react";
import styled from "styled-components";
import galaxy from "../img/galaxy.jpg";
import peoples_bw_on_white_logo from "../img/peoples_bw_on_white_logo.jpg";
// import planets from "../planets/Planets";
// import Info from "../components/Info";

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
                {/* {planetsInfo &&
                    <Info planetsInfo={planetsInfo} setPlanetsInfo={setPlanetsInfo}/>
                } */}
                {/* <h4>Water Works Amphitheater</h4> */}
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
                    {/* <h4>Services</h4> */}
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
                    {/* <h4>HUSH</h4> */}
                    <StyledHushOnButton onClick={toggleHushModal}>Hush</StyledHushOnButton>
                    {hushModal && (
                        <StyledHushModal>
                            <StyledHushOverlay onClick={toggleHushModal}/>
                            <StyledHushModalContent>
                                <h2>Hello Modal!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                                <StyledHushCloseButton onClick={toggleHushModal}>CLOSE</StyledHushCloseButton>
                            </StyledHushModalContent>
                        </StyledHushModal>
                    )}
                </StyledHush>
            </StyledTwo>
            <StyledThree>
                <StyledTBD className="planet">
                    {/* <h4>TBD</h4> */}
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
                    {/* <h4>Festivals</h4> */}
                        <StyledFestivalsOnButton onClick={toggleFestivalsModal}>Festivals</StyledFestivalsOnButton>
                    {festivalsModal && (
                        <StyledFestivalsModal>
                            <StyledFestivalsOverlay onClick={toggleFestivalsModal}/>
                            <StyledFestivalsModalContent>
                                <h2>Hello Modal!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                                <StyledFestivalsCloseButton onClick={toggleFestivalsModal}>CLOSE</StyledFestivalsCloseButton>
                            </StyledFestivalsModalContent>
                        </StyledFestivalsModal>
                    )}
                    </StyledFestivals>
            </StyledThree>
            <StyledTwo>
                <StyledHuman className="planet">
                    {/* <h4>Human<br/>Foosball</h4> */}
                    <StyledHumanOnButton onClick={toggleHumanModal}>Human Foosball</StyledHumanOnButton>
                    {humanModal && (
                        <StyledHumanModal>
                            <StyledHumanOverlay onClick={toggleHumanModal}/>
                            <StyledHumanModalContent>
                                <h2>Hello Modal!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                                <StyledHumanCloseButton onClick={toggleHumanModal}>CLOSE</StyledHumanCloseButton>
                            </StyledHumanModalContent>
                        </StyledHumanModal>
                    )}
                    </StyledHuman>
                <StyledMerch className="planet">
                    {/* <h4>Merch</h4> */}
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
                    {/* <h4>His Story</h4> */}
                    <StyledStoryOnButton onClick={toggleStoryModal}>Story</StyledStoryOnButton>
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
    border: 1px solid white;
    position: relative;
    z-index: 2;
    h4{
        color: white;
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

const StyledWaterOnButton = styled.button`
    display: block;
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
    /* left: 50%; */
    line-height: 1.4;
    /* padding: 14px 28px; */
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
    border: 1px solid white;
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
    margin: 70vh 0 0 0;
`;

const StyledServicesOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledServicesModalContent = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
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
    font-size: 18px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

const StyledHushModal = styled.div`
    width: 100vh;
    height: 100vh;
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    position: fixed;
    border: 1px solid white;
    background-color: white;
    margin: 5vh 0 0 0;
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
    top: 40%;
    left: 50%;
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
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
    border: 1px solid white;
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
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    position: fixed;
    border: 1px solid white;
    background-color: white;
    margin: 5vh 0 0 0;
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
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
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

const StyledPeoplesLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
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
    width: 100vh;
    height: 100vh;
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    position: fixed;
    border: 1px solid white;
    background-color: white;
    margin: 5vh 0 0 0;
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
    top: 40%;
    left: 50%;
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
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
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    position: fixed;
    border: 1px solid white;
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
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    position: fixed;
    border: 1px solid white;
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
