import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Oktoberfest = () => {
  return (
    <>
      <Nav/>
      <StyledOktoberfest>
        <p>Oktoberfest DSM</p>
        <a href="oktoberfestdsm.net" target="_blank">Oktoberfest DSM Website</a>
      </StyledOktoberfest>
    </>
  );
};

const StyledOktoberfest = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 1rem;
`;

export default Oktoberfest;
