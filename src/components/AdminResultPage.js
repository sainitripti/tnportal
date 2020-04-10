import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getResults, addNewResult } from '../actions/resultActions';
import AdminResultCard from './AdminResultCard';

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

class AdminResultPage extends Component {

    state = {
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
        isAuthenticated: PropTypes.bool.isRequired,
        results: PropTypes.array.isRequired,
        getResults: PropTypes.func.isRequired,
        addNewResult: PropTypes.func.isRequired,
        msg: PropTypes.string
    };
    
    componentDidMount() { 
        this.props.getResults();     
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
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
        //Create a result object
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
        this.props.addNewResult(newResult);
    }

    render() {
        return (
                <div className="content">
                <div className="container-fluid">
                <div className="col">
                    <div className="col-xl-12 custom-margin custom-width">
                        <Card>
                        <CardHeader className="dark-mode">Add New Result</CardHeader>
                        <CardBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>           
                                <div className="row">  
                                <div className="col-xl-4">                                        
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
                                <br/>
                                <div className="col-xl-4"> 
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
                                <div className="col-xl-4"> 
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
                                <div className="col-xl-2"> 
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
                                <div className="col-xl-4"> 
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
                                <br/>            
                                <div className="col-xl-2"> 
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
                                <div className="col-xl-4"> 
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
                                <div className="col-xl-6"> 
                                <Label for="arrayIntern">List of selected interns</Label>
                                <Input
                                    type="textarea"
                                    name="arrayIntern"
                                    id="arrayIntern"
                                    placeholder="Enter comma separated enrollment numbers"
                                    onChange={this.onChange}
                                />
                                </div>
                                <br/>
                                <div className="col-xl-6"> 
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
                                { this.props.msg ? <Alert>{ this.props.msg }</Alert>           
                                : null }
                            </FormGroup>
                        </Form>
                        </CardBody>
                        </Card>
                    </div>
                    <div className="col-xl-12">
                {this.props.results.map(function(result, index) {
                    return <AdminResultCard key={result.companyName} result = {result}/>;
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
    results: state.result.results,
    msg: state.result.msg
});

export default connect(
    mapStateToProps,
    { getResults, addNewResult }
)
(AdminResultPage);
