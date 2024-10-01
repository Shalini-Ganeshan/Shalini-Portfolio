import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile-img.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.body} 50%,
    ${(props) => props.theme.text} 50%
  ) bottom,
  linear-gradient(
    to right,
    ${(props) => props.theme.body} 50%,
    ${(props) => props.theme.text } 50%
  ) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 51vw;
    height: 72vh;
    background: none; /* Remove background gradient */
    border: none; /* Remove all borders to avoid visual lines */
  }
  
  @media (max-width: 568px) {
    height: 65vh;
     left: 43%;
  }
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .pic {
    width: 100%;
    height: auto;
  }

  // Media query to adjust layout for medium and small screens
  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    
    &:nth-child(1) {
      background-color: ${(props) => props.theme.text};
      align-items:center;
      height:50%;
      border-top: 2px solid ${(props) => props.theme.body};
      border-right:2px solid ${(props) => props.theme.body };
      border-left:2px solid ${(props) => props.theme.body };
    }

    &:nth-child(2) {
      background-color: ${(props) => props.theme.body};
      border-bottom: 2px solid ${(props) => props.theme.text};
      border-right:2px solid ${(props) => props.theme.text };
      border-left:2px solid ${(props) => props.theme.text };
    }

    .pic {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 93%;
    }
      @media (max-width: 568px) {
    width: 110%;
      height: 50%;
    
    &:nth-child(1) {
      background-color: ${(props) => props.theme.text};
      align-items:center;
      height:50%;
      border-top: 2px solid ${(props) => props.theme.body};
      border-right:2px solid ${(props) => props.theme.body };
      border-left:2px solid ${(props) => props.theme.body };
    }

    &:nth-child(2) {
      background-color: ${(props) => props.theme.body};
      border-bottom: 2px solid ${(props) => props.theme.text};
      border-right:2px solid ${(props) => props.theme.text };
      border-left:2px solid ${(props) => props.theme.text };
    }

    .pic {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 130%; 
      
    }
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 3rem;
  margin-bottom:2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  // Media query for medium and small screens to style text part in the black area
  @media (max-width: 768px) {
    color: ${(props) => props.theme.body};
    text-align: center;
  }
  @media (max-width: 568px) {
    color: ${(props) => props.theme.body};
    font-size: calc(1em + 1.2vw);
    text-align: center;
    padding: 1rem;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '72vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Shalini.</h3>
          <p>
            Computer Science student and a full stack developer, motivated by
            self-learning and solving coding challenges.
          </p>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
