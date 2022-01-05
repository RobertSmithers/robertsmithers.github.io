import React from "react";

import styled from "styled-components";
import theme from "../../constants/theme";

const StyledCard = styled.div`
  position: relative;
  width: 330px;
  height: calc(225px + 30px + 20px);

  margin: 10px 25px 50px;

  :hover {
    transform: scale(1.01) translateY(-3px);
    cursor: pointer;
  }
  transition: transform 0.1s ease-in;

  .header {
    position: absolute;
    background-color: ${theme.colors.buttonblue};
    text-align: center;

    width: 80%;
    padding: 10px 15px;
    border-radius: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.15);

    left: 50%;
    transform: translateX(-50%);

    h4 {
      color: white;
    }
  }
  > img {
    width: 325px;
    height: 225px;
    object-fit: cover;

    margin-top: 20px;
    border-radius: 30px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.15);
  }
`;

const Card = props => {
  return (
    <StyledCard>
      <div className="header">
        <h4>{props.title}</h4>
      </div>
      <img draggable="false" src={props.image} />
    </StyledCard>
  );
};

export default Card;
