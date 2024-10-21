import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Music8035 = () => {
  return (
    <>
      <Nav/>
      <StyledMusic8035>
        <p>80-35 Music Festival</p>
        <a href="80-35.com" target="_blank">80-35 Music Festival Website</a>
      </StyledMusic8035>
    </>
  );
};

const StyledMusic8035 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 1rem;
`;

export default Music8035;
