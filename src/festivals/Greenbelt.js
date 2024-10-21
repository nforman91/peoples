import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Greenbelt = () => {
  return (
    <StyledGreenbelt>
      <Nav/>
      <p>Greenbelt Music Festival</p>
      <a href="greenbeltmusic.com" target="_blank">Greenbelt Music Festival Website</a>
    </StyledGreenbelt>
  );
};

const StyledGreenbelt = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Greenbelt;
