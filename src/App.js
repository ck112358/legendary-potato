import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Page1 from "./Page1";
import ContactUsPage from "./ContactUsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/page1" component={Page1} />
        <Route path="/contact-us" component={ContactUsPage} />
      </Switch>
    </Router>
  );
}

export default App;
