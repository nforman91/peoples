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
                    <Link to="/blueribbon">Blue Ribbon Bacon Fest</Link>
                </li>
                <li>
                    <Link to="/hinterland">Hinterland</Link>
                </li>
                <li>
                    <Link to="/515alive">515 Alive</Link>
                </li>
                <li>
                    <Link to="/80-35">80-35</Link>
                </li>
                <li>
                    <Link to="/greenbelt">Greenbelt</Link>
                </li>
                <li>
                    <Link to="/iowacraft">Iowa Craft Beer</Link>
                </li>
                <li>
                    <Link to="/oktoberfest">Oktoberfest DSM</Link>
                </li>
                <li>
                    <Link to="/fielddaze">Field Daze</Link>
                </li>
                <li>
                    <Link to="/ragbrai">Ragbrai</Link>
                </li>
                <li>
                    <Link to="/truckin">Truckin' Food Truck Fest</Link>
                </li>
                <li>
                    <Link to="/desmoinesarts">Des Moines Arts Fest</Link>
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
