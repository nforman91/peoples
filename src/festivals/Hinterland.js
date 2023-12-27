import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Hinterland = () => {
  return (
    <StyledHinterland>
        <Nav/>
        <p>Hinterland Music Festival</p>
    </StyledHinterland>
  );
};

const StyledHinterland = styled.div`
  display: flex;
  height: 100%;
`;

export default Hinterland;
