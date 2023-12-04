import React from "react";
// { useEffect }
import styled from "styled-components";
// import Planets from "../components/Planets";
import peoples_bw_on_white_logo from "../img/peoples_bw_on_white_logo.jpg";
// import HUSH_Logo_CMYK from "../img/";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <StyledOne><Link to="/waterworks">Water Works Amphitheater</Link></StyledOne>
            <StyledTwo>
                <StyledServices><Link to="/services">Services</Link></StyledServices>
                <StyledHush><Link to="/hush">HUSH</Link></StyledHush>
            </StyledTwo>
            <StyledThree>
                <StyledTBD><Link to="/tbd">TBD</Link></StyledTBD>
                <StyledPeoplesLogo src={peoples_bw_on_white_logo} alt="People's Productions logo"/>
                <StyledFestivals><Link to="/festivals">Festivals</Link></StyledFestivals>
            </StyledThree>
            <StyledTwo>
                <StyledHuman><Link to="/humanfoosball">Human Foosball</Link></StyledHuman>
                <StyledMerch><Link to="/merch">Merch</Link></StyledMerch>
            </StyledTwo>
            <StyledOne><Link to="/hisstory">His Story</Link></StyledOne>
            {/* <Planets>HUSH</Planets> */}
            
            {/* <StyledHush><img src={} alt="People's Productions logo"/></StyledHush> */}
        </div>
    );
};

const StyledOne = styled.div`
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
    a{
        color: black;
        text-decoration: none;
    }
`;

const StyledTwo = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    a{
        color: black;
        text-decoration: none;
    }
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

const StyledThree = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    a{
        color: black;
        text-decoration: none;
    }
`;

const StyledTBD = styled.div`
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

const StyledFestivals = styled.div`
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
`;

const StyledPeoplesLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vh;
    height: 50vh;
    margin: auto;
`;

const StyledHuman = styled.div`
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

const StyledMerch = styled.div`
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

export default Home;
