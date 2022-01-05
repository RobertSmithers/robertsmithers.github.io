import React, {Component} from 'react';

import {viewport} from 'constants/viewport';
import styled from 'styled-components';

import downArrow from 'media/down-arrow.png';

const StyledOpenArrow = styled.img `

  position: absolute;
  margin: auto;
  width: 40px;
  height: 20px;
  bottom: 20vh;
  left: 0;
  right: 0;

  padding: 50px;

  :hover {
    cursor: pointer;
  }

  transition: all 300ms ease-in-out;
  transition-property: transform, opacity;

  transform: translateY(${props => props.nav
    ? 0
    : '100px'});
  @media (max-height: 500px) {
    top: 300px;
  }
`;

const OpenArrow = (props) => {
  return (<StyledOpenArrow src={downArrow} onClick={props.handleDrawer} nav={props.nav}/>);
}

export default OpenArrow;