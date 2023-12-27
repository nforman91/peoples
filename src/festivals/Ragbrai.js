import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Ragbrai = () => {
  return (
    <StyledRagbrai>
      <Nav/>
      <p>Ragbrai</p>
    </StyledRagbrai>
  );
};

const StyledRagbrai = styled.div`
  display: flex;
  height: 100%;
`;

export default Ragbrai;
