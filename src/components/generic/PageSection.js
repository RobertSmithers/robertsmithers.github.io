import React from "react";

import styled from "styled-components";
import { viewport } from "../../constants/viewport";

const StyledPageSection = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  padding-top: ${props => props.paddingTop + "px"};
  padding-bottom: ${props => props.paddingBottom + "px"};
`;

const StyledPageContents = styled.div`
  margin: auto;

  @media (max-width: ${viewport.MOBILE}) {
    width: 92vw;
    h2 {
      text-align: center;
      margin: auto;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 90vw;
    text-align: left;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: ${viewport.DESKTOP_CONTENT_WIDTH + "px"};
  }
`;

const PageSection = props => {
  return (
    <StyledPageSection {...props}>
      {props.fullwidth ? (
        props.children
      ) : (
        <StyledPageContents>{props.children}</StyledPageContents>
      )}
    </StyledPageSection>
  );
};

export default PageSection;
