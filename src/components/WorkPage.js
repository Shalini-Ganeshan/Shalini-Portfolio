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
  overflow: hidden; /* Hide overflow for smooth swipe experience */
`;

const Main = styled.div`
  display: flex;
  width: 100%; /* Take up full width for responsiveness */
  cursor: grab;
  touch-action: pan-x; /* Allows touch gestures for horizontal swiping */
  user-select: none; /* Prevent text selection while dragging */
  overflow: hidden; /* Prevent overflow during drag */
`;

const CardContainer = styled.div`
  display: flex;
  height: 50vh;
  margin-left: 12rem;
  margin-right: 12rem;
  transition: transform 0.3s ease-out; /* Smooth animation when swiping stops */
  will-change: transform; /* Optimize for better performance */
  
  /* Add margin to the last card */
  & > *:last-child {
    margin-right: 24rem; /* Or however much space you want */
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
  const [position, setPosition] = useState(0); // Keeps track of the final translateX position
  const [isDragging, setIsDragging] = useState(false); // Flag for whether we're dragging
  const [startX, setStartX] = useState(0); // Initial X position
  const [currentX, setCurrentX] = useState(0); // Current X position during dragging

  const cardContainerRef = useRef(null);

  // When the user starts dragging (mouse or touch)
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX); // Get initial X on touch or mouse down
    setCurrentX(position); // Start from the current translateX position
  };

  // While dragging (mouse move or touch move)
  const handleDragMove = (e) => {
    if (!isDragging) return; // Only move when dragging
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const moveX = x - startX; // Calculate how much we've moved
    const newPos = currentX + moveX; // New position to be applied

    cardContainerRef.current.style.transform = `translateX(${newPos}px)`; // Apply the new transform in real-time
  };

  // When dragging stops (mouse or touch release)
  const handleDragEnd = (e) => {
    setIsDragging(false);
    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX; // Get the release X position
    const moveX = x - startX; // Calculate the total movement

    const finalPosition = currentX + moveX; // Calculate the final position
    setPosition(finalPosition); // Update the position state

    const containerWidth = cardContainerRef.current.scrollWidth; // Get the total width of the container
    const windowWidth = window.innerWidth; // Get the width of the viewport

    // Clamp the final position to prevent overscrolling
    let clampedPosition = finalPosition;
    if (finalPosition > 0) {
      clampedPosition = 0; // Prevent swiping beyond the first card
    } else if (finalPosition < -(containerWidth - windowWidth)) {
      clampedPosition = -(containerWidth - windowWidth); // Prevent swiping beyond the last card
    }

    setPosition(clampedPosition); // Set the final position state
    cardContainerRef.current.style.transform = `translateX(${clampedPosition}px)`; // Apply the final transform
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
          onMouseDown={handleDragStart} // Start dragging (mouse)
          onMouseMove={handleDragMove} // Continue dragging (mouse)
          onMouseUp={handleDragEnd} // End dragging (mouse)
          onMouseLeave={handleDragEnd} // End dragging if mouse leaves the area
          onTouchStart={handleDragStart} // Start dragging (touch)
          onTouchMove={handleDragMove} // Continue dragging (touch)
          onTouchEnd={handleDragEnd} // End dragging (touch)
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
