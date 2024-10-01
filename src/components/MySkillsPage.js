import React,{useCallback}  from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import { motion } from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
 
    @media (max-width: 768px) {
     height: 140vh;
   flex-direction: column; 
  }
 
`;
const Main = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body}; 
  padding: 2rem;
  width: 30vw; 
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 60vw; 
    height: auto; 
    margin: 1rem 0; 
     top:2rem;
  }

  @media (max-width: 480px) {
    width: 65vw; 
    height: auto;
    top:5rem;
  }

  background: rgba(0, 0, 0, 0.0);

  &:hover {
    color: ${props => props.theme.body};
    background-color: rgba(0, 0, 0, 0.6); 
  }
`;


const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled(motion.div)`
  color: ${props => props.theme.text};
  font-size: calc(0.4em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul, p {
    margin-left: 2rem;
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
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
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
            value: 90,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#555555", 
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: { min: 0.7, max: 3 },
          },
          move: {
            enable: true,
            speed: 5, 
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          links: {
            enable: true,
            distance: 145,
            color: "#555555",
            opacity: 0.7, 
            width: 0.5, 
          },
        },
        detectRetina: true,
      }}
    />
  );
};

const MySkillsPage = () => {
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <ThemeProvider theme={lightTheme}>
       <motion.div    initial={{ opacity: 0 }} 
                animate={{opacity:1}}
                transition={{ duration: 0.1, ease: "easeIn"}} 
             
                > 
      <Box >
        <ParticleBackground />
        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />

        <Main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <Title>
            <Design width={40} height={40} /> Frontend Development
          </Title>
          <Description
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 1 }}
          >
            It excites me as it blends creativity with technology to create seamless, dynamic user experiences, allowing to bring new ideas to life.
          </Description>
          <Description
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 1.5 }}
          >
            <strong>Skills</strong>
            <p>Html, Css, Js, React, Next, Redux, Framer Motion, Bootstrap, Tailwind, Firebase.</p>
          </Description>
          <Description
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 2 }}
          >
            <strong>Tools</strong>
            <p>VScode, Github, Figma.</p>
          </Description>
        </Main>

        <Main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }}
        >
          <Title>
            <Develope width={40} height={40} /> Backend Development
          </Title>
          <Description
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 2 }}
          >
            I love the idea of working behind the scenes to make everything tick, it lets me dive into managing databases and building systems from the ground up.
          </Description>
          <Description
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 2.5 }}
          >
            <strong>Skills</strong>
            <p>Java, SpringBoot, MongoDB, Node.js, MySQL, GraphQL.</p>
          </Description>
          <Description
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.2, delay: 3 }}
          >
            <strong>Tools</strong>
            <p>IntelliJ, VScode.</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default MySkillsPage;
