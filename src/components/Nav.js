import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Tab from "@mui/material/Tab";
// import Tabs from "@mui/material/Tabs";
// import { useLocation } from "react-router-dom";

const Nav = () => {
    // const pathname = useLocation();

    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to="/Festivals">Back To Festivals</Link>
                </li>
                {/* <StyledLine/> */}
                <li>
                    <Link to="/blueribbon">Blue Ribbon Bacon Fest</Link>
                </li>
                <li>
                    <Link to="/hinterland">Hinterland Music Festival</Link>
                </li>
                <li>
                    <Link to="/515alive">515 Alive Music Festival</Link>
                </li>
                <li>
                    <Link to="/80-35">80-35 Music Festival</Link>
                </li>
                <li>
                    <Link to="/greenbelt">Greenbelt Music Festival</Link>
                </li>
                <li>
                    <Link to="/iowacraft">Iowa Craft Beer Festival</Link>
                </li>
                <li>
                    <Link to="/oktoberfest">Oktoberfest DSM</Link>
                </li>
                <li>
                    <Link to="/fielddaze">Field Daze Music Series</Link>
                </li>
                <li>
                    <Link to="/ragbrai">Ragbrai</Link>
                </li>
                <li>
                    <Link to="/truckin">Truckin' Food Truck Festival</Link>
                </li>
                <li>
                    <Link to="/knotfest">Knotfest</Link>
                </li>
                <li>
                    <Link to="/desmoinesarts">Des Moines Arts Festival</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.div`
    /* min-height: 5vh; */
    /* max-width: 30vh; */
    display: flex;
    /* flex-direction: column; */
    /* margin: auto; */
    /* justify-content: space-between; */
    /* align-items: center; */
    height: 100%;
    /* width: 100%; */
    margin-bottom: 1rem;
    padding-left: 1rem;
    /* padding: 1rem 5rem 1rem 1rem; */
    background: #282828;
    /* position: sticky; */
    top: 0;
    z-index: 10;
    /* border: 1px solid orange; */
    a{
        color: white;
        text-decoration: none;
        /* border: 1px solid white; */
    }
    ul{
        display: flex;
        width: 100%;
        /* flex-direction: column; */
        list-style: none;
        /* border: 1px solid green; */
    }
    li{
        padding: 1rem;
        position: relative;
        /* border: 1px solid red; */
        width: 12rem;
    }
`;

// const StyledLine = styled.div`
//     height: 2rem;
//     width: 1rem;
//     border: white;
// `;

export default Nav;
