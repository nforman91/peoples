import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Hinterland = () => {
  return (
    <StyledHinterland>
        <Nav/>
        <p>Hinterland Music Festival</p>
        <a href="www.hinterlandiowa.com" target="_blank">Hinterland Music Festival Website</a>
    </StyledHinterland>
  );
};

const StyledHinterland = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Hinterland;
