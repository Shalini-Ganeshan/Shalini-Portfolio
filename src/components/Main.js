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
;`

const Container = styled.div`
  padding: 2rem;
;`

const Contact = styled.a`
   color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(13rem + 2vw);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 1024px) {
    left: calc(9rem + 3vw);
  }
  @media (max-width: 800px) {
    left: calc(8.5rem + 4vw); 
    color:${props => props.click ? props.theme.body : props.theme.text};
    font-size:1rem;
  }
  @media (max-width: 500px) {
    left: calc(4.5rem + 4vw); 
    color:${props => props.click ? props.theme.body : props.theme.text};
    font-size:0.7rem;
  }
  ;`
const Resume = styled.a`
 color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 2rem;
left: calc(16rem + 3vw);
text-decoration: none;
z-index:1;
@media (max-width: 1024px) {
    left: calc(27rem + 3vw);
  }
    @media (max-width: 800px) {
  font-size:1rem;
 
  left: calc(32rem + 3vw);
}
    @media (max-width: 500px) {
  font-size:0.7rem;

  left: calc(14rem + 3vw);
}`


const BLOG = styled(NavLink)`
  color:${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 750px) {
    right: calc(0.4rem + 2vw); 
    font-size:1rem;
    color: ${props => props.click ? props.theme.body : props.theme.text};
  }
  @media (max-width: 500px) {
    right: calc(0.4rem + 2vw); 
    font-size:0.7rem;
    color: ${props => props.click ? props.theme.body : props.theme.text};
  text-shadow: ${props => props.click ? '1px 1px 2px black, 0 0 25px black, 0 0 5px black' : 'none'};
  }
;`


const WORK = styled(NavLink)`
  color: ${props => props.click ? props.theme.body : props.theme.text};
  position: absolute;
  top: 40%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 800px) {
    font-size:1rem;
 
  }
  @media (max-width: 500px) {
    font-size:0.7rem;

  }
 
;`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 600px) {
  font-size:0.7rem;
}
;`

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  @media (max-width: 800px) {
    font-size: 1rem;
    color: ${(props) => props.theme.text}; /* Always use theme.text on small screens */
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
    color: ${(props) => props.theme.text}; /* Always use theme.text on small screens */
  }
`;


const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
  @media (max-width: 600px) {
  font-size:0.7rem;
}
;`

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
};`

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

    @media (max-width: 1024px) { 
      width: ${props => props.click ? '60px' : '100px'};
      height: ${props => props.click ? '60px' : '100px'};
    }

    @media (max-width: 768px) { 
      width: ${props => props.click ? '60px' : '120px'};
      height: ${props => props.click ? '60px' : '120px'};
     
    }
    @media (max-width: 508px) { 
      width: ${props => props.click ? '60px' : '120px'};
      height: ${props => props.click ? '45px' : '100px'};
top: ${props => props.click ? '97%' : '50%'};
    }


     
  }
;`

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

  @media (max-width: 900px) {
    right: 0; /* Ensure the black part starts at the full width */
    width: 100%; /* Full width of the screen */
    height: ${props => props.click ? '50%' : '0%'}; /* Take 50% height when clicked */
    transition: width 0.5s ease, height 1s ease 0.5s; /* Ensure smooth transition */
  }
`;


const Main = () => {
  const [click, setClick] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [exitDirection, setExitDirection] = useState('');
   const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth < 768); // Check if the width is less than 768px
    };
    window.addEventListener('resize', updateMedia);
    updateMedia(); // Call it once to set the initial value

    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  
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
      initial={{ opacity: [0, 1], transition: { duration: 5 } }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{
        x: exitDirection === 'right' ? [0, 2000] :
           exitDirection === 'left' ? [0, -2000] :
           exitDirection === 'up' ? [0, 0] : [0, 0],
        y: exitDirection === 'up' ? [0, -2000] : 0,
        opacity: 1,
        transition: { duration: 1 }
      }}
    >
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
          <SocialIcons theme={isMobile ? 'light' : (click ? 'dark' : 'light')} />

        <Center click={click}>
          <YinYang onClick={() => handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
          <span>click here</span>
        </Center>

        <Contact target="_blank" href="mailto:shaliniganeshan2004@gmail.com" click={click}>
          <motion.h2
            initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </Contact>
        <Resume target="_blank" href="mailto:shaliniganeshan2004@gmail.com" click={click}>
          <motion.h2
            initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Resume
          </motion.h2>
        </Resume>
        <BLOG to="/feats" onClick={handleLeft} click={click}>
          <motion.h2
            initial={{ y: -200, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 1 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Feats
          </motion.h2>
        </BLOG>
        <WORK to="/work" click={click} onClick={handleRight}>
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
          <ABOUT to="/about" click={click} onClick={handleRight}>
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
