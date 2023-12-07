import React from "react";
// { useEffect }
import styled from "styled-components";
// import Planets from "../components/Planets";
import peoples_bw_on_white_logo from "../img/peoples_bw_on_white_logo.jpg";
// import HUSH_Logo_CMYK from "../img/";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <StyledHome>
            <StyledOne>
                <StyledWater className="planet"><Link to="/waterworks"><h4>Water Works Amphitheater</h4></Link></StyledWater>
            </StyledOne>
            <StyledTwo>
                <StyledServices className="planet"><Link to="/services"><h4>Services</h4></Link></StyledServices>
                <StyledHush className="planet"><Link to="/hush"><h4>HUSH</h4></Link></StyledHush>
            </StyledTwo>
            <StyledThree>
                <StyledTBD className="planet"><Link to="/tbd"><h4>TBD</h4></Link></StyledTBD>
                <StyledPeoplesLogo src={peoples_bw_on_white_logo} alt="People's Productions logo"/>
                <StyledFestivals className="planet"><Link to="/festivals"><h4>Festivals</h4></Link></StyledFestivals>
            </StyledThree>
            <StyledTwo>
                <StyledHuman className="planet"><Link to="/humanfoosball"><h4>Human Foosball</h4></Link></StyledHuman>
                <StyledMerch className="planet"><Link to="/merch"><h4>Merch</h4></Link></StyledMerch>
            </StyledTwo>
            <StyledOne>
                <StyledStory><Link to="/hisstory"><h4>His Story</h4></Link></StyledStory>
            </StyledOne>
            
            {/* <Planets>HUSH</Planets> */}
            
            {/* <StyledHush><img src={} alt="People's Productions logo"/></StyledHush> */}
        </StyledHome>
    );
};

const StyledHome = styled.div`
    background-color: black;
`;

const StyledOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    h4{
        color: white;
    }
    a{
        color: black;
        text-decoration: none;
    }
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
    h4{
        color: white
    };
    .planet:hover{
        margin-top: -1vh;
    }
    a{
        color: black;
        text-decoration: none;
    }
`;

const StyledTwo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid white;
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
    width: 12vh;
    height: 12vh;
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
    width: 12vh;
    height: 12vh;
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
    width: 12vh;
    height: 12vh;
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
    width: 12vh;
    height: 12vh;
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
    border: 1px solid white;
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
    border: 1px solid white;
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
    border: 1px solid white;
    a{
        color: black;
        text-decoration: none;
    }
`;

export default Home;
