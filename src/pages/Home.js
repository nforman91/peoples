import React, { useState } from "react";
import styled from "styled-components";
import galaxy from "../img/galaxy.jpg";
import peoples_bw_on_white_logo from "../img/peoples_bw_on_white_logo.jpg";

const Home = () => {
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal)
    }

    return (
        <>
        <StyledUniverse id="a" src={galaxy} alt="picture of a galaxy"></StyledUniverse>
            <StyledOne>
                <StyledWater className="planet"><h4>Water Works Amphitheater</h4></StyledWater>
                <StyledOnButton onClick={showModal}>Add Modal</StyledOnButton>
                {modal && (
                    <StyledModal>
                        <StyledOverlay onClick={showModal}/>
                        <StyledModalContent>
                            <h2>Hello Modal!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore quasi expedita cumque labore, esse dolore dolorem aliquid animi quibusdam quae a quia eaque, quam illo soluta minima debitis, et architecto accusantium. Saepe ipsam officia nobis sint, voluptate reprehenderit beatae, commodi inventore nam animi libero quaerat dolores eveniet molestiae unde!</p>
                            <StyledCloseButton onClick={showModal}>CLOSE</StyledCloseButton>
                        </StyledModalContent>
                    </StyledModal>
                )}
            </StyledOne>
            <StyledTwo>
                <StyledServices className="planet"><h4>Services</h4></StyledServices>
                <StyledHush className="planet"><h4>HUSH</h4></StyledHush>
            </StyledTwo>
            <StyledThree>
                <StyledTBD className="planet"><h4>TBD</h4></StyledTBD>
                <StyledPeoplesLogo src={peoples_bw_on_white_logo} alt="People's Productions logo"/>
                <StyledFestivals className="planet"><h4>Festivals</h4></StyledFestivals>
            </StyledThree>
            <StyledTwo>
                <StyledHuman className="planet"><h4>Human<br/>Foosball</h4></StyledHuman>
                <StyledMerch className="planet"><h4>Merch</h4></StyledMerch>
            </StyledTwo>
            <StyledOne>
                <StyledStory><h4>His Story</h4></StyledStory>
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

const StyledOnButton = styled.button`
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
`;

const StyledModal = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

const StyledModalContent = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    line-height: 1.4;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
`;

const StyledCloseButton = styled.button`
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

const StyledPeoplesLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
`;

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

export default Home;
