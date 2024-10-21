import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const FieldDaze = () => {
  return (
    <StyledFieldDaze>
      <Nav/>
      <p>Field Daze Music Series</p>
      <a href="fielddazdsm.com" target="_blank">Field Daze Music Series Website</a>
    </StyledFieldDaze>
  );
};

const StyledFieldDaze = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default FieldDaze;
