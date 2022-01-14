import React from "react";

import theme from "../constants/theme";
import Divider from "../components/generic/Divider";
import PageSection from "../components/generic/PageSection";
import ProjectCard from "../components/Projects/ProjectCard";

import picoIcon from "../assets/pico-icon.png";
import det355AppLogo from "../assets/det355-app.png"; 
import mlStockPredictor from "../assets/ml-stock-predictor.jpeg";
import bcGymApp from "../assets/bcgym-app.png";
import stockSentiment from "../assets/stock-sentiment.jpeg";
import pcGuard from "../assets/PCGuard-1.png";
import deedADay from "../assets/deed-a-day.png";
import deepfake from "../assets/deepfake.jpeg";
import solubilityPrediction from "../assets/solubilityPrediction.jpeg";
import digitRecognizer from "../assets/digitRecognizer.png";
import audioEmotionClassifier from "../assets/audioEmotionClassifier.jpeg";

import placeholderImg from "../assets/gray-background.jpeg";

const Projects = () => {
  return (
    <PageSection color={theme.colors.gray2} paddingBottom="50" paddingTop="50">
      <Divider centered={true} big={true}>
        <h2>My Projects</h2>
      </Divider>
      <ProjectCard
        title="Deepfake Detection"
        date="December 2021"
        image={deepfake}
        description="Think you can identify deepfakes better than an AI? This RESNET architecture 
        differentiates deepfake and non-deepfake videos with the help of face-detection and cropping in data curation.
        I achieved 95% accuracy through careful data augentation and model training techniques."
        website=""
        github="https://github.com/RobertSmithers/DeepfakeDetection"
        readMore=""
        medalWinner={false}
      />
      <ProjectCard
        title="Predicting Solubility"
        date="November 2021"
        image={solubilityPrediction}
        description="Predicting the solubility rate of a molecule is no easy task,
        especially when only given chemical formulas. In this project, see how I
        generated data using quantum-mechanic libraries MOPAC and ASE and trained a
        custom Graph Neural Network. This project has heavy application to future pharmaceutical
        research, medical breakthroughs, and efficiency in the oil industry."
        website=""
        github="https://github.com/RobertSmithers/PredictingSolubility"
        readMore=""
        medalWinner={false}
      />
      <ProjectCard
        title="ML Stock Predictor (2.0)"
        date="October 2021"
        image={stockSentiment}
        description="Improving the ML Stock Predictor 1.0 project that I already worked on,
        I optimistically looked at adding offset market data of other stocks to identify pair-trading patterns.
        At the same time, I included sentiment analysis of twitter tweets and reddit posts to provide
        another dimension of training for the model."
        website=""
        github="https://github.com/RobertSmithers/Stock-Sentiment"
        readMore=""
        medalWinner={false}
      />
      <ProjectCard
        title="Det 355 iOS Application"
        date="September 2019 - October 2021"
        image={det355AppLogo}
        description="The official Air Force ROTC Detachment 355 iOS utility. It includes plenty of useful military resources,
        Firebase authentication, nifty social features, data storage, real-time syncronization across devices, push notifications,
        Detachment-wide event tracking, and much, much more! 🏆 Won outstanding achievement award within the Detachment and holds a
        5-star rating on the App Store."
        website="https://apps.apple.com/us/app/det-355-flying-tigers/id1530033303"
        github=""
        readMore=""
        medalWinner={true}
      />
      <ProjectCard
        title="BC Gym-Signup"
        date="February 2021"
        image={bcGymApp}
        description="When COVID came around and university gym slots were limited, obtaining one was near impossible and would
        completely fill up within a minute of being released. So, I made this utility to automatically sign me and my friends up :)
        It is Python based and uses selenium to interact with your preferred browser emulator."
        website=""
        github="https://github.com/RobertSmithers/BC-GymSignup"
        readMore=""
        medalWinner={false}
      />
      <ProjectCard
        title="PCGuard"
        date="May 2020"
        image={pcGuard}
        description="One of my first iOS projects, PCGuard can monitor your devices, give you real-time updates
        on security vulnerabilities, and here's my favorite part: you can secure your device directly from the app.
        It uses APNS, Firebase, and a Python authenticator backend on the device. Check out a demo video by going to my LinkedIn!"
        website="https://www.linkedin.com/in/robert-smithers/"
        github=""
        readMore=""
        medalWinner={false}
      />
      <ProjectCard
        title="Emotion Classification"
        date="November 2020"
        image={audioEmotionClassifier}
        description="This NLP challenge aimed to classify audio files into 1 of 7 emotions. I extracted 
        Mel Frequency Cepstral Coefficients and magnitude/frequency data
        and built a custom 3-layer convolution with max-pooling neural network.
        This project ranked 1st place out of 40 students."
        website=""
        github="https://github.com/RobertSmithers/Speech-Processing-Classifying-Emotion"
        readMore=""
        medalWinner={true}
      />
      <ProjectCard
        title="Deed A Day"
        date="September 2020"
        image={deedADay}
        description="Generate a random good deed every single day. It's a simple concept, but goes a long way!"
        website=""
        github="https://github.com/RobertSmithers/DeedADay"
        readMore=""
        medalWinner={false}
      />
      <ProjectCard
        title="ML Stock Predictor (1.0)"
        date="April 2020"
        image={mlStockPredictor}
        description="ML Stock Predictor is a first look at attempting to predict inter-day stock changes
        in $AAPL using an LSTM Neural Network."
        website=""
        github="https://github.com/RobertSmithers/Predicting-The-Market-Stock-Analysis"
        readMore={process.env.PUBLIC_URL + "/ml-stock-writeup.pdf"}
        medalWinner={false}
      />
      <ProjectCard
        title="Pico"
        image={picoIcon}
        date="September 2018"
        description="A quick social-utility application built at HackMIT by Robert Smithers, Robert Zhang,
        Jacques Spiere, and Tyler Li. Pico is an iOS app that integrates major social media platforms and allows
        users to share and connect with others easily on whichever platforms they like. 🏆 Project Top-10 Contender
        at HackMIT 2018"
        website=""
        github="https://github.com/robertfrankzhang/Pico"
        readMore=""
        medalWinner={true}
      />
      <ProjectCard
        title="Digit Recognizer"
        date="June 2018"
        image={digitRecognizer}
        description="This is where my passion for computer science first started. I keep this
        project on my website for memory's sake! This high school endeavor was
        my first look at using artificial intelligence for classification. Given an image
        of a drawn number, the model predicts which single digit is drawn. Color distortion and edge-detection
        is applied in pre-processing."
        website=""
        github="https://github.com/RobertSmithers/DigitRecognizer"
        readMore=""
        medalWinner={false}
      />
    </PageSection>
  );
};

export default Projects;
