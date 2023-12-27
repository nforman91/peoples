import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Oktoberfest = () => {
  return (
    <StyledOktoberfest>
      <Nav/>
      <p>Oktoberfest DSM</p>
    </StyledOktoberfest>
  );
};

const StyledOktoberfest = styled.div`
  display: flex;
  height: 100%;
`;

export default Oktoberfest;
