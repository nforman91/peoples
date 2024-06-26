import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Ragbrai = () => {
  return (
    <StyledRagbrai>
      <Nav/>
      <p>Ragbrai</p>
      <a href="ragbrai.com" target="_blank">Ragbrai Website</a>
    </StyledRagbrai>
  );
};

const StyledRagbrai = styled.div`
  display: flex;
  height: 100%;
`;

export default Ragbrai;
