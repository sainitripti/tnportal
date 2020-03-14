import React, { Component } from 'react';
import './css/CompanyRegisterPage.css';

import {
    Form,
    FormGroup,
    Button,
    Label,
    Input
} from 'reactstrap';

class CompanyRegisterPage extends Component {
    render() {
        return (
            <section>
            <div className="card-mb-3 custom-width custom-margin">
            <h3 className="card-title">JAF Form</h3>
            
            <div className="card-body">
                <Form id="jaf">
                <FormGroup>
                    <Label for="companyName">Company Name</Label>
                    <Input type="text" name="companyName" id="companyName" placeholder="Company Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="representativeName">Name of the Company Representative</Label>
                    <Input type="text" name="representativeName" id="representativeName" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="contactNumber">Contact Number</Label>
                    <Input type="text" name="contactNumber" id="contactNumber" placeholder="+91-" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="x@company.com" />
                </FormGroup>
                <FormGroup>
                    <Label for="jobTitle">Job Title</Label>
                    <Input type="text" name="jobTitle" id="jobTitle" placeholder="e.g. Software Engineer" />
                </FormGroup>
                <FormGroup>
                    <Label for="jobProfile">Profile</Label>
                    <Input type="select" name="jobProfile" id="jobProfile" multiple>
                    <option>Technical</option>
                    <option>Non-Technical</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="offerType">Type of Offer</Label>
                    <Input type="select" name="offerType" id="offerType" multiple>
                    <option>Full Time Employee</option>
                    <option>Intern</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="jobLocation">Job Location</Label>
                    <Input type="text" name="jobLocation" id="jobLocation" placeholder="Location(s)" />
                </FormGroup>
                <FormGroup>
                    <Label for="targetBatch">Target Batch</Label>
                    <Input type="text" name="targetBatch" id="targetBatch" placeholder="e.g. 2020,2021" />
                </FormGroup>
                <FormGroup>
                    <Label for="targetBranch">Target Branch</Label>
                    <FormGroup>
                        <Label for="bTechBranch">B.Tech.</Label>
                        <Input type="select" name="bTechBranch" id="bTechBranch" multiple>
                        <option>Computer Science Engineering</option>
                        <option>Information Technology</option>
                        <option>Electronics and Communication Engineering</option>
                        <option>Mechanical Engineering</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bArchBranch">B.Arch.</Label>
                        <Input type="select" name="bArchBranch" id="bArchBranch" multiple>
                        <option>Architecture and Planning</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="mTechBranch">M.Tech.</Label>
                        <Input type="select" name="mTechBranch" id="mTechBranch" multiple>
                        <option>Mobile Pervasive Computing</option>
                        <option>Information Security Management</option>
                        <option>VLSI</option>
                        <option>Robotics and Automation</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="mcaBranch">MCA</Label>
                        <Input type="select" name="mcaBranch" id="mcaBranch" multiple>
                        <option>Masters of Computer Administration</option>
                        </Input>
                    </FormGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="visitSchedulePreference">Preffered week/date of visit</Label>
                    <Input type="text" name="visitSchedulePreference" id="visitSchedulePreference" />
                </FormGroup>
                <FormGroup>
                    <Label for="eligibilityCriteria">Eligibility Criteria</Label>
                    <Input type="text" name="eligibilityCriteria" id="eligibilityCriteria" />
                </FormGroup>
                <FormGroup>
                    <Label for="ctcOffered">CTC Offered</Label>
                    <Input type="text" name="ctcOffered" id="ctcOffered" />
                </FormGroup>
                <FormGroup>
                    <Label for="jdFile">Job Desciption</Label>
                    <Input type="file" name="jdFile" id="jdFile" />
                </FormGroup>
                <FormGroup>
                    <Label for="remarks">Remarks</Label>
                    <Input type="textarea" name="remarks" id="remarks" />
                </FormGroup>
                <Button color="dark" id="submitButton" block>Submit</Button>
                </Form>                  
            </div>
            </div>
            </section>
        )
    }
}

export default CompanyRegisterPage;
