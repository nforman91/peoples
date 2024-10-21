import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const IowaCraft = () => {
  return (
    <>
      <Nav/>
      <StyledIowaCraft>
        <p>Iowa Craft Beer Festival</p>
        <a href="iowacraftbrewfestival.com" target="_blank">Iowa Craft Beer Festival Website</a>
      </StyledIowaCraft>
    </>
  );
};

const StyledIowaCraft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 1rem;
`;

export default IowaCraft;
