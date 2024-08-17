import React from "react";
import styled from "styled-components";

// IMAGES
import galaxy2 from "../img/galaxy2.jpg";
import Peoples_transparent_white from "../img/Peoples_transparent_white.png";

// PAGES
import WaterWorks from "../pages/WaterWorks";
import Vending from "../pages/Vending";
import Services from "../pages/Services";
import HUSH from "../pages/HUSH";
import Future from "../pages/Future";
import Festivals from "../pages/Festivals";
import HumanFoosball from "../pages/HumanFoosball";
import Merch from "../pages/Merch";
import HisStory from "../pages/HisStory";
import Contact from "../pages/Contact";

import { createTheme, ThemeProvider } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/core/Typography";

const theme = createTheme({
    typography: {
        fontFamily: [
            "Permanent Marker"
        ].join(','),
        fontSize: 20,
        cursor: "pointer",
        color: 'yellow',
        text: 'yellow',
    },
});

const Home = () => {
    return (
        <>
        <StyledUniverse id="a" src={galaxy2} alt="picture of a galaxy"/>
            <ThemeProvider theme={theme}>
                <StyledOne>
                    <WaterWorks/>
                    <Vending/>
                </StyledOne>
                <StyledTwo>
                    <Services/>
                    <HUSH/>
                </StyledTwo>
                <StyledThree>
                    <Future/>
                    <StyledPeoplesLogo2 src={Peoples_transparent_white} alt="People's Productions logo2 white"/>
                    <Festivals/>
                </StyledThree>
                <StyledTwo>
                    <HumanFoosball/>
                    <Merch/>
                </StyledTwo>
                <StyledOne>
                    {/* <HisStory/> */}
                    {/* <Contact/> */}
                </StyledOne>
            </ThemeProvider>
        </>    
    );
};

const StyledUniverse = styled.img`
    background-image: url("../img/galaxy.jpg");
    width: 100%;
    height: 100vh;
    margin: 0;
    position: absolute;
    z-index: -1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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

const StyledTwo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid white; */
    position: relative;
    z-index: 0;
    h4{
        /* color: white; */
    }
    a{
        color: black;
        text-decoration: none;
    }
`;

const StyledThree = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border: 1px solid white; */
    position: relative;
    z-index: 1;
    h4{
        /* color: white; */
    }
    a{
        color: black;
        text-decoration: none;
    }
`;

const StyledPeoplesLogo2 = styled.img`
    display: flex;
    z-index: 0;
    width: 30vh;
    height: 30vh;
    /* position: relative; */
    /* justify-content: center; */
    /* align-items: center; */
    /* width: 100%; */
    /* border-radius: 30%; */
    /* background-color: inherit; */
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

export default Home;
