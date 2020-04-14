import React, { Component } from 'react';
import './css/CompanyRegisterPage.css';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addCompany, clearCompanyMessages } from '../actions/companyActions';

import {
    Form,
    FormGroup,
    Button,
    Label,
    Input,
    Row, 
    Col, 
    Card, 
    CardBody, 
    CardHeader,
    UncontrolledAlert
} from 'reactstrap';

class CompanyRegisterPage extends Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
   
    state = {
        companyName: null,
        contactPerson: null,
        phoneNumber: null,
        emailID: null,
        jobProfile: null,
        technical: null,
        nontechnical: null,
        fulltime: null,
        intern: null,
        jobLocation: null,
        jobDescription: null,
        linkToJD: null,
        targetBatchYear: null,
        cse: null,
        it: null,
        ece: null,
        mae: null,
        architecture: null,
        ai: null,
        ism: null,
        vlsi: null,
        rae: null,
        mca: null,
        cutoffPercentage: null,
        activeBacklogs: null,
        deadBacklogs: null,
        prefferedVisitDateOrWeek: null,
        writtenTest: null,
        onlineTest: null,
        groupDiscussion: null,
        technicalRound: null,
        hRRound: null,
        numPanels: null,
        infrastructure: null,
        other: null,
        otherInfoForStudents: null
    };

    static propTypes = {
        addCompany: PropTypes.func.isRequired,
        clearCompanyMessages: PropTypes.func.isRequired,
        msg: PropTypes.string
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    onSubmit(e) {
        e.preventDefault();

        const {
            companyName,
            contactPerson,
            phoneNumber,
            emailID,
            jobProfile,
            technical,
            nontechnical,
            fulltime,
            intern,
            jobLocation,
            jobDescription,
            linkToJD,
            targetBatchYear,
            cse,
            it,
            ece,
            mae,
            architecture,
            ai,
            ism,
            vlsi,
            rae,
            mca,
            cutoffPercentage,
            activeBacklogs,
            deadBacklogs,
            prefferedVisitDateOrWeek,
            writtenTest,
            onlineTest,
            groupDiscussion,
            technicalRound,
            hRRound,
            numPanels,
            infrastructure,
            other,
            otherInfoForStudents
        } = this.state;

        let companyDetails = {
            companyName,
            contactPerson,
            phoneNumber,
            emailID
        };

        let domain;

        if(technical !== null && nontechnical !== null){
            domain = "both";
        }
        else if(technical !== null){
            domain = "technical";
        }
        else if(nontechnical !== null) {
            domain = "nontechnical";
        }
        else{
            domain = "none";
        }

        let jobRole;

        if(fulltime !== null && intern !== null){
            jobRole = "both";
        }
        else if(fulltime !== null){
            jobRole = "technical";
        }
        else if(intern !== null) {
            jobRole = "nontechnical";
        }
        else{
            jobRole = "none";
        }

        let jobDetails = {
            jobProfile,
            domain,
            jobRole,
            jobLocation,
            jobDescription,
            linkToJD
        };

        let targetCourses = [];

        if(cse)
            targetCourses.push(cse);
        if(it)
            targetCourses.push(it);
        if(ece)
            targetCourses.push(ece);
        if(mae)
            targetCourses.push(mae);
        if(architecture)
            targetCourses.push(architecture);
        if(ai)
            targetCourses.push(ai);
        if(ism)
            targetCourses.push(ism);
        if(vlsi)
            targetCourses.push(vlsi);
        if(rae)
            targetCourses.push(rae);
        if(mca)
            targetCourses.push(mca);

        let eligibility = {
            targetBatchYear,
            targetCourses,
            cutoffPercentage,
            activeBacklogs,
            deadBacklogs
        };

        let selectionProcedure = {
            prefferedVisitDateOrWeek,
            writtenTest,
            onlineTest,
            groupDiscussion,
            technicalRound,
            hRRound
        };

        let requirements = {
            numPanels,
            infrastructure,
            other
        };
        
        const newCompany = {
            companyDetails,
            jobDetails,
            eligibility,
            selectionProcedure,
            requirements,
            otherInfoForStudents
        };
        
        this.props.addCompany(newCompany);
        //window.location.reload(false);
    }

    render() {
        return (
            <section>
            <Card className="custom-width custom-margin">
            <CardHeader className="dark-mode">Job Announcement Form</CardHeader>
            
            <CardBody>
                
                <Form id="jaf" onSubmit={this.onSubmit}>

                <Card>
                    <CardHeader><strong>1. Company Details</strong></CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Label for="companyName">Company Name</Label>
                            <Input type="text" name="companyName" id="companyName" placeholder="Company Name" onChange={this.onChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="contactPerson">Name of the Company Representative</Label>
                            <Input type="text" name="contactPerson" id="contactPerson" placeholder="Name" onChange={this.onChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phoneNumber">Contact Number</Label>
                            <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="+91-" onChange={this.onChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="emailID">Email</Label>
                            <Input type="email" name="emailID" id="emailID" placeholder="x@company.com" onChange={this.onChange} required/>
                        </FormGroup>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader><strong>2. Job Details</strong></CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Label for="jobProfile">Job Title</Label>
                            <Input type="text" name="jobProfile" id="jobProfile" placeholder="e.g. Software Engineer" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Domain</Label>
                                <FormGroup check>
                                    <Label for="technical" check>
                                    <Input type="checkbox" value="technical" name="technical" onChange={this.onChange}/>{' '}
                                    Technical
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label for="nontechnical" check>
                                    <Input type="checkbox" value="nontechnical" name="nontechnical" onChange={this.onChange}/>{' '}
                                    Non-Technical
                                    </Label>
                                </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label>Job Role</Label>
                            <FormGroup check>
                                <Label for="fulltime"  check>
                                <Input type="checkbox" value="fulltime" name="fulltime" onChange={this.onChange}/>{' '}
                                Full Time Employee
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label for="intern" check>
                                <Input type="checkbox" value="intern" name="intern" onChange={this.onChange}/>{' '}
                                    Intern        
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label for="jobLocation">Job Location</Label>
                            <Input type="text" name="jobLocation" id="jobLocation" placeholder="Location(s)" onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="jobDescription">Job Desciption</Label>
                            <Input type="text" name="jobDescription" id="jobDescription" placeholder="Please enter job desciption (OR)" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="linkToJD">Job Desciption</Label>
                            <Input type="text" name="linkToJD" id="linkToJD" placeholder="Please enter a drive link." onChange={this.onChange}/>
                        </FormGroup>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader><strong>3. Eligibility Criteria</strong></CardHeader>
                    <CardBody>

                        <FormGroup>
                            <Label for="targetBatchYear">Target Batch</Label>
                            <Input type="text" name="targetBatchYear" id="targetBatchYear" placeholder="e.g. 2020,2021" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Target Branch</Label>
                            <FormGroup>
                                <Label><em>B.Tech.</em></Label>    
                                <FormGroup check>
                                    <Label  for="cse" check>
                                    <Input type="checkbox"  value="cse" name="cse" onChange={this.onChange}/>{' '}
                                    Computer Science and Engineering
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label for="it" check>
                                    <Input type="checkbox"  value="it" name="it" onChange={this.onChange}/>{' '}
                                    Information Technology
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label for="ece" check>
                                    <Input type="checkbox" value="ece" name="ece" onChange={this.onChange}/>{' '}
                                    Electronics and Communication Engineering
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label for="mae" check>
                                    <Input type="checkbox" value="mae" name="mae" onChange={this.onChange}/>{' '}
                                    Mechanical and Automation Engineering
                                    </Label>
                                </FormGroup>
                            </FormGroup> 
                            <FormGroup>
                                <Label><em>B.Arch</em></Label>
                                <FormGroup check>
                                    <Label for="architecture" check>
                                    <Input type="checkbox" value="architecture" name="architecture" onChange={this.onChange}/>{' '}
                                    Architecture and Planning
                                    </Label>
                                </FormGroup>
                                </FormGroup>
                            <FormGroup>
                                <Label><em>M.Tech.</em></Label>
                                <FormGroup check>
                                    <Label for="ai" check>
                                    <Input type="checkbox" value="ai" name="ai" onChange={this.onChange}/>{' '}
                                    Artificial Intelligence
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label for="ism" check>
                                    <Input type="checkbox" value="ism" name="ism" onChange={this.onChange}/>{' '}
                                    Information Security and Management
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label for="vlsi" check>
                                    <Input type="checkbox" value="vlsi" name="vlsi" onChange={this.onChange}/>{' '}
                                    Very Large Scale Integration
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label for="rae" check>
                                    <Input type="checkbox" value="rae" name="rae" onChange={this.onChange}/>{' '}
                                    Robotics and Automation Engineering
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label><em>MCA</em></Label>
                                <FormGroup check>
                                    <Label for="mca" check>
                                    <Input type="checkbox" value="mca" name="mca" onChange={this.onChange}/>{' '}
                                    Master of Computer Application
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </FormGroup>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="cutoffPercentage">Cutoff %</Label>
                                    <Input type="text" name="cutoffPercentage" id="cutoffPercentage" onChange={this.onChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="activeBacklogs">Active Backlogs</Label>
                                    <Input type="text" name="activeBacklogs" id="activeBacklogs" onChange={this.onChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="deadBacklogs">Dead Backlogs</Label>
                                    <Input type="text" name="deadBacklogs" id="deadBacklogs" onChange={this.onChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader><strong>4. Selection Procedure</strong></CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Label for="prefferedVisitDateOrWeek">Preffered week/date of visit</Label>
                            <Input type="text" name="prefferedVisitDateOrWeek" id="prefferedVisitDateOrWeek" placeholder="e.g. dd/mm/yyyy - dd/mm/yyyy" onChange={this.onChange}/>
                        </FormGroup>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="writtenTest">Written Tests</Label>
                                    <Input type="text" name="writtenTest" id="writtenTest" onChange={this.onChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="onlineTest">Online Rounds</Label>
                                    <Input type="text" name="onlineTest" id="onlineTest" onChange={this.onChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="groupDiscussion">Group Discussion Round</Label>
                                    <Input type="text" name="groupDiscussion" id="groupDiscussion" onChange={this.onChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="technicalRound">Technical Rounds</Label>
                                    <Input type="text" name="technicalRound" id="technicalRound" onChange={this.onChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="hRRound">HR Rounds</Label>
                                    <Input type="text" name="hRRound" id="hRRound" onChange={this.onChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader><strong>5. Requirements</strong></CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Label for="numPanels">No. of panels visiting</Label>
                            <Input type="text" name="numPanels" id="numPanels" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="infrastructure">Infrastructure Requirements</Label>
                            <Input type="text" name="infrastructure" id="infrastructure" onChange={this.onChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="other">Any other specific Requirements</Label>
                            <Input type="text" name="other" id="other" onChange={this.onChange}/>
                        </FormGroup>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader><strong>6. Any other information to be shared with students:</strong></CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Input type="textarea" name="otherInfoForStudents" id="otherInfoForStudents" onChange={this.onChange} required/>
                        </FormGroup>
                    </CardBody>
                </Card>
                { this.props.msg ? <UncontrolledAlert>{ this.props.msg }</UncontrolledAlert>           
                : null }
                <Button type="submit" color="dark" id="submitButton" block>Submit</Button>
                
                </Form>  

            </CardBody>
            </Card>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    msg: state.company.msg
});

export default connect(
    mapStateToProps,
    { addCompany, clearCompanyMessages }
)(CompanyRegisterPage);
