import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const FieldDaze = () => {
  return (
    <StyledFieldDaze>
      <Nav/>
      <p>Field Daze Music Series</p>
    </StyledFieldDaze>
  );
};

const StyledFieldDaze = styled.div`
  display: flex;
  height: 100%;
`;

export default FieldDaze;
