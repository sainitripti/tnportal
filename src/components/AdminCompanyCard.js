import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import { modifyJob, deleteJob } from '../actions/jobActions';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter, 
    Table,
    InputGroupAddon,
    InputGroup
} from 'reactstrap';

class AdminCompanyCard extends Component {
	
	state = {
        modal:false,
        deleteModal: false,
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
        msg: PropTypes.string,
        modifyJob: PropTypes.func.isRequired,
        deleteJob: PropTypes.func.isRequired
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
		
		//Create a user object
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

        if(this.props.job && this.props.job._id){
            this.props.modifyJob(this.props.job._id, newJob);
        }
    }

    onDeleteButtonClick = () => {
        if(this.props.job && this.props.job._id){
            this.props.deleteJob(this.props.job._id);
        }
	}
	
	toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    toggleDeleteModal = () => {
        this.setState({
            deleteModal: !this.state.deleteModal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
	
	render() {
		let batches = "";
		this.props.job.targetBatchYear.forEach(batch => {
			batches = batches + " " + batch;
		})

		let courses = "";
		this.props.job.targetCourses.forEach(course => {
			courses = courses + " " + course;
		})

        return (
			<div>
				<Modal isOpen={this.state.deleteModal} toggle={this.toggleDeleteModal}>
                    <ModalHeader toggle={this.toggleDeleteModal}>Delete Job</ModalHeader>
                    <ModalBody>
                        { this.state.deleteModal && this.props.msg ? <Alert>{ this.props.msg }</Alert>           
                        : null }
                        <p>Are you sure you want to delete this job?</p>
                        <Button color="danger" onClick={this.onDeleteButtonClick} style={{ marginTop: '1rem'}}>
                            Yes, Delete Job
                        </Button>
                        <Button color="dark" onClick={this.toggleDeleteModal} style={{ margin: '1rem'}}>
                            No
                        </Button>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Edit Job</ModalHeader>
                    <ModalBody>
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
                                    Save Edited Job
                                </Button>
                                { this.props.msg ? <Alert>{ this.props.msg }</Alert>           
                                : null }
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

			<Card className="mb-3 custom-width custom-margin">
                <CardHeader className="dark-mode">
                    {this.props.job.drive}          
                    <Button className="delete-button btn-sm" onClick={this.toggleDeleteModal}><i className="fa fa-trash"></i> Delete Job</Button>
                    <Button className="edit-button btn-sm" onClick={this.toggle}><i className="fa fa-edit"></i> Edit Job</Button>
                </CardHeader>
				<CardBody>
				<Table striped borderless>
					<tbody>
						<tr>
						<td>Visit Date</td>
						<td>{this.props.job.visitDate}</td>
						</tr>
						<tr>
						<td>Profile</td>
						<td>{this.props.job.profile}</td>
						</tr>
						<tr>
						<td>Domain</td>
						<td>{this.props.job.domain}</td>
						</tr>
						<tr>
						<td>Role</td>
						<td>{this.props.job.role}</td>
						</tr>
						<tr>
						<td>Location</td>
						<td>{this.props.job.location}</td>
						</tr>
						<tr>
						<td>Job Description</td>
						<td>{this.props.job.description}</td>
						</tr>
						<tr>
						<td>Target Batches</td>
						<td>{batches}</td>
						</tr>
						<tr>
						<td>Target Courses</td>
						<td>{courses}</td>
						</tr>
						<tr>
						<td>Other information</td>
						<td>{this.props.job.otherInfoForStudents}</td>
						</tr>
							
						<tr>
							<th>Eligibility Criteria</th>
							<th></th>
						</tr>
						{this.props.job.eligibilityCriteria.cutoffPercentage ? 
							<tr>
								<td>Cutoff percentage</td>
								<td>{this.props.job.eligibilityCriteria.cutoffPercentage}</td>
							</tr>
							: null
						}	
						{this.props.job.eligibilityCriteria.activeBacklogs ? 
							<tr>
								<td>Active Backlogs</td>
								<td>{this.props.job.eligibilityCriteria.activeBacklogs}</td>
							</tr>
							: null
						}	
						{this.props.job.eligibilityCriteria.deadBacklogs ? 
							<tr>
								<td>Dead Backlogs</td>
								<td>{this.props.job.eligibilityCriteria.deadBacklogs}</td>
							</tr>
							: null
						}	

						<tr>
							<th>Selection Procedure</th>
							<th></th>
						</tr>
						{this.props.job.selectionProcedure.writtenTest ? 
							<tr>
								<td>Written Test</td>
								<td>{this.props.job.selectionProcedure.writtenTest}</td>
							</tr>
							: null
						}
						{this.props.job.selectionProcedure.onlineTest ? 
							<tr>
								<td>Online Test</td>
								<td>{this.props.job.selectionProcedure.onlineTest}</td>
							</tr>
							: null
						}
						{this.props.job.selectionProcedure.groupDiscussion ? 
							<tr>
								<td>Group Discussion</td>
								<td>{this.props.job.selectionProcedure.groupDiscussion}</td>
							</tr>
							: null
						}
						{this.props.job.selectionProcedure.technicalRound ? 
							<tr>
								<td>Technical Round</td>
								<td>{this.props.job.selectionProcedure.technicalRound}</td>
							</tr>
							: null
						}
						{this.props.job.selectionProcedure.hrRound ? 
							<tr>
								<td>HR Round</td>
								<td>{this.props.job.selectionProcedure.hrRound}</td>
							</tr>
							: null
						}
						
						<tr>
							<th>Compensation Offered</th>
							<th></th>
						</tr>
						{this.props.job.compensationOffered.stipend ? 
							<tr>
								<td>Stipend</td>
								<td>{this.props.job.compensationOffered.stipend} per month</td>
							</tr>
							: null
						}
						
						{this.props.job.compensationOffered.breakupCTC && this.props.job.compensationOffered.breakupCTC.fixed ? 
							<tr>
								<td>Fixed pay</td>
								<td>{this.props.job.compensationOffered.breakupCTC.fixed} LPA</td>
							</tr>
							: null
						}
						{this.props.job.compensationOffered.breakupCTC && this.props.job.compensationOffered.breakupCTC.variable ? 
							<tr>
								<td>Variable pay</td>
								<td>{this.props.job.compensationOffered.breakupCTC.variable} LPA</td>
							</tr>
							: null
						}	
						{this.props.job.compensationOffered.breakupCTC && this.props.job.compensationOffered.breakupCTC.bonds ? 
							<tr>
								<td>Bonds</td>
								<td>{this.props.job.compensationOffered.breakupCTC.bonds} LPA</td>
							</tr>
							: null
						}	
						{this.props.job.compensationOffered.breakupCTC && this.props.job.compensationOffered.breakupCTC.otherAllowances ? 
							<tr>
								<td>Other allowances</td>
								<td>{this.props.job.compensationOffered.breakupCTC.otherAllowances} LPA</td>
							</tr>
							: null
						}
						{this.props.job.compensationOffered.totalCTC ? 
							<tr>
								<th>Total CTC</th>
								<th>{this.props.job.compensationOffered.totalCTC} LPA</th>
							</tr>
							: null
						}		
						</tbody>
					</Table>      
				</CardBody>
				<CardFooter>
					<div>
						<i className="fa fa-clock-o"></i> 
						&nbsp; <strong>Last date to register:</strong> {this.props.job.lastDateToRegister}
					</div>
				</CardFooter>
			</Card> 
			</div>
        )
    }
}

const mapStateToProps = state => ({
    msg: state.job.msg
});

export default connect(
    mapStateToProps,
    { modifyJob, deleteJob }
)
(AdminCompanyCard);