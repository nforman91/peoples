import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Truckin = () => {
  return (
    <StyledTruckin>
      <Nav/>
      <p>Truckin' Food Truck Festival</p>
      {/* <a href="" target="_blank">Truckin' Food Truck Festival Website</a> */}
    </StyledTruckin>
  );
};

const StyledTruckin = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Truckin;
