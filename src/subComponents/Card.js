import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import '../components/css/Card.css';

const FlipCard = styled(motion.div)`
  position: relative;
  width: 16rem;
  height: 40vh;
  margin-right: 12rem;

  @media (max-width: 768px) {
    width: 12rem; // Adjust for medium screens
    height: 40vh; // Adjust height
    margin-right: 12rem; // Adjust margin
  }

  @media (max-width: 480px) {
    width: 11rem; // Adjust for mobile screens
    height: 33vh; // Adjust height
    margin-right: 10rem; // Remove margin
  }
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1rem 1.5rem; // Reduced padding
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border: 1px solid ${(props) => props.theme.body};
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: solid ${(props) => props.theme.text};
  backface-visibility: hidden;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 1rem 1.5rem; // Reduced padding
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: calc(1em + 0.3vw); // Reduced size
  text-align: center;
  margin-bottom: 2rem; // Reduced margin

  @media (max-width: 768px) {
    font-size: calc(0.9em + 0.3vw); // Further adjust for medium screens
  }

  @media (max-width: 480px) {
    font-size: calc(0.8em + 0.3vw); // Further adjust for mobile screens
  }
`;

const Description = styled.h2`
  font-size: calc(0.7em + 0.2vw); // Reduced size
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  text-align: center;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.text};
  margin-bottom: 1rem;
`;

const Tags = styled.span`
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  margin-right: 0.5rem; // Reduced margin
  font-size: calc(0.7em + 0.2vw); // Reduced size
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  text-decoration: none;
  padding: 0.4rem calc(1.5rem + 1vw); // Reduced padding
  border-radius: 0 0 0 50px;
  font-size: calc(0.9em + 0.3vw); // Adjusted size

  @media (max-width: 768px) {
    font-size: calc(0.8em + 0.3vw); // Further adjust for medium screens
  }

  @media (max-width: 480px) {
    font-size: calc(0.7em + 0.2vw); // Further adjust for mobile screens
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  background-color: ${(props) => props.theme.body};
  svg {
    fill: white;
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github, image } = props.data;

  const [isFlipped, setIsFlipped] = useState(false);

  // New handler for toggling the flip state
  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FlipCard
        key={id}
        variants={Item}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onTouchStart={toggleFlip} // Toggle flip on touch
      >
        <FlipCardFront>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </FlipCardFront>
      </FlipCard>

      <FlipCard
        key={id}
        variants={Item}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onTouchStart={toggleFlip} // Toggle flip on touch
      >
        <FlipCardBack>
          <WorkImage src={image} alt={name} loading="lazy" />
          <Line />
          <Tags>
            {tags.map((t, id) => (
              <Tag key={id}>#{t}</Tag>
            ))}
          </Tags>
          <Footer>
            <Link href={demo} target="_blank">Visit</Link>
            <Git href={github} target="_blank">
              <Github width={30} height={30} />
            </Git>
          </Footer>
        </FlipCardBack>
      </FlipCard>
    </ReactCardFlip>
  );
};

export default Card;
