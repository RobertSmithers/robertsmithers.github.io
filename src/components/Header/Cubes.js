import React, { Component } from "react";

import styled, { keyframes } from "styled-components";
import { viewport } from "../../constants/viewport";
import theme from "../../constants/theme";

const cubeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  25% {
    opacity: 1;
    transform: scale(1) translateY(50px);
    transform-origin: 50% 50%;
  }
  75% {
    opacity: 1;
    transform: scale(1) translateY(250px);
    transform-origin: 50% 300px;
  }

  100% {
    opacity: 0;
    transform: scale(0.5) translateY(300px);
    transform-origin: 50% 300px;
  }
`;

const StyledCube = styled.div`
  z-index: -101;
  position: absolute;

  width: 75px;
  height: 75px;
  background-color: ${theme.colors.blue};

  opacity: 0;
  transform: scale(0);

  -webkit-backface-visibility: hidden;
  transform-origin: center;
  animation: ${cubeAnimation} 10s;
  animation-timing-function: linear;
  animation-delay: 0ms;
  animation-fill-mode: forwards;

  @media (max-width: ${viewport.MOBILE}) {
    width: 65px;
    height: 65px;
  }
`;

class Cube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block"
    };
  }
  componentWillReceiveProps = newProps => {
    this.setState({ duration: newProps.duration });
  };

  componentDidMount = () => {
    window.setTimeout(() => this.setState({ display: "none" }), 10000);
  };

  render() {
    return (
      <StyledCube
        style={{
          position: "absolute",
          top: this.props.y + "vh",
          left: this.props.x + "vw",
          display: this.state.display
        }}
        mounted={this.state.mounted}
        {...this.props}
      />
    );
  }
}

class Cubes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cubes: [{ key: 0 }]
    };
  }

  componentDidMount = () => {
    let delay = true;

    window.setTimeout(() => (delay = false), 15000);

    window.setInterval(() => {
      let newCubes;
      if (delay) {
        newCubes = this.state.cubes.slice();
      } else {
        newCubes = this.state.cubes.slice(1);
      }

      let newCube = {
        key: newCubes[newCubes.length - 1].key + 1,
        x: Math.floor(Math.random() * 90),
        y: Math.floor(Math.random() * 70)
      };
      newCubes.push(newCube);
      this.setState({ cubes: newCubes });
    }, 500);
  };

  render() {
    return this.state.cubes.map(cube => <Cube {...cube} />);
  }
}

export default Cubes;
