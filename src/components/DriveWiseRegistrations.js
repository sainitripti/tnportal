import React, { Component } from 'react';
import { CardHeader, CardBody, Card } from 'reactstrap';

class DriveWiseRegistrations extends Component {
    render() {
        let students = [];
        let {registrations} = this.props;
        registrations.forEach(registration => {
            if(registration.drive === this.props.drive){
                students.push(registration.enrollmentNum);
            }
        });
        return (
            <Card className="mb-3 custom-width custom-margin">
				<CardHeader className="dark-mode">List of students registered for {this.props.drive}</CardHeader>
				<CardBody>
                    <ol>
                        {students.map(function(student) {
                            return <li key={student}>{student}</li>
                        })}
                    </ol>
                </CardBody>
            </Card>
        )
    }
}

export default DriveWiseRegistrations;
