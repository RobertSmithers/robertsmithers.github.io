import React, { Component } from "react";
import styled from "styled-components";

import theme from "../constants/theme.js";

import PageSection from "../components/generic/PageSection";
import Divider from "../components/generic/Divider";
import SummarySection from "../components/About/SummarySection";
import HobbySection from "../components/About/HobbySection";
import SkillsSection from "../components/About/SkillsSection";
import ProjectsSection from "../components/About/ProjectsSection";
import ResumeSection from "../components/About/ResumeSection";

import { CSSTransition } from "react-transition-group";

const StyledPage = styled.div`
  text-align: center;
`;

const StyledTransition = styled.div`
  /* .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 350ms ease-in;
  } */
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: all 350ms ease-in;
  }
`;

class About extends Component {
  constructor(props) {
    super(props);
  }

  // gray2 and creme alternating
  render() {
    return (
      <StyledTransition>
        <CSSTransition classNames="fade" timeout={1000}>
          {state => (
            <StyledPage>
              <PageSection
                color={theme.colors.main2}
                paddingBottom="50"
                paddingTop="50"
              >
                <SummarySection />
              </PageSection>
              {/* <PageSection
                color={theme.colors.gray2}
                paddingBottom="50"
                paddingTop="50"
              >
                <Divider centered={true} big={true}>
                  <h2>Hobbies</h2>
                </Divider>
                <HobbySection />
              </PageSection> */}
              <PageSection
                color={theme.colors.main3}
                paddingBottom="50"
                paddingTop="50"
              >
                <Divider centered={true} big={true}>
                  <h2>My Tech Stack</h2>
                </Divider>
                <SkillsSection />
              </PageSection>
              <PageSection
                fullwidth={true}
                color={theme.colors.main2}
                paddingBottom="50"
                paddingTop="50"
              >
                <Divider centered={true} big={true}>
                  <h2>Projects</h2>
                </Divider>
                <ProjectsSection />
              </PageSection>
              <PageSection
                fullwidth={true}
                color={theme.colors.main3}
                paddingBottom="0"
                paddingTop="0"
              >
                <ResumeSection />
              </PageSection>
            </StyledPage>
          )}
        </CSSTransition>
      </StyledTransition>
    );
  }
}

export default About;
