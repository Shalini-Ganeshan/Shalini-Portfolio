import React, { useCallback} from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import { motion } from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte';
import Girl from '../assets/Images/girl.png';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`;

const Myself = styled.div`
  position: absolute;
  top: 2%;
  right: 0%;
  width: 45vw; /* Increased width */
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
    @media (max-width: 600px) {
    top: 0; 
    right: 0; 
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 0.8vw);
  backdrop-filter: blur(4px); 
  background: rgba(0, 0, 0, 0.0);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;


  @media (max-width: 480px) {
    width: 50vw; /* Adjust width for small screens */
    font-size: calc(0.5rem + 0.6vw); /* Reduce font size for small screens */
      height:60vh;
         left: 23%; 
         top:5rem;
         padding:1rem;
    
  }
`;

const ParticleBackground = () => {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.1,
            },
          },
        },
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#FFFFFF",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 0.3, max: 4 },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
       <motion.div    initial={{ opacity: 0 }} 
        animate={{opacity:1}}
        transition={{ duration: 0.1, ease: "easeIn"}} 
     
        > 
      <Box>
        <ParticleBackground />
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeIn", delay: 1 }}
        >
          <Myself>
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeIn", delay: 1 }}
            >
              <img src={Girl} alt="Girl" />
            </motion.div>
          </Myself>
          <Main
           
          >
            I’m a full-stack developer with a passion for frontend development. My enthusiasm for self-learning drives me to constantly explore new technologies and solve challenging coding problems, having tackled over 800+ so far.
            <br /> <br />
            I have developed a strong interest in creating personal projects and am also familiar with cloud technologies. This combination allows me to build dynamic, user-friendly applications and deploy them efficiently.
            <br /> <br />
            I am a Computer Science graduate from Panimalar Engineering College, maintaining a CGPA of 9.05. This academic foundation, combined with practical experience, fuels my drive to take on new projects and enhance my skills. Feel free to connect with me via my social links.
          </Main>
        </motion.div>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default AboutPage;
