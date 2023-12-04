import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Nav = () => {
    // const pathname = useLocation();

    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/waterworks">Water Works</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/hush">HUSH</Link>
                </li>
                <li>
                    <Link to="/tbd">TBD</Link>
                </li>
                <li>
                    <Link to="/festivals">Festivals</Link>
                </li>
                <li>
                    <Link to="/humanfoosball">Human Foosball</Link>
                </li>
                <li>
                    <Link to="/merch">Merch</Link>
                </li>
                <li>
                    <Link to="/hisstory">His Story</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 5vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 2rem;
        position: relative;
    }
`;

export default Nav;
