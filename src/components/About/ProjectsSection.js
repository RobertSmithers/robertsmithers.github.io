import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

import Card from "../generic/Card";
import RoundButton from "../generic/RoundButton";
import ProjectCarousel from "../About/ProjectCarousel";
import "../About/Carousel.scss";

import teethSegmentation from "../../assets/projects/teethSegmentation.png";
import industryPricePrediction from "../../assets/projects/industryML.jpg";
import picoIcon from "../../assets/projects/pico-icon.png";
import det355AppLogo from "../../assets/projects/det355-app.png"; 
import stockPred from "../../assets/projects/ml-stock-predictor.jpeg";
import bcGymApp from "../../assets/projects/bcgym-app.png";
import stockSentiment from "../../assets/projects/stock-sentiment.jpeg";
import pcGuard from "../../assets/projects/PCGuard-1.png";
import deedADay from "../../assets/projects/deed-a-day.png";
import deepfake from "../../assets/projects/deepfake.jpeg";
import solubilityPrediction from "../../assets/projects/solubilityPrediction.jpeg";
import digitRecognizer from "../../assets/projects/digitRecognizer.png";
import audioEmotionClassifier from "../../assets/projects/audioEmotionClassifier.jpeg";

import placeholderImg from "../../assets/projects/gray-background.jpeg";

// https://github.com/RobertSmithers/TeethSegmentation

const StyledProjectsSection = styled.div`
  text-align: center;
`;

let projects = [
  <Card title="Price-Based ML Stock Predictor" image={stockPred} link="/projects#stock1.0"/>,
  <Card title="Pico" image={picoIcon} link="/projects#pico" />,
  <Card title="Det 355 iOS App" image={det355AppLogo} link="/projects#det355" />,
  <Card title="BC Gym Signup" image={bcGymApp} link="/projects#gym-signup" />,
  <Card title="Sentiment ML Stock Predictor" image={stockSentiment} link="/projects#stock2.0" />,
  <Card title="PC Guard" image={pcGuard} link="/projects#pc-guard" />,
  <Card title="Deed a Day" image={deedADay} link="/projects#deed" />,
  <Card title="Deep Fake Classification" image={deepfake} link="/projects#deep-fake" />,
  <Card title="Solubility Predictor" image={solubilityPrediction} link="/projects#solubility" />,
  <Card title="Digit Recognizer" image={digitRecognizer} link="/projects#digit-recognizer" />,
  <Card title="Audio Emotion Classifier" image={audioEmotionClassifier} link="/projects#emotion-classifier" />,
  <Card title="Teeth Segmentation" image={teethSegmentation} link="/projects#teeth-segmentation" />,
  <Card title="Industry Price Prediction" image={industryPricePrediction} link="/projects#industry-price-prediction" />,
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
