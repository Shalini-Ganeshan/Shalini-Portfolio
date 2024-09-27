import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";
import { motion } from "framer-motion";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
`;

const Main = styled.div`
  display: flex;
  width: 100%; 
  cursor: grab;
  touch-action: pan-x; 
  user-select: none; 
  overflow: hidden; 
`;

const CardContainer = styled.div`
  display: flex;
  height: 50vh;
  margin-left: 12rem;
  margin-right: 12rem;
  transition: transform 0.3s ease-out;
  will-change: transform; 
 
  & > *:last-child {
    margin-right: 24rem; 
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkPage = () => {
  const [position, setPosition] = useState(0); 
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0); 
  const [currentX, setCurrentX] = useState(0); 

  const cardContainerRef = useRef(null);

  const handleDragStart = (e) => {
  
    if (e.type === 'mousedown' && e.button !== 0) return;
    
    e.preventDefault();
    setIsDragging(true); 
    setStartX(e.touches ? e.touches[0].clientX : e.clientX); 
    setCurrentX(position);
};

const handleDragMove = (e) => {
    if (!isDragging) return; 
    
    e.preventDefault(); 

    const x = e.touches ? e.touches[0].clientX : e.clientX; 
    const moveX = x - startX; 
    const newPos = currentX + moveX; 

    cardContainerRef.current.style.transform = `translateX(${newPos}px)`; 
};

const handleDragEnd = (e) => {
    if (!isDragging) return;

    setIsDragging(false);
    e.preventDefault(); 

    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const moveX = x - startX;

    let finalPosition = currentX + moveX; 
    const containerWidth = cardContainerRef.current.scrollWidth;
    const windowWidth = window.innerWidth;

    if (finalPosition > 0) {
        finalPosition = 0; 
    } else if (finalPosition < -(containerWidth - windowWidth)) {
        finalPosition = -(containerWidth - windowWidth); 
    }

    setPosition(finalPosition);
    cardContainerRef.current.style.transform = `translateX(${finalPosition}px)`; 
};


  return (
    <ThemeProvider theme={DarkTheme}>
      <motion.div    initial={{ opacity: 0 }} 
                animate={{opacity:1}}
                transition={{ duration: 0.6, ease: "easeIn"}} 
             
                > 
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2,ease:"easeIn",delay: 1}}   
          onMouseDown={handleDragStart} 
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd} 
          onMouseLeave={handleDragEnd} 
          onTouchStart={handleDragStart} 
          onTouchMove={handleDragMove} 
          onTouchEnd={handleDragEnd} 
        >
       
       <CardContainer ref={cardContainerRef}    
       >
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </CardContainer>
        </Main>

        <Rotate>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
        <BigTitlte text="Swipe.." top="75%" right="10%" />
      </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default WorkPage;
