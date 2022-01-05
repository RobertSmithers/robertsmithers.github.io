import React, { Component } from "react";

import styled from "styled-components";
import { viewport } from "../../constants/viewport";
import theme from "../../constants/theme.js";
import { animationTimings } from "../../constants/animationTimings";
import FadeIn from "../../components/generic/FadeIn";

import Cubes from "../../components/Header/Cubes";

// import Logo from "../../assets/bg-logo-foreground.png";

const StyledHeaderBg = styled.div`
  overflow-x: hidden;
  z-index: -100;
  position: relative;
  background-color: ${theme.colors.darkblue};
  top: 0;
  left: 0;

  width: 100vw;
  height: ${props => (props.mobile ? props.height + "px" : "100vh")};
`;

const LogoWrapper =  styled(FadeIn)`
  position: absolute;

  top: ${props => (props.mobile ? props.height / 2 + "px" : "50vh")};
  left: 50vw;

  -webkit-backface-visibility: hidden; /* add to fix webkit bug jitter */
  transform: translate(-50%, -50%);

  > img {
    user-select: none;
  }

  @media (max-width: ${viewport.MOBILE}) {
    > img {
      width: 100vw;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    > img {
      width: 600px;
    }
  }
  @media (min-width: ${viewport.DESKTOP}) {
    > img {
      width: 800px;
    }
  }
`;

class HeaderBg extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  isMobileDevice = () => {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  };

  render() {
    return (
      <StyledHeaderBg
        mobile={this.isMobileDevice()}
        height={window.innerHeight}
      >
        <Cubes />
        <LogoWrapper
          height={window.innerHeight}
          delay={animationTimings.loadDelay + 0}
        >
          {/* <img draggable="false" src={Logo} /> */}
        </LogoWrapper>
      </StyledHeaderBg>
    );
  }
}

export default HeaderBg;
