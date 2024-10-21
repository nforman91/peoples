import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const DesMoinesArts = () => {
  return (
    <StyledDesMoinesArts>
      <Nav/>
      <p>Des Moines Arts Festival</p>
    </StyledDesMoinesArts>
  );
};

const StyledDesMoinesArts = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default DesMoinesArts;
