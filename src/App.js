import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
import StudentProfilePage from './components/StudentProfilePage';

import store from './store';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadUser } from './actions/authActions';

class App extends Component {

  state = {
    user: null,
    isAuthenticated: false
  }
  componentDidMount(){
    store.dispatch(loadUser());
  }

  componentDidUpdate(prevProps){
    let authUser = this.props.auth.user;
    let isUserAuthenticated = this.props.auth.isAuthenticated;

    if(authUser !== prevProps.authUser && authUser!== this.state.user){
      this.setState({user: authUser, isAuthenticated: isUserAuthenticated});
    }
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
                    !this.state.isAuthenticated ? <Route path="/login" exact component={NewLoginPage} />
                    : (isAuthenticated && user.role === "STUDENT" ? <Route path="/login" exact component={DashboardPage}/> : <Route path="/login" exact component={AdminDashboardPage}/>)
                  }
                  { 
                    !this.state.isAuthenticated ? <Route path="/register" exact component={NewRegisterPage} />
                    : (isAuthenticated && user.role === "STUDENT" ? <Route path="/register" exact component={DashboardPage}/> : <Route path="/register" exact component={AdminDashboardPage}/>)
                  }
                  <Route path="/history" exact component={HistoryPage} />
                  <Route path="/alumni" exact component={AlumniPage} />
                  <Route path="/faculty-research" exact component={FacultyResearchPage} />
                  <Route path="/courses-offered" exact component={CoursesOfferedPage} />
                  <Route path="/students-achievements-awards" exact component={AchievementsPage} />
                  <Route path="/procedure" exact component={ProcedurePage} />
                  <Route path="/contact-us" exact component={ContactUsPage} />
                  <Route path="/company-register" exact component={CompanyRegisterPage} />     
                  { 
                    !this.state.isAuthenticated ? <Route path="/student-dashboard" component={NewLoginPage} />
                    : (isAuthenticated && user.role === "STUDENT" && <Route path="/student-dashboard" exact component={DashboardPage}/>)
                  } 
                  { 
                    !this.state.isAuthenticated ? <Route path="/student-profile" component={NewLoginPage} />
                    : (isAuthenticated && user.role === "STUDENT" && <Route path="/student-profile" exact component={StudentProfilePage}/>)
                  }
                  { 
                    !this.state.isAuthenticated ? <Route path="/student-result" component={NewLoginPage} />
                    : (isAuthenticated && user.role === "STUDENT" && <Route path="/student-result" exact component={ResultPage}/>)
                  }
                  { 
                    !this.state.isAuthenticated ? <Route path="/view-registrations" component={NewLoginPage} />
                    : (isAuthenticated && <Route path="/view-registrations" exact component={DriveRegistrationsPage}/>)
                  } 
                  { 
                    !this.state.isAuthenticated ? <Route path="/admin-dashboard" component={NewLoginPage} />
                    : (isAuthenticated && user.role === "ADMIN" && <Route path="/admin-dashboard" exact component={AdminDashboardPage}/>)
                  } 
                  { 
                    !this.state.isAuthenticated ? <Route path="/student-result" component={NewLoginPage} />
                    : (isAuthenticated && user.role === "ADMIN" && <Route path="/admin-result" exact component={AdminResultPage}/>)
                  }
                  
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