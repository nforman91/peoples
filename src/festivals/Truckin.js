import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Truckin = () => {
  return (
    <>
      <Nav/>
      <StyledTruckin>
        <p>Truckin' Food Truck Festival</p>
        {/* <a href="" target="_blank">Truckin' Food Truck Festival Website</a> */}
      </StyledTruckin>
    </>
  );
};

const StyledTruckin = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 1rem;
`;

export default Truckin;
