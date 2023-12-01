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
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;
