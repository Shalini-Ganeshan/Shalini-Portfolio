import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
position:relative;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
    @media (max-width: 1024px) {  /* Medium screen sizes */
    width: calc(12rem + 20vw);  /* Increase width */
  }

  @media (max-width: 768px) {  /* Small screen sizes */
    width: calc(14rem + 25vw);  /* Increase width even more */
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-size: contain; /* Ensures the entire image is visible */
  background-repeat: no-repeat; /* Prevents repeating of the image */
  background-position: center center; /* Centers the image within the container */
  width: 100%;
  height: 60%; /* Adjust the height as needed */
  border: 1px solid transparent; /* Initially transparent border */
  
  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body}; /* Border color on hover */
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
text-align:center;
  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const FeatComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <motion.div    initial={{ opacity: 0 }} 
    animate={{opacity:1}}
    transition={{ duration: 0.1, ease: "easeIn"}} 
 
    > 
    <Container variants={Item}>
      <Box target="_blank" href={`${link}`}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
    </motion.div>
  );
};

export default FeatComponent;
