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
                {/* <li>
                    <Link to="/blueribbon">Blue Ribbon Bacon Fest</Link>
                </li> */}
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

const StyledNav = styled.div`
    /* min-height: 5vh; */
    max-width: 25vh;
    display: flex;
    /* flex-direction: column; */
    /* margin: auto; */
    /* justify-content: space-between; */
    /* align-items: center; */
    height: 100%;
    padding: 1rem 5rem 1rem 1rem;
    background: #282828;
    /* position: sticky; */
    top: 0;
    z-index: 10;
    border: 1px solid orange;
    a{
        color: white;
        text-decoration: none;
        border: 1px solid white;
    }
    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        border: 1px solid green;
    }
    li{
        padding: 1rem 1rem 1rem 0;
        position: relative;
        border: 1px solid red;
    }
`;

export default Nav;
