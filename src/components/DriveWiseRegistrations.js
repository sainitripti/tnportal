import React, { Component } from 'react';
import { CardHeader, CardBody, Card } from 'reactstrap';

class DriveWiseRegistrations extends Component {
    render() {
        let {driveRegistrations} = this.props;
        
        return (
            <Card className="mb-3 custom-width custom-margin">
				<CardHeader className="dark-mode">List of students registered for {driveRegistrations.drive}</CardHeader>
				<CardBody>
                    <ol>
                        {driveRegistrations.arEnrollmentNum.map(function(enrollmentNum) {
                            return <li key={enrollmentNum}>{enrollmentNum}</li>
                        })}
                    </ol>
                </CardBody>
            </Card>
        )
    }
}

export default DriveWiseRegistrations;
