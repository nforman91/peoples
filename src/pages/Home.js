import React from "react";
// { useEffect }
import styled from "styled-components";
// import Planets from "../components/Planets";
import peoples_bw_on_white_logo from "../img/peoples_bw_on_white_logo.jpg";
// import HUSH_Logo_CMYK from "../img/";

const Home = () => {
    return (
        <div>
            <StyledWaterWorks>Water Works Amphitheater</StyledWaterWorks>
            <StyledHush>HUSH</StyledHush>
            <StyledFestivals>Festivals</StyledFestivals>
            {/* <Planets>HUSH</Planets> */}
            <StyledPeoples><img src={peoples_bw_on_white_logo} alt="People's Productions logo"/></StyledPeoples>
            {/* <StyledHush><img src={} alt="People's Productions logo"/></StyledHush> */}
        </div>
    );
};

const StyledWaterWorks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vh;
    height: 10vh;
    line-height: 5vh;
    font-size: 20px;
    flex-wrap: wrap;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
    margin: 2vh 0 0 80vh;
`;

const StyledHush = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vh;
    height: 10vh;
    line-height: 5vh;
    font-size: 20px;
    flex-wrap: wrap;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
    margin: 5vh 0 0 130vh;
`;

const StyledFestivals = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vh;
    height: 10vh;
    line-height: 5vh;
    font-size: 20px;
    flex-wrap: wrap;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
    margin: 10vh 0 0 150vh;
`;

const StyledPeoples = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vh;
    height: 20vh;
    border: 1px solid black;
    margin: auto;
`;

export default Home;
