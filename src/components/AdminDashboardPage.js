import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJobs, addNewJob } from '../actions/jobActions';
import AdminCompanyCard from './AdminCompanyCard';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
    Card,
    CardBody,
    CardHeader,
    InputGroupAddon,
    InputGroup
} from 'reactstrap';

class DashboardPage extends Component {

    state = {
        drive: null,
        profile: null,
        role: null,
        location: null,
        domain: null,
        strTargetBatchYear: null,
        strTargetCourses: null,
        visitDate: null,
        lastDateToRegister: null,
        dateOfJobPosting: null,
        stipend: "0",
        totalCTC: "0",
        fixed: "0",
        variable:"0",
        bonds: "0",
        otherAllowances: "0",
        cutoffPercentage: "0",
        activeBacklogs: "0",
        deadBacklogs: "0",
        onlineTest: null,
        writtenTest: null,
        groupDiscussion: null,
        technicalRound: null,
        hrRound: null,
        description: null,
        otherInfoForStudents: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        jobs: PropTypes.array.isRequired,
        getJobs: PropTypes.func.isRequired,
        addNewJob: PropTypes.func.isRequired,
        msg: PropTypes.string
    };
  
    componentDidMount() { 
        this.props.getJobs();     
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { 
            drive,
            profile,
            role,
            location,
            domain,
            strTargetBatchYear,
            strTargetCourses,
            visitDate,
            lastDateToRegister,
            dateOfJobPosting,
            stipend,
            totalCTC,
            fixed,
            variable,
            bonds,
            otherAllowances,
            cutoffPercentage,
            activeBacklogs,
            deadBacklogs,
            onlineTest,
            writtenTest,
            groupDiscussion,
            technicalRound,
            hrRound,
            description,
            otherInfoForStudents } = this.state;
        
        const targetBatchYear = strTargetBatchYear ? strTargetBatchYear.split(",").map((batchYear) =>  batchYear.trim()) : [];
        const targetCourses = strTargetCourses ? strTargetCourses.split(",").map((course) =>  course.trim()) : [];
        
        let compensationOffered = {};
        let breakupCTC= {};

        if(fixed)
            breakupCTC["fixed"] = fixed;

        if(variable)
            breakupCTC["variable"] = variable;

        if(bonds)
            breakupCTC["bonds"] = bonds;

        if(otherAllowances)
            breakupCTC["otherAllowances"] = otherAllowances;
        
        compensationOffered["breakupCTC"] = breakupCTC;

        if(stipend)
            compensationOffered["stipend"] = stipend;

        if(totalCTC)
            compensationOffered["totalCTC"] = totalCTC;

        let eligibilityCriteria = {};

        if(cutoffPercentage)
            eligibilityCriteria["cutoffPercentage"] = cutoffPercentage;
        
        if(activeBacklogs)
            eligibilityCriteria["activeBacklogs"] = activeBacklogs;
        
        if(deadBacklogs)
            eligibilityCriteria["deadBacklogs"] = deadBacklogs;

        let selectionProcedure = {};
        
        if(writtenTest)
            selectionProcedure["writtenTest"] = writtenTest;
        
        if(onlineTest)
            selectionProcedure["onlineTest"] = onlineTest;
        
        if(groupDiscussion)
            selectionProcedure["groupDiscussion"] = groupDiscussion;
        
        if(technicalRound)
            selectionProcedure["technicalRound"] = technicalRound;
        
        if(hrRound)
            selectionProcedure["hrRound"] = hrRound;

        //Create a job object
     
        const newJob = {
            drive,
            profile,
            role,
            location,
            domain,
            targetBatchYear,
            targetCourses,
            visitDate,
            lastDateToRegister,
            dateOfJobPosting,
            compensationOffered,
            eligibilityCriteria,
            selectionProcedure,
            description,
            otherInfoForStudents
        };

        console.log(newJob);
        this.props.addNewJob(newJob);
    }


    render() {
        return (
                <div className="content">
                <div className="container-fluid">
                <div className="col">
                <div className="col-xl-12 custom-margin custom-width">
                        <Card>
                        <CardHeader className="dark-mode">Add New Job</CardHeader>
                        <CardBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>           
                                <div className="row">  
                                <div className="col-xl-8">                                        
                                <Label for="drive">Drive Name</Label>
                                <Input
                                    type="text"
                                    name="drive"
                                    id="drive"
                                    placeholder="Company X FTE Hiring Drive"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                <br/>
                                <div className="col-xl-4"> 
                                <Label for="profile">Profile</Label>
                                <Input
                                    type="text"
                                    name="profile"
                                    id="profile"
                                    placeholder="Software Developer"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                </div>
                                <br/>
                                <div className="row">  
                                <div className="col-xl-4"> 
                                <Label for="role">Role</Label>
                                <Input
                                    type="text"
                                    name="role"
                                    id="role"
                                    placeholder="Full Time/ Intern"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                <br/>
                                <div className="col-xl-4"> 
                                <Label for="location">Location</Label>
                                <Input
                                    type="text"
                                    name="location"
                                    id="location"
                                    placeholder="Delhi/ Bangalore"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                <br/>            
                                <div className="col-xl-4"> 
                                <Label for="domain">Domain</Label>
                                <Input
                                    type="text"
                                    name="domain"
                                    id="domain"
                                    placeholder="Technical/ Non-Technical"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                </div>
                                <br/>
                                <div className="row">
                                <div className="col-xl-6"> 
                                <Label for="strTargetBatchYear">Target Batches</Label>
                                <Input
                                    type="textarea"
                                    name="strTargetBatchYear"
                                    id="strTargetBatchYear"
                                    placeholder="Enter comma separated list of batch years"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                <br/>
                                <div className="col-xl-6"> 
                                <Label for="strTargetCourses">Target Courses</Label>
                                <Input
                                    type="textarea"
                                    name="strTargetCourses"
                                    id="strTargetCourses"
                                    placeholder="Enter comma separated list of course codes"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                </div>
                                <br/>
                                <div className="row">
                                <div className="col-xl-4"> 
                                <Label for="visitDate">Company Visit Date</Label>
                                <Input
                                    type="date"
                                    name="visitDate"
                                    id="visitDate"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                <br/>
                                <div className="col-xl-4">
                                <Label for="lastDateToRegister">Last Date to Register</Label>
                                <Input
                                    type="date"
                                    name="lastDateToRegister"
                                    id="lastDateToRegister"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                <br/>
                                <div className="col-xl-4">
                                <Label for="dateOfJobPosting">Date of Job Posting</Label>
                                <Input
                                    type="date"
                                    name="dateOfJobPosting"
                                    id="dateOfJobPosting"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                </div>
                                <br/>
                                <Card>
                                    <CardHeader><strong>Compensation Offered</strong></CardHeader>
                                <CardBody>
                                <div className="row">
                                <div className="col-xl-6"> 
                                <Label for="stipend">Stipend for Interns</Label>
                                <InputGroup>
                                <Input
                                    type="number"
                                    name="stipend"
                                    id="stipend"
                                    defaultValue="0"
                                    onChange={this.onChange}
                                />
                                <InputGroupAddon addonType="append">per month</InputGroupAddon>
                                </InputGroup>
                                </div>
                                <br/>
                                <div className="col-xl-6"> 
                                <Label for="totalCTC">Total CTC</Label>
                                <InputGroup>
                                <Input
                                    type="text"
                                    name="ctcFTE"
                                    id="ctcFTE"
                                    defaultValue="0.00"
                                    onChange={this.onChange}
                                />
                                <InputGroupAddon addonType="append">in LPA</InputGroupAddon>
                                </InputGroup>
                                </div> 
                                </div>
                                <br/>
                                <div className="row">
                                <div className="col-xl-3"> 
                                <Label for="fixed">Fixed Pay</Label>
                                <InputGroup>
                                <Input
                                    type="text"
                                    name="fixed"
                                    id="fixed"
                                    defaultValue="0.00"
                                    onChange={this.onChange}
                                />
                                <InputGroupAddon addonType="append">in LPA</InputGroupAddon>
                                </InputGroup>
                                </div>
                                <br/>
                                <div className="col-xl-3"> 
                                <Label for="variable">Variable Pay</Label>
                                <InputGroup>
                                <Input
                                    type="text"
                                    name="variable"
                                    id="variable"
                                    defaultValue="0.00"
                                    onChange={this.onChange}
                                />
                                <InputGroupAddon addonType="append">in LPA</InputGroupAddon>
                                </InputGroup>
                                </div>
                                <br/>
                                <div className="col-xl-3"> 
                                <Label for="bonds">Bonds</Label>
                                <InputGroup>
                                <Input
                                    type="text"
                                    name="bonds"
                                    id="bonds"
                                    defaultValue="0.00"
                                    onChange={this.onChange}
                                />
                                <InputGroupAddon addonType="append">in LPA</InputGroupAddon>
                                </InputGroup>
                                </div>
                                <br/>
                                <div className="col-xl-3"> 
                                <Label for="otherAllowances">Other Allowances</Label>
                                <InputGroup>
                                <Input
                                    type="text"
                                    name="otherAllowances"
                                    id="otherAllowances"
                                    defaultValue="0.00"
                                    onChange={this.onChange}
                                />
                                <InputGroupAddon addonType="append">in LPA</InputGroupAddon>
                                </InputGroup>
                                </div>
                                </div>
                                </CardBody>
                                </Card>
                                <br/>
                                <Card>
                                    <CardHeader><strong>Eligibility Criteria</strong></CardHeader>
                                <CardBody>
                                <div className="row">
                                <div className="col-xl-4"> 
                                <Label for="cutoffPercentage">Cutoff Percentage</Label>
                                <InputGroup>
                                <Input
                                    type="text"
                                    name="cutoffPercentage"
                                    id="cutoffPercentage"
                                    defaultValue="0.00"
                                    onChange={this.onChange}
                                />
                                <InputGroupAddon addonType="append">%</InputGroupAddon>
                                </InputGroup>
                                </div>
                                <br/>
                                <div className="col-xl-4"> 
                                <Label for="activeBacklogs">No. of Active Backlogs allowed</Label>
                                <Input
                                    type="text"
                                    name="activeBacklogs"
                                    id="activeBacklogs"
                                    defaultValue="0"
                                    onChange={this.onChange}
                                />
                                </div>
                                <br/>
                                <div className="col-xl-4"> 
                                <Label for="deadBacklogs">No. of Dead Backlogs allowed</Label>
                                <Input
                                    type="text"
                                    name="deadBacklogs"
                                    id="deadBacklogs"
                                    defaultValue="0"
                                    onChange={this.onChange}
                                />
                                </div>
                                </div>
                                </CardBody>
                                </Card>
                                <br/>
                                <Card>
                                    <CardHeader><strong>Selection Procedure</strong></CardHeader>
                                <CardBody>
                                <div className="row">
                                <div className="col-xl-12"> 
                                <Label for="onlineTest">Online Test</Label>
                                <Input
                                    type="textarea"
                                    name="onlineTest"
                                    id="onlineTest"
                                    placeholder="Details of online test"
                                    onChange={this.onChange}
                                />
                                </div>
                                <br/>
                                </div>
                                <div className="row">
                                <div className="col-xl-6"> 
                                <Label for="writtenTest">Written Test</Label>
                                <Input
                                    type="textarea"
                                    name="writtenTest"
                                    id="writtenTest"
                                    placeholder="Details of written test"
                                    onChange={this.onChange}
                                />
                                </div>
                                <br/>
                                <div className="col-xl-6"> 
                                <Label for="groupDiscussion">Group Discussion</Label>
                                <Input
                                    type="textarea"
                                    name="groupDiscussion"
                                    id="groupDiscussion"
                                    placeholder="Details of Group Discussion"
                                    onChange={this.onChange}
                                />
                                </div>
                                </div>
                                <br/>
                                <div className="row">
                                <div className="col-xl-6"> 
                                <Label for="technicalRound">Technical Round</Label>
                                <Input
                                    type="textarea"
                                    name="technicalRound"
                                    id="technicalRound"
                                    placeholder="Details of Technical Round(s)"
                                    onChange={this.onChange}
                                />
                                </div>
                                <br/>
                                <div className="col-xl-6"> 
                                <Label for="hrRound">HR Round</Label>
                                <Input
                                    type="textarea"
                                    name="hrRound"
                                    id="hrRound"
                                    placeholder="Details of HR Round(s)"
                                    onChange={this.onChange}
                                />
                                </div>
                                </div>
                                </CardBody>
                                </Card>
                                <br/>
                                <div className="row">
                                <div className="col-xl-12">
                                <Label for="description">Job Description</Label>
                                <Input
                                    type="textarea"
                                    name="description"
                                    id="description"
                                    placeholder="Job Description"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                </div>
                                <br/>
                                <div className="row">
                                <div className="col-xl-12">
                                <Label for="otherInfoForStudents">Other information for students</Label>
                                <Input
                                    type="textarea"
                                    name="otherInfoForStudents"
                                    id="otherInfoForStudents"
                                    placeholder="Any other information for students"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                </div>
                               
                                <Button color="dark" style={{ marginTop: '2rem'}}>
                                    Post Job
                                </Button>
                                { this.props.msg ? <Alert>{ this.props.msg }</Alert>           
                                : null }
                            </FormGroup>
                        </Form>
                        </CardBody>
                        </Card>
                    </div>
                    <div className="col-xl-12">
                {this.props.jobs.map(function(job, index) {
                    return <AdminCompanyCard key={job.drive} job = {job}/>;
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
    jobs: state.job.jobs,
    msg: state.job.msg
});

export default connect(
    mapStateToProps,
    { getJobs, addNewJob }
)
(DashboardPage);
