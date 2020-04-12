import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRegistrations } from '../actions/registrationActions';
import DriveWiseRegistrations from './DriveWiseRegistrations';

class DriveRegistrationsPage extends Component {

    static propTypes = {
        driveWiseRegistrations: PropTypes.array.isRequired,
        getRegistrations: PropTypes.func.isRequired
    };
    
    componentDidMount() { 
        this.props.getRegistrations();     
    }

    render() {
        const {driveWiseRegistrations} = this.props;
        
        return (          
            <div> 		
                {driveWiseRegistrations.map(driveRegistrations=> <DriveWiseRegistrations key={driveRegistrations.drive} driveRegistrations = {driveRegistrations}/>)}     
            </div>  
        )
    }
}

const mapStateToProps = state => ({
    driveWiseRegistrations: state.registration.driveWiseRegistrations
});

export default connect(
    mapStateToProps,
    { getRegistrations }
)
(DriveRegistrationsPage);

