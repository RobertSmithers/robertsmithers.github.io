// import React from "react";
import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0) translateY(-100px);
  }

  to {
    opacity: 1;
    transform: scale(1) translateY(0px);
  }
`;

// Uses fade animation to make a fade in appearance
const FadeIn = styled.div`
  > * {
    backface-visibility: hidden;
    opacity: 0;
    transform-origin: center;
    animation: ${fadeAnimation} 600ms;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-delay: ${props => props.delay + "ms"};
    animation-fill-mode: forwards;
  }
`;

export default FadeIn;
