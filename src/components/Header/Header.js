import React, { Component } from "react";

import styled from "styled-components";

import Background from "./Background";
import Text from "./Text";
import NavBar from "../../components/Navigation/NavBar";
import SocialButtons from "../../components/Header/SocialButtons";
import PopupConfetti from "../../components/generic/PopupConfetti";
import MIT_Popup from "../../components/generic/Popup";
// import OpenArrow from 'components/Header/OpenArrow'

const HeaderContent = styled.div`
  > * {
    position: absolute;
    top: ${(props) => props.height / 2 + "px"};
    left: 50vw;
    transform: translate(-50%, -50%);
  }
`;

const PopupView = styled.div`
  > * {
    position: fixed;
    top: ${(props) => props.height / 2 + "px"};
    left: 50vw;
    transform: translate(-50%, -50%);
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCallback: props.modalCallback,
      showModal: true,
      showConfetti: false
    }
  }

  removeModalView = (resp) => {
    this.setState({
      showModal: false,
      showConfetti: resp
    });

    // Signal back to App.js to show fireworks and zoom to the about section if yes, otherwise just close it
    this.state.modalCallback(resp); // Resp indicates if the user clicked yes/no on the form
  }

  render() {
    return (
      <React.Fragment>
        <Background />
        <SocialButtons />
        <PopupView height={window.innerHeight}>
          {/* MIT Popup for graduate admissions! */}
          {this.state.showModal ? <MIT_Popup modalCallback={this.removeModalView} /> : null}
        </PopupView>
        <HeaderContent height={window.innerHeight}>
          <Text />
          <NavBar props />
        </HeaderContent>
        
        {(!(this.state.showModal) && this.state.showConfetti)? <PopupConfetti /> : null}
      </React.Fragment>
    );
  }
}

export default Header;
