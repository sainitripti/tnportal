import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ContactUsPage from "./components/ContactUsPage";

class App extends Component {
  render() {
    return (
      <Router>  
        <Route path="/" exact component={HomePage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/login" component={LoginPage} />
      </Router>          
    );
  }
}
export default App;