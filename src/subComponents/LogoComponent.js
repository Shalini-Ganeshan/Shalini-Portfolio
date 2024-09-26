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
  font-size: 2.5rem; /* Default font size for large screens */

  /* For medium screen sizes (tablets, landscape) */
  @media (max-width: 1024px) {
    font-size: 2rem; /* Decrease font size */
    left: 1.5rem;
    top: 1.5rem;
  }

  /* For small screen sizes (mobile devices) */
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Further decrease font size */
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
