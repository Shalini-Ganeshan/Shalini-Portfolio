

import React from 'react';
import styled from 'styled-components';


const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; 
  display: flex;
  justify-content: center; 
  align-items: center;
  font-size: 24px;
  font-family: 'Karla', sans-serif;
  font-weight: 600;
  color: rgb(252, 246, 244);
  background-color: black; 
  z-index: 9999; 
   @media (max-width: 480px) {
    font-size: 16px;
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
