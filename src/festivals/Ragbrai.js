import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Ragbrai = () => {
  return (
    <>
      <Nav/>
      <StyledRagbrai>
        <p>Ragbrai</p>
        <a href="ragbrai.com" target="_blank">Ragbrai Website</a>
      </StyledRagbrai>
    </>
  );
};

const StyledRagbrai = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 1rem;
`;

export default Ragbrai;
