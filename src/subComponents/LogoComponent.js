import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => (props.color === 'dark' ? DarkTheme.text : DarkTheme.body)};
  font-family: 'Pacifico', cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  font-size: 2.5rem; 

  @media (max-width: 1024px) {
    font-size: 2rem; 
    left: 1.5rem;
    top: 1.5rem;
  }


  @media (max-width: 768px) {
    font-size: 1.5rem; 
    left: 1rem;
    top: 1rem;
  }
`;

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      SG
    </Logo>
  );
};

export default LogoComponent;
