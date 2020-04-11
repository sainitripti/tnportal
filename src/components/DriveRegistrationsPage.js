import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRegistrations } from '../actions/registrationActions';
import DriveWiseRegistrations from './DriveWiseRegistrations';

class DriveRegistrationsPage extends Component {

    static propTypes = {
        registrations: PropTypes.array.isRequired,
        getRegistrations: PropTypes.func.isRequired
    };
    
    componentDidMount() { 
        this.props.getRegistrations();     
    }

    render() {
        const {registrations} = this.props;
        let drives = [...new Set(registrations.map(registration => registration.drive))]; 
        
        return (          
            <div> 		
                {drives.map(function(drive, index) {
                    return <DriveWiseRegistrations key={drive} registrations = {registrations} drive = {drive}/>;
                })}               
            </div>  
        )
    }
}

const mapStateToProps = state => ({
    registrations: state.registration.registrations
});

export default connect(
    mapStateToProps,
    { getRegistrations }
)
(DriveRegistrationsPage);

