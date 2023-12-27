import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Music8035 = () => {
  return (
    <StyledMusic8035>
      <Nav/>
      <p>80-35 Music Festival</p>
    </StyledMusic8035>
  );
};

const StyledMusic8035 = styled.div`
  display: flex;
  height: 100%;
`;

export default Music8035;
