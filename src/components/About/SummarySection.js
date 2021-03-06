import React from "react";

import styled from "styled-components";

import portraitImg from "../../assets/socialMediaPFP.jpeg";
// "../../assets/robertsmithers.jpg"; MIT Grad Admissions

import theme from "../../constants/theme.js";
// import mePic from "../../assets/me.jpeg";

const StyledSummarySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  margin-top: 10px;

  > .textWrapper {
    white-space: wrap;
    order: 2;
    max-width: 400px;
    margin-right: 25px;

    > p {
    }

    @media (max-width: 825px) {
      padding-top: 25px;
      max-width: 100%;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

const Portrait = styled.img`
  order: 1;
  width: 300px;
  height: 300px;

  border: 5px solid ${theme.colors.main1};;
  border-radius: 15px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);

  @media (max-width: 750px) {
    width: 225px;
    height: 225px;
  }
`;

const SummarySection = () => {
  return (
    <StyledSummarySection>
      <Portrait draggable="false" src={portraitImg} />
      <div className="textWrapper">
        <p>
          {/* <strong>Dear MIT Graduate Admissions,</strong>
          <br /> Welcome to my website! I'm Robert Smithers, an applicant for your CSE Graduate Program.
          I'm glad you made it here. I built this portfolio website especially for you,
          so I hope you enjoy it (and the rest of my application). Go Engineers! */}
          <strong>Welcome to my website!,</strong>
          <br /> I'm Robert Smithers, a software engineer and machine learning enthusiast.
          I'm glad you made it here. I built this portfolio website to share just a bit of my life with you,
          so I hope you enjoy it! If you haven't already connected with me, I would love to chat - add me on LinkedIn.
        </p>
      </div>
    </StyledSummarySection>
  );
};

export default SummarySection;
