import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';

const FlipCard = styled(motion.div)`
  position: relative;
  width: 16rem;
  height: 40vh;
  perspective: 1000px;
  margin-right: 12rem;
`;
const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s ease; /* Smooth flipping transition */
  &:hover {
    transform: rotateY(180deg); /* Rotate the card when hovering */
  }
    

`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  transform:rotateY(0deg);
  justify-content: center;
  align-items: center;
   transition: transform 1s ease;
  border: 1px solid ${(props) => props.theme.body};
   
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border:solid ${(props) => props.theme.text};
  backface-visibility: hidden;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 1.5rem 2rem;
  border-radius: 0 50px 0 50px;
  transform: rotateY(180deg); /* Start rotated */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
   
`;



const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
  text-align: center;
  margin-bottom: 4rem;
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
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
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
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
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);
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

  return (
    <FlipCard key={id} variants={Item}>
      <FlipCardInner>
        <FlipCardFront>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </FlipCardFront>

        <FlipCardBack>
          <WorkImage src={image} alt={name} />
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
      </FlipCardInner>
    </FlipCard>
  );
};

export default Card;