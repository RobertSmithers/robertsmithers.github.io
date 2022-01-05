import React, { Component } from "react";

import styled from "styled-components";
// import { viewport } from "constants/viewport";
// import theme from "constants/theme.js";

import Divider from "../../components/generic/Divider";

const StyledSkillsSection = styled.div`
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
    <StyledSkillsSection>
      <SkillBox>
        <Divider>
          <h3>Languages</h3>
        </Divider>
        <div className="items">
          <p>C</p>
          <p>CSS</p>
          <p>Go</p>
          <p>HTML</p>
          <p>Perl</p>
          <p>Python</p>
          <p>Java</p>
          <p>Javascript</p>
          <p>OCaml</p>
          <p>SQL</p>
          <p>Swift</p>
          <p>Bash</p>
        </div>
      </SkillBox>
      <SkillBox>
        <Divider>
          <h3>App Development</h3>
        </Divider>
        <div className="items">
          <p>AWS</p>
          <p>Azure</p>
          <p>Docker</p>
          <p>Firebase</p>
          <p>Git</p>
          <p>Kubernetes</p>
          <p>MongoDB</p>
          <p>Node.js</p>
          <p>React.js</p>
          <p>Swift</p>
        </div>
      </SkillBox>
      <SkillBox>
        <Divider>
          <h3>Machine Learning</h3>
        </Divider>
        <div className="items">
          <p>Matplotlib</p>
          <p>Numpy</p>
          <p>Pandas</p>
          <p>Pytorch</p>
          <p>Keras</p>
          <p>scikit-learn</p>
        </div>
      </SkillBox>
    </StyledSkillsSection>
  );
};

export default SkillsSection;
