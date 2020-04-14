import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudent } from '../actions/studentActions';
import {
    Card,
    CardHeader,
    CardBody,
    Table
} from 'reactstrap';

class StudentProfilePage extends Component {

    state = {
        enrollmentNum: "",
        name: "",
        emailID: "",
        phoneNumber: "",
        branch: "",
        course: "",
        graduationYear: "",
        currentPercentage: "",
        percentage10: "",
        percentage12: "",
        activeBacklogs: "",
        deadBacklogs: ""
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        getStudent: PropTypes.func.isRequired,
        studentDetails: PropTypes.object
    };

    componentDidMount() { 
        const {enrollmentNum} = this.props.user;
        this.props.getStudent(enrollmentNum);   
    }

    componentDidUpdate(prevProps) {
        const {studentDetails} = this.props;
        if(studentDetails !== prevProps.studentDetails && studentDetails != null){        
            this.setState({
                enrollmentNum: studentDetails.enrollmentNum,
                name: studentDetails.name,
                emailID: studentDetails.emailID,
                phoneNumber: studentDetails.phoneNumber,
                branch: studentDetails.branch,
                course: studentDetails.course,
                graduationYear: studentDetails.graduationYear,
                currentPercentage: studentDetails.currentPercentage,
                percentage10: studentDetails.percentage10,
                percentage12: studentDetails.percentage12,
                activeBacklogs: studentDetails.activeBacklogs,
                deadBacklogs: studentDetails.deadBacklogs
            }) 
        }
    }

    render() {
        return (
            <section>
                <Card className="mb-3 custom-width custom-margin">
                    <CardHeader className="dark-mode">Student Details</CardHeader>
                    <CardBody>
                    <Table borderless>
                        <tbody>
                            <tr>
                            <td>Enrollment Number: </td>
                            <td>{this.state.enrollmentNum}</td>
                            </tr>
                            <tr>
                            <td>Name: </td>
                            <td>{this.state.name}</td>
                            </tr>
                            <tr>
                            <td>Email ID:</td>
                            <td>{this.state.emailID}</td>
                            </tr>
                            <tr>
                            <td>Phone Number:</td>
                            <td>{this.state.phoneNumber}</td>
                            </tr>
                            <tr>
                            <td>Branch: </td>
                            <td>{this.state.branch}</td>
                            </tr>
                            <tr>
                            <td>Course: </td>
                            <td>{this.state.course}</td>
                            </tr>
                            <tr>
                            <td>Graduation Year:</td>
                            <td>{this.state.graduationYear}</td>
                            </tr>
                            <tr>
                            <td>Current Percentage:</td>
                            <td>{this.state.currentPercentage}</td>
                            </tr>
                            <tr>
                            <td>Class 10th Percentage: </td>
                            <td>{this.state.percentage10}</td>
                            </tr>
                            <tr>
                            <td>Class 12th Percentage: </td>
                            <td>{this.state.percentage12}</td>
                            </tr>
                            <tr>
                            <td>Active Backlogs:</td>
                            <td>{this.state.activeBacklogs}</td>
                            </tr>
                            <tr>
                            <td>Dead Backlogs:</td>
                            <td>{this.state.deadBacklogs}</td>
                            </tr>
                        </tbody>		
                        </Table>       
                    </CardBody>
                </Card>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    studentDetails: state.student.studentDetails
});

export default connect(
    mapStateToProps,
    { getStudent }
)
(StudentProfilePage);