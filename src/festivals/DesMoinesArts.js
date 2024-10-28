import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const DesMoinesArts = () => {
  return (
    <>
      <Nav/>
      <StyledDesMoinesArts>
        <p>Des Moines Arts Festival</p>
      </StyledDesMoinesArts>
    </>
  );
};

const StyledDesMoinesArts = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 1rem;
`;

export default DesMoinesArts;
