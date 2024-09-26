import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github, LinkedIn, Facebook } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media (max-width: 1024px) { /* Medium screen sizes */
    left: 1.5rem;
  }

  @media (max-width: 768px) { /* Small screen sizes */
    left: 1rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};

  @media (max-width: 1024px) { /* Medium screen sizes */
    height: 6rem;
  }

  @media (max-width: 768px) { /* Small screen sizes */
    height: 4rem;
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  
  @media (max-width: 1024px) { /* Medium screen sizes */
    svg {
      width: 30px; /* Reduced icon size */
      height: 30px; /* Reduced icon size */
    }
  }

  @media (max-width: 768px) { /* Small screen sizes */
    svg {
      width: 25px; /* Further reduced icon size */
      height: 25px; /* Further reduced icon size */
    }
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <IconWrapper
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/Shalini-Ganeshan"}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </IconWrapper>
      <IconWrapper
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://www.linkedin.com/in/shalini-ganeshan/"}
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </IconWrapper>
      <IconWrapper
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://www.facebook.com/profile.php?id=100079139268171"}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </IconWrapper>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      ></motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
