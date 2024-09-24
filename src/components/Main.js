import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { YinYang } from './AllSvgs';
import Intro from './Intro';

const MainContainer = styled(motion.div)`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Resume = styled.a`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  left: calc(16rem + 3vw);
  text-decoration: none;
  z-index: 1;
`;

const BLOG = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 40%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
}`;

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${props => props.click ? 'none' : 'inline-block'};
    padding-top: 1rem;
  }
 svg {
    width: ${props => props.click ? '120px' : '200px'};
    height: ${props => props.click ? '120px' : '200px'};

    @media (max-width: 1024px) { // Medium screen size (e.g., tablets)
      width: ${props => props.click ? '60px' : '100px'};
      height: ${props => props.click ? '60px' : '100px'};
    }

    @media (max-width: 768px) { // Mobile screen size
      width: ${props => props.click ? '90px' : '150px'};
      height: ${props => props.click ? '90px' : '150px'};
    }
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${props => props.click ? '50%' : '0%'};
  height: ${props => props.click ? '100%' : '0%'};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
   const [click, setClick] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [exitDirection, setExitDirection] = useState('');
 const handleClick = () => setClick(!click);
  const handleExit = (direction) => {
    setIsExiting(true);
    setExitDirection(direction);
  };

  const handleUp = () => handleExit('up');
  const handleRight = () => handleExit('right');
  const handleLeft = () => handleExit('left');

  return (
    <MainContainer
      initial={{ opacity: [0, 1], transition: { duration: 3 } }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{
        x: exitDirection === 'right' ? [0, 2000] :
           exitDirection === 'left' ? [0, -2000] :
           exitDirection === 'up' ? [0, 0] : [0, 0],
        y: exitDirection === 'up' ? [0, -2000] : 0,
        opacity: 1,
        transition: { duration: 0.5 }
      }}
    >
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

       <Center click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                <span>click here</span>
            </Center>

        <Contact target="_blank" href="mailto:shaliniganeshan2004@gmail.com">
          <motion.h2
            initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </Contact>
        <Resume target="_blank" href="mailto:shaliniganeshan2004@gmail.com">
          <motion.h2
            initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Resume
          </motion.h2>
        </Resume>
        <BLOG to="/feats" onClick={handleLeft}>
          <motion.h2
            initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Feats
          </motion.h2>
        </BLOG>
        <WORK to="/work" onClick={handleRight}>
          <motion.h2
            initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about" onClick={handleUp}>
            <motion.h2
              initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
              animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills" onClick={handleUp}>
            <motion.h2
              initial={{ y: 200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
              animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skills
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
