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
// import ResumeView from "../screens/ResumeView";
import "../screens/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
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
