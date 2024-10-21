import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Music8035 = () => {
  return (
    <StyledMusic8035>
      <Nav/>
      <p>80-35 Music Festival</p>
      <a href="80-35.com" target="_blank">80-35 Music Festival Website</a>
    </StyledMusic8035>
  );
};

const StyledMusic8035 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Music8035;
