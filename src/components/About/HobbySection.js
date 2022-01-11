import React, { Component } from "react";

import styled from "styled-components";
import Divider from "../../components/generic/Divider";

// Images
import hobbiesFitnessIcon from "../../assets/hobbies/hobbies-icon-fitness.png";
import fitnessPic from "../../assets/hobbies/hobbies-fitness-2.jpeg";

import hobbiesAdventureIcon from "../../assets/hobbies/hobbies-icon-adventure.png";
import adventurePic from "../../assets/hobbies/hobbies-adventure.jpeg";

import hobbiesFootballIcon from "../../assets/hobbies/hobbies-icon-football.png";
import bcFootballPic from "../../assets/hobbies/hobbies-bc-football.JPEG";

// import hobbiesSpartanRaceIcon from "../../assets/hobbies/hobbies-icon-spartan-race.png";
// import spartanRacePic from "../../assets/hobbies/hobbies-spartan-race.jpeg";

import hobbiesRuckingIcon from "../../assets/hobbies/hobbies-icon-rucking.png";
import ruckingPic from "../../assets/hobbies/hobbies-rucking.jpeg";

import hobbiesTableTennisIcon from "../../assets/hobbies/hobbies-icon-table-tennis.png";
import tableTennisPic from "../../assets/hobbies/hobbies-table-tennis.jpeg";

import hobbiesFoodIcon from "../../assets/hobbies/hobbies-icon-food.png";
import foodPic from "../../assets/hobbies/hobbies-food.jpeg";

import hobbiesSurfIcon from "../../assets/hobbies/hobbies-icon-surf.png";
import surfPic  from "../../assets/hobbies/hobbies-surf.jpeg";

import placeholder from "../../assets/gray-background.jpeg";

const StyledHobbySection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HobbySection = styled.div`
  margin-bottom: 15px;

  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  overflow: auto;
  white-space: nowrap;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Photo = styled.img`
  order: 1;
  width: 300px;
  height: 300px;
  float: left;

  margin-bottom: 45px;

  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);

  @media (max-width: 750px) {
    width: 225px;
    height: 225px;
  }
`;

const Container = styled.div`
  position: relative;

  > .main {
    position: absolute;
    z-index: 5;
    transition: opacity .4s ease-in-out;
  }

  > .cover {
    transition: opacity .4s ease-in-out;
  }

  > .main:hover {
    opacity: 0;
  }

  @media (max-width: 1000px) {
    position: relative;
  }
`;

const HobbyBox = styled.div`

  h3 {
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }
`;

class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverImage: props.cover,
      image: props.main,
      opacity1: 1,
      opacity2: 0,
    };
  }

  userHovered = () => {
    this.state.opacity1 = 0;
    this.state.opacity2 = 1;
    this.setState(() => {
      return {opacity: 0}
    });
  };

  render() {
    return (
      <Container>
        <Photo className="main" onMouseOver={this.userHovered} draggable="false" src={this.state.coverImage} style={{opacity: this.state.opacity1}}/>
        <Photo className="cover" draggable="false" src={this.state.image} style={{opacity: this.state.opacity2}} />
      </Container>
    );
  }
}

class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: []
    };
  }

  render() {
    return (
      <StyledHobbySection>
        <HobbySection>
          <HobbyBox>
            <h3>Fitness</h3>
            <Picture cover={hobbiesFitnessIcon} main={fitnessPic}/>
          </HobbyBox>
          <HobbyBox>
            <h3>Adventure</h3>
            <Picture cover={hobbiesAdventureIcon} main={adventurePic}/>
          </HobbyBox>
          <HobbyBox>
            <h3>Table Tennis</h3>
            <Picture cover={hobbiesTableTennisIcon} main={tableTennisPic}/>
          </HobbyBox>
          <HobbyBox>
            <h3>Rucking</h3>
            <Picture cover={hobbiesRuckingIcon} main={ruckingPic}/>
          </HobbyBox>
          <HobbyBox>
            <h3>Food</h3>
            <Picture cover={hobbiesFoodIcon} main={foodPic}/>
          </HobbyBox>
          <HobbyBox>
            <h3>Surfing</h3>
            <Picture cover={hobbiesSurfIcon} main={surfPic}/>
          </HobbyBox>
        </HobbySection>
    </StyledHobbySection>
    );
  }
}

const SkillsSection = props => {
  return (
    <Pictures />
  );
};

export default SkillsSection;
