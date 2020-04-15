import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getResults } from '../actions/resultActions';
import ResultCard from './ResultCard';

class ResultPage extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        results: PropTypes.array.isRequired,
        getResults: PropTypes.func.isRequired
    };
    
    componentDidMount() { 
        this.props.getResults();     
    }

    render() {
        return (
                <div className="content">
                <div className="container-fluid">
                {this.props.results.map(function(result, index) {
                    return <ResultCard key={result.companyName} result = {result}/>;
                })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    results: state.result.results
});

export default connect(
    mapStateToProps,
    { getResults }
)
(ResultPage);
