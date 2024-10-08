import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import { FeatsData } from '../data/FeatsData';
import FeatComponent from './FeatComponent';
import AnchorComponent from '../subComponents/Anchor';
import BigTitle from "../subComponents/BigTitlte";
import { motion } from 'framer-motion';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Feats = () => {
  const [numbers, setNumbers] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateNumbers = () => {
      let num = (window.innerHeight - 70) / 30;
      setNumbers(parseInt(num));
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700); 
    };

    
    updateNumbers();
    handleResize();

    
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", updateNumbers);

  
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", updateNumbers);
    };
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        
        
        {!isMobile && <AnchorComponent number={numbers} />}
        
        <Center>
          <Grid>
            {FeatsData.map(blog => (
              <FeatComponent key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
        <BigTitle text="FEATS" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default Feats;
