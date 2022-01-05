import React, { Component } from "react";

import styled from "styled-components";
import theme from "../../constants/theme.js";
import { animationTimings } from "../../constants/animationTimings";
import FadeIn from "../../components/generic/FadeIn";

import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";

// FadeIn.extend
const StyledSocialButtons = styled(FadeIn)`
  position: absolute;
  top: 0;
  right: 5px;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin: 10px;
  height: 42px;

  img {
    width: 42px;
    height: 42px;
    transition: all 200ms ease-in-out;
  }
  p {
    font-size: 16px;
    color: white;
    margin-right: 10px;

    transition: all ease-out 200ms;
    transform: translateX(25px);
    opacity: 0;
  }
  :hover {
    p {
      cursor: pointer;
      transform: translateX(0px);
      opacity: 1;
    }
    img {
      transform: scale(0.9);
    }
  }
`;

const ButtonBG = styled.div`
  position: absolute;
  background-color: ${theme.colors.hoverblue};
  width: 100%;
  height: 44px;
  border-radius: 20px/50%;

  right: 3px;

  /* backface-visibility prevents the shaking/flickering effect during transition  */
  backface-visibility: hidden;
  transition: all ease-out 200ms;
  transform-origin: 90% 50%;
  transform: scale(0.8);
  opacity: 0;

  ${StyledIcon}:hover & {
    cursor: pointer;
    transform: scale(1);
    opacity: 1;
  }
`;

const SocialButtons = () => {
  return (
    <FadeIn delay={animationTimings.loadDelay + 1000}>
      <StyledSocialButtons>
        <a
          href="https://github.com/robertsmithers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon>
            <ButtonBG />
            <img src={github} />
            <p>Github</p>
          </StyledIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/robertsmithers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon>
            <ButtonBG />
            <img src={linkedin} />
            <p>LinkedIn</p>
          </StyledIcon>
        </a>
        <a
          href="mailto:rjsmithers3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon>
            <ButtonBG />
            <img src={gmail} />
            <p>Email</p>
          </StyledIcon>
        </a>
      </StyledSocialButtons>
    </FadeIn>
  );
};

export default SocialButtons;
