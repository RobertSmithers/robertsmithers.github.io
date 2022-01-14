import React, { Component } from "react";

import styled from "styled-components";
import theme from "../../constants/theme.js";

import popupImage from "../../assets/MITlogo.jpeg";

import FadeIn from "../../components/generic/FadeIn";
import { animationTimings } from "../../constants/animationTimings";

import placeholder from "../../assets/gray-background.jpeg";
import { Button } from "react-scroll";
import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min";

const Name = styled.span`
  font-size: 10px;
  font-weight: 400;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  
  > img {
    height: 60px;
    width: 60px;
    object-fit: contain;
    border-radius: 20%;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const ButtonDiv = styled.div`

  display: flex;
  justify-content: center; 
  ${'' /* justify-content: flex-end; */}
  margin-top: 15px;

  pointer-events: auto;

  > button {
    outline: none;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    background: #6f93f6;
    margin-left: 8px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  > button.yes {
    ${'' /* background: #275df1; */}
    background: ${theme.colors.main1}
  }

  > button.yes:hover {
    background: ${theme.colors.hoverblue};
  }

  > button.no {
    background: #f082ac;
  }

  > button.no:hover {
    background: #ec5f95;
  }
`;

const PopupBox = styled.div`
  position: fixed;
  padding: 30px;
  max-width: 380px;
  width: 100%;
  background: #fff;
  border-radius: 12px;

  > i {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 24px;
    color: #b4b4b4;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  > i:hover {
    color: #333;
  }
`;

const BackgroundCover = styled.div`
  background: rgba(0,0,0,0.4);

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.4);
  pointer-events: none;
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  transform: scale(1.2);
  transition: all 0.3s ease-in-out;
`;

const PopupOuter = styled(FadeIn)`
  z-index: 10;

  position: fixed;
  height: 100%;
  width: 100%;
  pointer-events: none;
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  transform: scale(1.2);
  transition: all 0.3s ease-in-out;
`;

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCallback: props.modalCallback,
    };
  }

  popupClick = (bool) => {
    this.state.modalCallback(bool);
  }

  render() {
    return (
      <PopupOuter id="popup" delay={animationTimings.loadDelay + 3350}>
        <BackgroundCover>
          <PopupBox>
            <InfoBox>
              <img src={popupImage} alt="" />
              <TextBox>
                <Name>
                  <p>
                    Hi, are you MIT Graduate Admissions?
                  </p>
                </Name>
              </TextBox>
        
            </InfoBox>
              <ButtonDiv className="button">
                  <button className="yes" onClick={() => this.popupClick(true)}>Yes</button>
                  <button id="noButton" className="no" onClick={() => this.popupClick(false)}>No</button>
              </ButtonDiv>
          </PopupBox>
        </BackgroundCover>
      </PopupOuter>
    );
  }
}

export default Popup;
