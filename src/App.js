import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import HomePage from "./components/HomePage";
import NewLoginPage from "./components/NewLoginPage";
import HistoryPage from "./components/HistoryPage";
import AlumniPage from "./components/AlumniPage";
import FacultyResearchPage from "./components/FacultyResearchPage";
import CoursesOfferedPage from "./components/CoursesOfferedPage";
import ProcedurePage from "./components/ProcedurePage";
import NewRegisterPage from "./components/NewRegisterPage";
import ContactUsPage from "./components/ContactUsPage";
import AchievementsPage from './components/AchievementsPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CompanyRegisterPage from "./components/CompanyRegisterPage";
import PageNotFound from './components/PageNotFound';
import DashboardPage from './components/DashboardPage';
import AdminDashboardPage from './components/AdminDashboardPage';
import ResultPage from './components/ResultPage';
import AdminResultPage from './components/AdminResultPage';
import DriveRegistrationsPage from './components/DriveRegistrationsPage';

import store from './store';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadUser } from './actions/authActions';
import RegisterPage from "./components/RegisterPage";

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated, user, isLoading } = this.props.auth;
    return (
      <div>
        { isLoading ? 
            <div>{console.log("Loading....")}</div> 
            : 
            <div>
              {console.log("Loaded....")}
                <Header></Header>
                <Router>
                <Switch>    
                  { 
                    !isAuthenticated ? <Route path="/login" component={NewLoginPage} />
                    : (isAuthenticated && user.role === "STUDENT" ? <Route path="/student-dashboard" exact component={DashboardPage}/> : <Route path="/admin-dashboard" exact component={AdminDashboardPage}/>)
                  }
                  <Route path="/register" exact component={NewRegisterPage} />
                  <Route path="/history" exact component={HistoryPage} />
                  <Route path="/alumni" exact component={AlumniPage} />
                  <Route path="/faculty-research" exact component={FacultyResearchPage} />
                  <Route path="/courses-offered" exact component={CoursesOfferedPage} />
                  <Route path="/students-achievements-awards" exact component={AchievementsPage} />
                  <Route path="/procedure" exact component={ProcedurePage} />
                  <Route path="/contact-us" exact component={ContactUsPage} />
                  <Route path="/company-register" exact component={CompanyRegisterPage} />
                  { isAuthenticated && user.role==="ADMIN" ? <Route path="/admin-dashboard" exact component={AdminDashboardPage}/> : <Redirect to="/login" /> }
                  { isAuthenticated && user.role==="STUDENT" ? <Route path="/student-dashboard" exact component={DashboardPage}/> : <Redirect to="/login" /> }
                  { isAuthenticated && user.role==="STUDENT" ? <Route path="/student-result" exact component={ResultPage}/> : <Redirect to="/login" />}
                  { isAuthenticated && user.role==="ADMIN" ? <Route path="/admin-result" exact component={AdminResultPage}/> : <Redirect to="/login" />}
                  { isAuthenticated && user.role==="ADMIN" ? <Route path="/view-registrations" exact component={DriveRegistrationsPage}/> : <Redirect to="/login" />}
                  { isAuthenticated && user.role==="STUDENT" ? <Route path="/view-registrations" exact component={DriveRegistrationsPage}/> : <Redirect to="/login" />}
                  <Route path="/" exact component={HomePage} />
                  <Route path="/*" component={PageNotFound} />
                </Switch>
                </Router>  
                <Footer></Footer>
            </div> 
        }
      </div>    
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(App);