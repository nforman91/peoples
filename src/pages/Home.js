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
            <StyledTwo>
                <StyledServices>Services</StyledServices>
                <StyledHush>HUSH</StyledHush>
            </StyledTwo>
            <StyledTBD>TBD</StyledTBD>
            <StyledPeoples><img src={peoples_bw_on_white_logo} alt="People's Productions logo"/></StyledPeoples>
            <StyledFestivals>Festivals</StyledFestivals>
            
            {/* <Planets>HUSH</Planets> */}
            
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

const StyledTwo = styled.div`
    display: flex;
    justify-content: space-between;
    width: max-content;
`;

const StyledServices = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vh;
    height: 10vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
    margin: 5vh 0 0 5vh;
`;

const StyledHush = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vh;
    height: 10vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
    margin: 5vh 0 0 130vh;
`;

const StyledTBD = styled.div`
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
    margin: 5vh 0 0 5vh;
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
