import React, { Component } from "react";

import styled from "styled-components";
import Divider from "../../components/generic/Divider";

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

const SkillBox = styled.div`
  width: 30%;

  padding-left: 10px;
  margin-bottom: 15px;

  text-align: left;

  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    > p {
      margin: 6px 15px 6px 0px;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SkillsSection = props => {
  return (
    <StyledHobbySection>
      <SkillBox>
        <Divider>
          <h3>Gym</h3>
        </Divider>
        <div className="items">
          <p>Item 1</p>
          <p>Item 2</p>
        </div>
      </SkillBox>
    </StyledHobbySection>
  );
};

export default SkillsSection;
