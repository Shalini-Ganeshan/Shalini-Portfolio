import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.a)`
  width: calc(12rem + 20vw); /* Increase the width */
  height: 25rem; /* Increase the height */
  text-decoration: none;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    width: calc(13rem + 15vw); /* Adjust for mobile if necessary */
    height: 23rem; /* Adjust for mobile if necessary */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60%; /* Adjust as needed */
  object-fit: cover; /* Ensure the image covers the area */
  border: 1px solid transparent;

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
  font-size: 1.5rem; /* Reduce font size */
  border-bottom: 1px solid ${(props) => props.theme.text};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Further reduce font size on mobile */
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
    @media (max-width: 768px) {
    font-size: 0.5rem; /* Further reduce font size on mobile */
  }
`;

const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;
     @media (max-width: 768px) {
    font-size: 0.3rem; /* Further reduce font size on mobile */
  }
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeIn" }}
    >
      <Container variants={Item}>
        <Box target="_blank" href={`${link}`}>
          {/* Lazy loaded image */}
          <Image src={imgSrc} alt={name} loading="lazy" />
          <Title>{name}</Title>
          <HashTags>
            {tags.map((t, id) => (
              <Tag key={id}>#{t}</Tag>
            ))}
          </HashTags>
          <Date>{date}</Date>
        </Box>
      </Container>
    </motion.div>
  );
};

export default FeatComponent;
