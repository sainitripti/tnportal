import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCompanies } from '../actions/companyActions';
import CompanyCard from './CompanyCard';

class DashboardPage extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        companies: PropTypes.array.isRequired,
        getCompanies: PropTypes.func.isRequired
    };
    
    componentWillMount() { 
        console.log("dasboard component will mount");
        this.props.getCompanies();     
    }

    render() {
        return (
                <div className="content">
                <div className="container-fluid">
                <div className="col">
                    <div className="col-xl-12">
                {this.props.companies.map(function(company, index) {
                    return <CompanyCard key={company.name} company= {company}/>;
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
    companies: state.company.companies
});

export default connect(
    mapStateToProps,
    { getCompanies }
)
(DashboardPage);
