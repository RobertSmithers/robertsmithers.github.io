import React, {Component} from 'react';

import styled from 'styled-components'
import theme from 'constants/theme.js'

const StyledButton = styled.div `
  transition: all 300ms ease-in-out;

  background-color: ${props => props.type === 'outline'
  ? 'white'
  : theme.colors.fadedblue};

  height: ${props => props.height};
  width: ${props => props.width};

  border: ${props => props === 'outline'
    ? 'solid 2px' + theme.colors.fadedblue
    : 'solid 2px' + theme.colors.fadedblue};

  p {
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 300;

    color: ${props => props.type === 'outline'
      ? theme.colors.fadedblue
      : 'white'};

    text-align: center;
    margin-top: 7px;
    padding-top: 0;
  }

  :hover {
    cursor: pointer;
    border: ${props => props === 'outline'
      ? 'solid 2px' + theme.colors.hoverblue
      : 'solid 2px' + theme.colors.hoverblue};
    background-color: ${props => props.type === 'outline'
        ? theme.colors.fadedblue
        : theme.colors.hoverblue};
  }

`;

export default StyledButton;