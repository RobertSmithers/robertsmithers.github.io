import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import Card from "../generic/Card";
import RoundButton from "../generic/RoundButton";
import ProjectCarousel from "../About/ProjectCarousel";
import "../About/Carousel.scss";

import picoIcon from "../../assets/pico-icon.png";
import det355AppLogo from "../../assets/det355-app.png"; 
import stockPred from "../../assets/ml-stock-predictor.jpeg";
import bcGymApp from "../../assets/bcgym-app.png";
import stockSentiment from "../../assets/stock-sentiment.jpeg";
import pcGuard from "../../assets/PCGuard-1.png";
import deedADay from "../../assets/deed-a-day.png";
import deepfake from "../../assets/deepfake.jpeg";
import solubilityPrediction from "../../assets/solubilityPrediction.jpeg";
import digitRecognizer from "../../assets/digitRecognizer.png";
import audioEmotionClassifier from "../../assets/audioEmotionClassifier.jpeg";
import placeholderImg from "../../assets/gray-background.jpeg";


const StyledProjectsSection = styled.div`
  text-align: center;
`;

let projects = [
  <Card title="Price-Based ML Stock Predictor" image={stockPred} />,
  <Card title="Pico" image={picoIcon} />,
  <Card title="Det 355 iOS App" image={det355AppLogo} />,
  <Card title="BC Gym Signup" image={bcGymApp} />,
  <Card title="Sentiment ML Stock Predictor" image={stockSentiment} />,
  <Card title="PC Guard" image={pcGuard} />,
  <Card title="Deed a Day" image={deedADay} />,
  <Card title="Deep Fake Classification" image={deepfake} />,
  <Card title="Solubility Predictor" image={solubilityPrediction} />,
  <Card title="Digit Recognizer" image={digitRecognizer} />,
  <Card title="Audio Emotion Classifier" image={audioEmotionClassifier} />,
];

const ProjectsSection = props => {
  return (
    <StyledProjectsSection>
      <ProjectCarousel
        components={[...projects, ...projects, ...projects]}
        active={0}
      />
      <NavLink to="/projects">
        <RoundButton text="See All Projects" link="/projects" scroll />
      </NavLink>
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
