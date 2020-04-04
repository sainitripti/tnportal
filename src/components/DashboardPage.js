import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJobs } from '../actions/jobActions';
import CompanyCard from './CompanyCard';

class DashboardPage extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        jobs: PropTypes.array.isRequired,
        getJobs: PropTypes.func.isRequired
    };
    
    componentDidMount() { 
        this.props.getJobs();     
    }

    render() {
        return (
                <div className="content">
                <div className="container-fluid">
                <div className="col">
                    <div className="col-xl-12">
                {this.props.jobs.map(function(job, index) {
                    return <CompanyCard key={job.drive} job = {job}/>;
                })}
                </div>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    jobs: state.job.jobs
});

export default connect(
    mapStateToProps,
    { getJobs }
)
(DashboardPage);
