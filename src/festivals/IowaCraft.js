import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const IowaCraft = () => {
  return (
    <StyledIowaCraft>
      <Nav/>
      <p>Iowa Craft Beer Festival</p>
    </StyledIowaCraft>
  );
};

const StyledIowaCraft = styled.div`
  display: flex;
  height: 100%;
`;

export default IowaCraft;
