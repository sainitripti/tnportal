import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
import './css/ResultCard.css';
import { modifyResult, deleteResult } from '../actions/resultActions';

class AdminResultCard extends Component {
    state = {
        modal:false,
        deleteModal: false,
        companyName: null,
        dateOfAnnouncement: null,
        profile: null,
        numIntern: "0",
        numFTE: "0",
        ctcIntern: "0",
        ctcFTE:"0",
        massRecruitment: null,
        arrayIntern: null,
        arrayFTE: null
    };

    static propTypes = {
        msg: PropTypes.string,
        modifyResult: PropTypes.func.isRequired,
        deleteResult: PropTypes.func.isRequired
    };

    onSubmit = e => {
        e.preventDefault();

        const { 
            companyName,
            dateOfAnnouncement,
            profile,
            numIntern,
            numFTE,
            ctcIntern,
            ctcFTE,
            massRecruitment,
            arrayIntern,
            arrayFTE } = this.state;
        
        const arIntern = arrayIntern ? arrayIntern.split(",").map((enrollmentNum) =>  enrollmentNum.trim()) : [];
        const arFTE = arrayFTE ? arrayFTE.split(",").map((enrollmentNum) =>  enrollmentNum.trim()) : [];
        const numTotalSelects = numIntern + numFTE;
        numTotalSelects.toString();
        const isMassRecruitment = massRecruitment ? true: false;
        //Create a user object
        const newResult = {
            companyName,
            dateOfAnnouncement,
            profile,
            numTotalSelects,
            numIntern,
            numFTE,
            ctcIntern,
            ctcFTE,
            isMassRecruitment,
            arIntern,
            arFTE
        };

        if(this.props.result && this.props.result._id){
            this.props.modifyResult(this.props.result._id, newResult);
        }
    }

    onDeleteButtonClick = () => {
        if(this.props.result && this.props.result._id){
            this.props.deleteResult(this.props.result._id);
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
        let {result} = this.props;
        return (
            <div>
                <Modal isOpen={this.state.deleteModal} toggle={this.toggleDeleteModal}>
                    <ModalHeader toggle={this.toggleDeleteModal}>Delete Result</ModalHeader>
                    <ModalBody>
                        { this.state.deleteModal && this.props.msg ? <Alert>{ this.props.msg }</Alert>           
                        : null }
                        <p>Are you sure you want to delete this result?</p>
                        <Button color="danger" onClick={this.onDeleteButtonClick} style={{ margin: '1rem'}}>
                            Yes, Delete Result
                        </Button>
                        <Button color="dark" onClick={this.toggleDeleteModal} style={{ margin: '1rem'}}>
                            No
                        </Button>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Edit Result</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>           
                                <div className="row">  
                                <div className="col-xl-12">                                        
                                <Label for="companyName">Company Name</Label>
                                <Input
                                    type="text"
                                    name="companyName"
                                    id="companyName"
                                    placeholder="Company Name"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                </div>
                                <br/>
                                <div className="row"> 
                                <div className="col-xl-6"> 
                                <Label for="dateOfAnnouncement">Date Of Announcement</Label>
                                <Input
                                    type="date"
                                    name="dateOfAnnouncement"
                                    id="dateOfAnnouncement"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                <br/>
                                <div className="col-xl-6"> 
                                <Label for="profile">Profile</Label>
                                <Input
                                    type="text"
                                    name="profile"
                                    id="profile"
                                    placeholder="profile"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                </div>
                                <br/>
                                <div className="row">  
                                <div className="col-xl-4"> 
                                <Label for="numIntern">No. of Interns</Label>
                                <Input
                                    type="text"
                                    name="numIntern"
                                    id="numIntern"
                                    defaultValue="0"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                <br/>
                                <div className="col-xl-8"> 
                                <Label for="ctcIntern">Stipend for Interns</Label>
                                <InputGroup>
                                <Input
                                    type="text"
                                    name="ctcIntern"
                                    id="ctcIntern"
                                    defaultValue="0"
                                    onChange={this.onChange}
                                />
                                <InputGroupAddon addonType="append">per month</InputGroupAddon>
                                </InputGroup>
                                </div>
                                </div>
                                <br/> 
                                <div className="row">            
                                <div className="col-xl-4"> 
                                <Label for="numFTE">No. of FTEs</Label>
                                <Input
                                    type="text"
                                    name="numFTE"
                                    id="numFTE"
                                    defaultValue="0"
                                    onChange={this.onChange}
                                    required
                                />
                                </div>  
                                <br/>
                                <div className="col-xl-8"> 
                                <Label for="ctcFTE">Total compensation for FTEs</Label>
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
                                <div className="col-xl-12"> 
                                <Label for="arrayIntern">List of selected interns</Label>
                                <Input
                                    type="textarea"
                                    name="arrayIntern"
                                    id="arrayIntern"
                                    placeholder="Enter comma separated enrollment numbers"
                                    onChange={this.onChange}
                                />
                                </div>
                                </div>
                                <br/>
                                <div className="row"> 
                                <div className="col-xl-12"> 
                                <Label for="arrayFTE">List of selected FTEs</Label>
                                <Input
                                    type="textarea"
                                    name="arrayFTE"
                                    id="arrayFTE"
                                    placeholder="Enter comma separated enrollment numbers"
                                    onChange={this.onChange}
                                />
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-xl-12 margin-top">
                                <Label for="massRecruitment">
                                Is this Mass Recruitment? &nbsp; &nbsp; &nbsp; &nbsp;
                                </Label>
                                <Input
                                    type="checkbox"
                                    name="massRecruitment"
                                    id="massRecruitment"
                                    onChange={this.onChange}
                                    value="TRUE"
                                />
                                </div>
                                </div>
                                <Button color="dark" style={{ marginTop: '2rem'}}>
                                    Submit Result
                                </Button>
                                { this.state.modal && this.props.msg ? <Alert>{ this.props.msg }</Alert>           
                                : null }
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

                <Card className="mb-3 custom-width custom-margin">
				<CardHeader className="dark-mode">
                    {result.companyName}            
                    <Button className="delete-button btn-sm" onClick={this.toggleDeleteModal}><i className="fa fa-trash"></i> Delete Result</Button>
                    <Button className="edit-button btn-sm" onClick={this.toggle}><i className="fa fa-edit"></i> Edit Result</Button>
                </CardHeader>
				<CardBody>
				<Table striped borderless>
					<tbody>
                        <tr>
						<td>Profile</td>
						<td>{result.profile}</td>
						</tr>
						<tr>
						<td>Total Number of Selects</td>
						<td>{result.numTotalSelects}</td>
						</tr>
						<tr>
						<td>Total number of selected Interns</td>
						<td>{result.numIntern}</td>
						</tr>
                        <tr>
						<td>Total number of selected FTEs</td>
						<td>{result.numFTE}</td>
						</tr>
                        { (result.numIntern > 0) ?
                            <tr>
                            <td>List of selected Interns</td>
                            <td>
                            <ul className="list-style">
                            {result.arIntern.map((enrollmentNum, index) => {
                                return <li key={index}>{enrollmentNum}</li>
                            })}
                            </ul>
                            </td>
                        </tr>
                        : null
                        }

                        { (result.numFTE > 0) ?
						<tr>
                            <td>List of selected FTEs</td>
                            <td>
                            <ul className="list-style">
                            {result.arFTE.map((enrollmentNum, index) => {
                                return <li key={index}>{enrollmentNum}</li>
                            })}
                            </ul>
                            </td>
                        </tr>
                        : null
                        }
                    </tbody>		
					</Table>
				       
				</CardBody>
				<CardFooter>
					<div>
						<i className="fa fa-clock-o"></i> 
						&nbsp; <strong>Date of announcement:</strong> {result.dateOfAnnouncement} 
					</div>
				</CardFooter>
			</Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    msg: state.result.msg
});

export default connect(
    mapStateToProps,
    { modifyResult, deleteResult }
)
(AdminResultCard);
