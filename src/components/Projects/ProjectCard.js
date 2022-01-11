import React from "react";

import { viewport } from "../../constants/viewport";
import styled from "styled-components";
import Divider from "../../components/generic/Divider";
import RoundButton from "../../components/generic/RoundButton";
import awardImg from "../../assets/medal.png";

const PICTURE_BOTTOM_MARGIN = 30;

const StyledCard = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  position: relative;
  width: 100%;
  margin-bottom: 100px;

  h6 {
    font-size: 16px;
  }

  p {
    font-size: 16px;
  }

  > .textWrapper {
    white-space: wrap;
    order: 2;
    max-width: 400px;
    margin-right: 25px;
    p + div {
      margin-right: 15px;
    }

    @media (max-width: 950px) {
      padding-top: 30px;
      padding-left: 10px;
      max-width: 100%;
    }
  }

  .RoundButton {
    margin-right: 15px;
  }
`;

const PictureDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const Picture = styled.img`
  position: relative;
  width: 400px;
  height: 250px;
  margin-bottom: 30px;
  object-fit: cover;

  border-radius: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);

  @media (max-width: 950px) {
    width: 450px;
    height: 300px;
  }
  @media (max-width: ${viewport.MOBILE}) {
    width: 90%;
    height: auto;
    border-radius: 15px;
  }
`;

const Medal = styled.img`
  position: absolute;
  width: 95px;
  height: 90px;
  margin-bottom: 30px;
  bottom: 0px;
  right: 1%;
  transform: translate(-50%, -10%);
  object-fit: contain;

  @media (max-width: 950px) {
    top: 180px;
    bottom: auto;
    right: 15%;
    ${'' /* width: 45px;
    height: 40px; */}
  }
  @media (max-width: ${viewport.MOBILE}) {
    top: 180px;
    width: 20%;
    height: auto;
  }
`;

const Card = props => {
  return (
    <StyledCard>
      <div className="textWrapper">
        <Divider>
          <h4>{props.title}</h4>
        </Divider>
        <h6>{props.date}</h6>
        <p>{props.description}</p>
        {props.website !== "" ? (
          <a href={props.website} target="_blank" rel="noopener noreferrer">
            <RoundButton small text="See It" />
          </a>
        ) : (
          <React.Fragment />
        )}
        {props.github !== "" ? (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <RoundButton small text="Github Repo" />
          </a>
        ) : (
          <React.Fragment />
        )}
        {props.readMore !== "" ? (
          <a href={props.readMore} target="_blank" rel="noopener noreferrer">
            <RoundButton small text="Read More" />
          </a>
        ) : (
          <React.Fragment />
        )}
      </div>

      <div>
        <Picture src={props.image} />
        {props.medalWinner ? (
            <Medal src={awardImg} />
          ) : (
            <React.Fragment />
          )}
      </div>
      
    </StyledCard>
  );
};

export default Card;
