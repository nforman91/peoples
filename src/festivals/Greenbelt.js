import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Greenbelt = () => {
  return (
    <StyledGreenbelt>
      <Nav/>
      <p>Greenbelt Music Festival</p>
    </StyledGreenbelt>
  );
};

const StyledGreenbelt = styled.div`
  display: flex;
  height: 100%;
`;

export default Greenbelt;
