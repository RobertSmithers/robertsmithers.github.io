import React from "react";

import styled from "styled-components";

import portraitImg from "../../assets/robertsmithers.jpg";

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
          <strong>Howdy!</strong>
          <br /> I'm Robert, a CS student at Boston
          College. I love to play around with and self-learn the latest cutting-edge
          technologies and to use them to make cool utilities!
        </p>
      </div>
    </StyledSummarySection>
  );
};

export default SummarySection;
