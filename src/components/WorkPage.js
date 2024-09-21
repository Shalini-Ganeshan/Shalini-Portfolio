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

  const handleDragStart = (e) => {
    // Check if the left mouse button is pressed (button === 0 for left button)
    if (e.type === 'mousedown' && e.button !== 0) return;
    
    e.preventDefault(); // Prevent default behavior
    setIsDragging(true); // Start dragging only if left mouse button or touch start
    setStartX(e.touches ? e.touches[0].clientX : e.clientX); // Get the start X position
    setCurrentX(position); // Set the initial position for the drag
};

const handleDragMove = (e) => {
    if (!isDragging) return; // Do nothing unless we're actively dragging
    
    e.preventDefault(); // Prevent default behavior during the drag

    const x = e.touches ? e.touches[0].clientX : e.clientX; // Get the current X position
    const moveX = x - startX; // Calculate the movement difference
    const newPos = currentX + moveX; // Calculate the new translate position

    cardContainerRef.current.style.transform = `translateX(${newPos}px)`; // Move the cards while dragging
};

const handleDragEnd = (e) => {
    if (!isDragging) return; // Ensure we are dragging before ending

    setIsDragging(false); // Stop dragging on mouse release
    e.preventDefault(); // Prevent default behavior

    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const moveX = x - startX; // Calculate total movement during the drag

    let finalPosition = currentX + moveX; // Calculate the final translate position
    const containerWidth = cardContainerRef.current.scrollWidth;
    const windowWidth = window.innerWidth;

    // Clamp final position to prevent overscrolling
    if (finalPosition > 0) {
        finalPosition = 0; // Prevent going beyond the first card
    } else if (finalPosition < -(containerWidth - windowWidth)) {
        finalPosition = -(containerWidth - windowWidth); // Prevent going beyond the last card
    }

    setPosition(finalPosition); // Set the new position state
    cardContainerRef.current.style.transform = `translateX(${finalPosition}px)`; // Apply the final transform
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
