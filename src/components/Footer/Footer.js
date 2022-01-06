import React from "react";

import styled from "styled-components";
import theme from "../../constants/theme.js";
import { viewport } from "../../constants/viewport";

import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";

const StyledFooter = styled.div`
  user-select: none;

  z-index: 100;
  position: relative;

  background-color: ${theme.colors.main1};

  padding-top: 30px;

  height: 150px;
  width: 100vw;

  > p {
    font-size: 16px;
    color: ${theme.colors.gray2};
    text-align: center;
  }
`;

const StyledSocialButtons = styled.div`
  text-align: center;
`;

const StyledIcon = styled.a`
  display: inline-block;

  transition: all 200ms ease-in-out;
  background-color: ${theme.colors.gray};

  margin: 15px;
  padding: 10px;
  border-radius: 25%;

  img {
    transition: transform 200ms ease-in-out;
    vertical-align: middle;
    width: 40px;
    height: 40px;
  }
  :hover {
    cursor: pointer;
    background-color: ${theme.colors.buttonblue};
    img {
      transform: scale(1.2);
    }
  }

  @media (max-width: ${viewport.MOBILE}) {
    padding: 8px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
const SocialButtons = () => {
  return (
    <StyledSocialButtons>
      <StyledIcon href="https://github.com/robertsmithers" target="_blank">
        <img alt="github" draggable="false" src={github} />
      </StyledIcon>
      <StyledIcon
        href="https://www.linkedin.com/in/robert-smithers/"
        target="_blank"
      >
        <img alt="linkedin" draggable="false" src={linkedin} />
      </StyledIcon>
      <StyledIcon href="mailto:rjsmithers3@gmail.com">
        <img alt="gmail" draggable="false" src={gmail} />
      </StyledIcon>
    </StyledSocialButtons>
  );
};

const Footer = props => {
  let date = new Date();

  return (
    <StyledFooter>
      <SocialButtons />
      <p>© Robert Smithers {date.getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
