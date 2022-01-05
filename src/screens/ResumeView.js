import React, { Component } from "react";
// import { Document, Page } from "react-pdf";

import styled from "styled-components";
import theme from "constants/theme";
import PageSection from "components/generic/PageSection.js";

import Resume from "assets/resumeRJ.pdf";

const StyledResumeView = styled.div`
  .react-pdf {
    &__Document {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__Page {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

      canvas {
        max-width: 100%;
        height: auto !important;
      }
    }
    &__Page__textContent {
      display: none;
    }
  }
`;

class ResumeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1
    };
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <PageSection
        color={theme.colors.gray2}
        paddingBottom="50"
        paddingTop="50"
      >
        <StyledResumeView>
          <Document file={Resume} onLoadSuccess={this.onDocumentLoad}>
            <Page pageNumber={pageNumber} />
          </Document>
        </StyledResumeView>
      </PageSection>
    );
  }
}

export default ResumeView;
