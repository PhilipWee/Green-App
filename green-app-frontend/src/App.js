import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

//Component Imports
import AccountabilityBuddyChat from "./components/pages/accountability-buddy-chat.component";
import SimilarActivitiesFinder from "./components/pages/similar-activities-finder.component";
import CarbonEmissionCalculator from "./components/pages/carbon-emission-calculator.component";
import GoalSetterWithBuddy from "./components/pages/goal-setter-with-buddy.component";
import ActivityGeneration from "./components/pages/activity-generation.component";
import CertificateGeneration from "./components/pages/certificate-generation.component";
import CommunityPage from "./components/pages/community-page.component";
import LandingPage from "./components/pages/landing-page.component";

//Navbar Imports
import Navbar from "./components/navbars/navbar.component";
import NavbarBottom from "./components/navbars/navbar-bottom.component";


class App extends Component {
  render() {
    return (

      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/accountability-buddy-chat" exact component={AccountabilityBuddyChat} />
          <Route path="/similar-activities-finder" exact component={SimilarActivitiesFinder} />
          <Route path="/carbon-emission-calculator" exact component={CarbonEmissionCalculator} />
          <Route path="/goal-setter-with-buddy" exact component={GoalSetterWithBuddy} />
          <Route path="/activity-generation" exact component={ActivityGeneration} />
          <Route path="/certificate-generation" exact component={CertificateGeneration} />
          <Route path="/community-page" exact component={CommunityPage} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
        <NavbarBottom></NavbarBottom>
      </Router>
    );
  }
}

export default App;
