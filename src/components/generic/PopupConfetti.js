import React, { Component } from "react";

import styled from "styled-components";
import theme from "../../constants/theme.js";

import Confetti from 'react-confetti'
import { animationTimings } from "../../constants/animationTimings";

const ConfettiBox = styled(Confetti)`
  position: fixed;
  z-index: 3;
`;

class PopupConfetti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      // https://github.com/alampros/react-confetti
      <ConfettiBox style={{ position: 'fixed' }} recycle={false} numberOfPieces={300}  onConfettiComplete={confetti => {
        confetti.reset();
      }} />
    );
  }
}

export default PopupConfetti;
