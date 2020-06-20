import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

//Component Imports
import ActivityGeneration from "./components/pages/activity-generation.component";
import CommunityPage from "./components/pages/community-page.component";
import LandingPage from "./components/pages/landing-page.component";
import LoginPage from "./components/pages/login-page.component";
import Milestones from "./components/pages/milestones.component";
import ForumThread from "./components/pages/individualForumThread.component";
import ClaimRewards from "./components/pages/claim-rewards.component";
import LogActivity from "./components/pages/log-activity.component";
//Navbar Imports
import Navbar from "./components/navbars/navbar.component";
import NavbarBottom from "./components/navbars/navbar-bottom.component";


class App extends Component {
  //For changing the background color depending on page
  constructor(props) {
    super(props);
    this.state = {
      color:'#FFFFFF'
    }
  }

  changeColor = color => {
    this.setState({color})
  }
  // '#c5c5da'
  render() {
    return (

      <Router>
        <div style={{backgroundColor:this.state.color}}>
          <Navbar></Navbar>
          <Switch>
            <Route path="/activity-generation" exact component={ActivityGeneration} />
            <Route path="/community-page" exact component={CommunityPage} />
            <Route path="/community-page/thread-challenge-1" exact component={ForumThread} />
            <Route path="/login-page" exact component={LoginPage} />
            <Route path="/" exact component={LandingPage} />
            <Route path="/milestones" exact component={Milestones} />
            <Route path="/claim-rewards" exact component={ClaimRewards} />
            <Route path="/log-activity" component={LogActivity} />
          </Switch>
          <NavbarBottom></NavbarBottom>
        </div>

      </Router>
    );
  }
}

export default App;
