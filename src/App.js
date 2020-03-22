import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import HistoryPage from "./components/HistoryPage";
import AlumniPage from "./components/AlumniPage";
import FacultyResearchPage from "./components/FacultyResearchPage";
import CoursesOfferedPage from "./components/CoursesOfferedPage";
import ProcedurePage from "./components/ProcedurePage";
import RegisterPage from "./components/RegisterPage";
import ContactUsPage from "./components/ContactUsPage";
import AchievementsPage from './components/AchievementsPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CompanyRegisterPage from "./components/CompanyRegisterPage";
import PageNotFound from './components/PageNotFound';
import DashboardPage from './components/DashboardPage';

import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/authActions';

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
      <div>
      <Header></Header>
      <Router>
      <Switch>    
        <Route path="/login" exact component={LoginPage} />
        <Route path="/history" exact component={HistoryPage} />
        <Route path="/alumni" exact component={AlumniPage} />
        <Route path="/faculty-research" exact component={FacultyResearchPage} />
        <Route path="/courses-offered" exact component={CoursesOfferedPage} />
        <Route path="/students-achievements-awards" exact component={AchievementsPage} />
        <Route path="/procedure" exact component={ProcedurePage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/contact-us" exact component={ContactUsPage} />
        <Route path="/company-register" exact component={CompanyRegisterPage} />
        <Route path="/student-dashboard" exact component={DashboardPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/*" component={PageNotFound} />
      </Switch>
      </Router>  
      <Footer></Footer>
      </div>  
      </Provider>       
    );
  }
}
export default App;