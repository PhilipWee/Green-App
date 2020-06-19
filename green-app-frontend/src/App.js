import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

//Component Imports
import AccountabilityBuddyChat from "./components/accountability-buddy-chat.component";
import SimilarActivitiesFinder from "./components/similar-activities-finder.component";
import CarbonEmissionCalculator from "./components/carbon-emission-calculator.component";
import GoalSetterWithBuddy from "./components/goal-setter-with-buddy.component";
import ActivityGeneration from "./components/activity-generation.component";
import CertificateGeneration from "./components/certificate-generation.component";
import CommunityPage from "./components/community-page.component";
import LandingPage from "./components/landing-page.component";


class App extends Component {
  render() {
    return (
      <Router>
        
        <Route path="/accountability-buddy-chat" exact component={AccountabilityBuddyChat} />
        <Route path="/similar-activities-finder" exact component={SimilarActivitiesFinder} />
        <Route path="/carbon-emission-calculator" exact component={CarbonEmissionCalculator} />
        <Route path="/goal-setter-with-buddy" exact component={GoalSetterWithBuddy} />
        <Route path="/activity-generation" exact component={ActivityGeneration} />
        <Route path="/certificate-generation" exact component={CertificateGeneration} />
        <Route path="/community-page" exact component={CommunityPage} />
        <Route path="/accountability-buddy-chat" exact component={AccountabilityBuddyChat} />
        <Route path="/" exact component={LandingPage} />
      </Router>
    );
  }
}

export default App;
