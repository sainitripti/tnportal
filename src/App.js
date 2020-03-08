import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import HistoryPage from "./components/HistoryPage";
import AlumniPage from "./components/AlumniPage";
import FacultyResearchPage from "./components/FacultyResearchPage";
import CoursesOfferedPage from "./components/CoursesOfferedPage";
import ProcedurePage from "./components/ProcedurePage";
import RegisterPage from "./components/RegisterPage";
import ContactUsPage from "./components/ContactUsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
      <Header></Header>
      <Router>  
        <Route path="/" exact component={HomePage} />       
        <Route path="/login" exact component={LoginPage} />
        <Route path="/history" exact component={HistoryPage} />
        <Route path="/alumni" exact component={AlumniPage} />
        <Route path="/faculty-research" exact component={FacultyResearchPage} />
        <Route path="/courses-offered" exact component={CoursesOfferedPage} />
        <Route path="/procedure" exact component={ProcedurePage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/contact-us" exact component={ContactUsPage} />
      </Router> 
      <Footer></Footer>
      </div>         
    );
  }
}
export default App;