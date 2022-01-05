import React, { Component } from "react";
// import ReactGA from "react-ga";

import styled from "styled-components";
import { viewport } from "../../constants/viewport";
import theme from "../../constants/theme.js";

import ResumeGraphic from "../../assets/ResumeGraphic.png";
import RoundButton from "../../components/generic/RoundButton";

const ResumeButton = styled.div`
  display: inline-block;
  margin-top: 50px;
  position: relative;
  z-index: 1;
`;

const StyledResumeSection = styled.div`
  overflow: hidden;
  position: relative;
  text-align: center;

  @media (max-width: ${viewport.MOBILE}) {
    height: 350px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    height: 400px;
  }
`;

const StyledResumeGraphic = styled.img`
  position: absolute;
  z-index: 1;

  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 25px 25px 0px 0px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.15);

  @media (max-width: ${viewport.MOBILE}) {
    width: 90vw;
    box-shadow: 2px 2px 10px -6px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 80vw;
  }
  @media (min-width: 800px) {
    width: 60vw;
  }
  @media (min-width: 1000px) {
    width: 600px;
  }

  transition: transform 300ms ease-in-out;
  transform-origin: bottom;
  transform: ${props => (props.hover ? "translateY(0px)" : "translateY(25px)")};
`;

const BlueBG = styled.div`
  position: absolute;
  z-index: 0;

  width: 175px;
  height: 75px;
  border-radius: 25px;

  background-color: ${theme.colors.hoverblue};
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;

  transition: all 300ms ease-in-out;
  transform: ${props => (props.hover ? "scale(15)" : "scale(1)")};
`;

class ResumeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover = hoverState => {
    this.setState({ hover: hoverState });
  };
  render() {
    return (
      <StyledResumeSection>
        <a
          href={process.env.PUBLIC_URL + "/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ResumeButton
            onMouseEnter={() => this.handleHover(true)}
            onMouseLeave={() => this.handleHover(false)}
          >
            <RoundButton text="See Resume" />
          </ResumeButton>
        </a>
        <BlueBG hover={this.state.hover} />
        <StyledResumeGraphic
          hover={this.state.hover}
          draggable="false"
          src={ResumeGraphic}
        />
      </StyledResumeSection>
    );
  }
}

export default ResumeSection;
