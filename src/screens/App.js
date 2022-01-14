import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouteWithProps
  // Redirect
} from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../screens/About";
import Projects from "../screens/Projects";
import { animateScroll } from "react-scroll";
// import ResumeView from "../screens/ResumeView";
import "../screens/App.scss";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      modalResp: null
    };
  }

  // This is the callback function from when the modal is closed
  modalClosed = (resp) => {
    this.setState({
      showModal: false,
      modalResp: resp
    })

    // Fireworks and zoom to section
    if (resp) {
      console.log("FIREWORKS position: fixed and ZOOM TO SECTION");

      // Delay on scroll after 1 second
      setTimeout(function() {
        // Zoom to about section
        animateScroll.scrollTo(window.innerHeight);
      }, 1000)
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header modalCallback={this.modalClosed} />
          <Routes>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              element={<About />}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/projects"}
              element={<Projects />}
            />
            {/* <Route
              exact
              path={process.env.PUBLIC_URL + "/resume"}
              element={<ResumeView />}
            /> */}
            {/* <Redirect
              from={process.env.PUBLIC_URL + "/*"}
              to={process.env.PUBLIC_URL + "/"}
            /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
