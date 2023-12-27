import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Truckin = () => {
  return (
    <StyledTruckin>
      <Nav/>
      <p>Truckin' Food Truck Festival</p>
    </StyledTruckin>
  );
};

const StyledTruckin = styled.div`
  display: flex;
  height: 100%;
`;

export default Truckin;
