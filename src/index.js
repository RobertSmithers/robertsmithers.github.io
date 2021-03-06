import React from "react";
import { render } from "react-dom";
import App from "./screens/App.js";

import ReactGA from "react-ga";
import registerServiceWorker from "./utils/registerServiceWorker";

ReactGA.initialize("UA-221768187-2");

// Reports a page view
ReactGA.pageview(window.location.pathname + window.location.search);

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
