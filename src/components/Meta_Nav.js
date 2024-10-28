import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import peoples_logo_white from "../img/Peoples_transparent_white.png";

const Meta_Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to="/">
                        <StyledNavLogo src={peoples_logo_white} alt="people's logo"/>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/WaterWorks">Water Works Amphitheater</Link>
                </li>
                <li>
                    <Link to="/Vending">Vending Services</Link>
                </li>
                <li>
                    <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/HUSH">HUSH</Link>
                </li>
                <li>
                    <Link to="/Future">Future Projects</Link>
                </li>
                <li>
                    <Link to="/Festivals">Festivals</Link>
                </li>
                <li>
                    <Link to="/HumanFoosball">Human Foosball</Link>
                </li>
                <li>
                    <Link to="/Merch">Merch</Link>
                </li>
                <li>
                    <Link to="/HisStory">His Story</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.div`
    min-width: 30vh;
    /* max-width: 30vh; */
    display: flex;
    /* flex-direction: column; */
    height: 100%;
    padding-left: 1rem;
    background: #282828;
    top: 0;
    z-index: 10;
    overflow: auto;
    white-space: nowrap;
    a{
        color: white;
        text-decoration: none;
        display: inline-block;
        text-align: center;
    }
    ul{
        display: flex;
        /* flex-direction: column; */
        list-style: none;
    }
    li{
        padding: 1rem 1rem 1rem 0;
        position: relative;
    }
`;

const StyledNavLogo = styled.img`
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
`;

export default Meta_Nav;
