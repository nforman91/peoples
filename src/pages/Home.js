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
            <StyledWater><Link to="/waterworks">Water Works Amphitheater</Link></StyledWater>
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
            <StyledStory><Link to="/hisstory">His Story</Link></StyledStory>
            {/* <Planets>HUSH</Planets> */}
            
            {/* <StyledHush><img src={} alt="People's Productions logo"/></StyledHush> */}
        </div>
    );
};

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
    border: 1px solid black;
    margin: 2vh 0 0 78vh;
    a{
        color: black;
        text-decoration: none;
    }
`;

const StyledTwo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    width: 12vh;
    height: 12vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
`;

const StyledHush = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12vh;
    height: 12vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
`;

const StyledThree = styled.div`
    display: flex;
    justify-content: space-around;
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
    width: 12vh;
    height: 12vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
`;

const StyledFestivals = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12vh;
    height: 12vh;
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
    width: 40vh;
    height: 40vh;
`;

const StyledHuman = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12vh;
    height: 12vh;
    line-height: 3vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
`;

const StyledMerch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12vh;
    height: 12vh;
    line-height: 5vh;
    font-size: 20px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
`;

const StyledStory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12vh;
    height: 12vh;
    line-height: 5vh;
    font-size: 20px;
    flex-wrap: wrap;
    border-radius: 50%;
    text-align: center;
    border: 1px solid black;
    margin: 0 0 0 80vh;
    a{
        color: black;
        text-decoration: none;
    }
`;

export default Home;
