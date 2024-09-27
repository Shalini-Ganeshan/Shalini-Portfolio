// src/components/Loading.js

import React from 'react';
import styled from 'styled-components';

// Create a styled div for the loading message
const LoadingContainer = styled.div`
  position: fixed; /* Use fixed positioning to cover the entire screen */
  top: 0;
  left: 0;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
  display: flex; /* Use flexbox to center content */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  font-size: 24px;
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  color: rgb(252, 246, 244); /* Updated text color */
  background-color: black; /* Background color */
  z-index: 9999; /* Ensure it appears on top of other content */
   @media (max-width: 480px) {
    font-size: 16px; /* Even smaller font size for mobile phones */
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      Loading...
    </LoadingContainer>
  );
};

export default Loading;
