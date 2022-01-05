import React, { Component } from "react";

import styled from "styled-components";

import Background from "./Background";
import Text from "./Text";
import NavBar from "../../components/Navigation/NavBar";
import SocialButtons from "../../components/Header/SocialButtons";
// import OpenArrow from 'components/Header/OpenArrow'

const HeaderContent = styled.div`
  > * {
    position: absolute;
    top: ${(props) => props.height / 2 + "px"};
    left: 50vw;
    transform: translate(-50%, -50%);
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Background />
        <SocialButtons />
        <HeaderContent height={window.innerHeight}>
          <Text />
          <NavBar props />
        </HeaderContent>
      </React.Fragment>
    );
  }
}

export default Header;
