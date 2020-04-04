import React, { Component } from 'react';
import {InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import {Row, Col} from 'reactstrap';

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
            <h1 className="card-title">Job Announcement Form</h1>
            
            <div className="card-body">
                <Form id="jaf">
                <FormGroup>
                    <p><h3>1. Company Details</h3></p>
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
                <p><h3>2. Job Details</h3></p>
                <FormGroup>
                    <Label for="jobTitle">Job Title</Label>
                    <Input type="text" name="jobTitle" id="jobTitle" placeholder="e.g. Software Engineer" />
                </FormGroup>
                <FormGroup>
                    <Label for="jobProfile">Domain</Label>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Technical" />
                    </InputGroup>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Non-Technical" />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="offerType">Job Role</Label>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Full Time Employee" />
                    </InputGroup>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Intern" />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="jobLocation">Job Location</Label>
                    <Input type="text" name="jobLocation" id="jobLocation" placeholder="Location(s)" />
                </FormGroup>
                <FormGroup>
                    <Label for="jdFile">Job Desciption</Label>
                    <Input type="text" name="jdFile" id="jdFile" placeholder="Please enter a drive link."/>
                </FormGroup>
                <p><h3>3. Eligibility Criteria</h3></p>

                <FormGroup>
                    <Label for="targetBatch">Target Batch</Label>
                    <Input type="text" name="targetBatch" id="targetBatch" placeholder="e.g. 2020,2021" />
                </FormGroup>
                <FormGroup>
                    <Label for="targetBranch">Target Branch</Label>
                    <FormGroup>
                        <Label for="bTechBranch"><em>B.Tech.</em></Label>    
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Computer Science Engineering" />
                    </InputGroup>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Information Technology" />
                    </InputGroup>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Electronics and Communication Engineering" />
                    </InputGroup>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Mechanical Engineering" />
                    </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bArchBranch"><em>B.Arch.</em></Label>
                        <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Architecture and Planning" />
                    </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="mTechBranch"><em>M.Tech.</em></Label>
                        <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Artificial Intelligence" />
                    </InputGroup>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Information Security Management" />
                    </InputGroup>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="VLSI" />
                    </InputGroup>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Robotics and Automation" />
                    </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="mcaBranch"><em>MCA</em></Label>
                        <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Masters of Computer Application" />
                    </InputGroup>
                    </FormGroup>
                </FormGroup>
                <Row form>
        <Col md={4}>
        <FormGroup>
                    <Label for="remarks">Cutoff %</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
                    <Label for="remarks">Active Backlogs</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
        </Col>
        <Col md={4}>
        

        <FormGroup>
                    <Label for="remarks">Dead Backlogs</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
                </Col>
      </Row>
               
               
                <p><h3>4. Selection Procedure</h3></p>

                <FormGroup>
                    <Label for="visitSchedulePreference">Preffered week/date of visit</Label>
                    <Input type="text" name="visitSchedulePreference" id="visitSchedulePreference" placeholder="e.g. dd/mm/yyyy - dd/mm/yyyy"/>
                </FormGroup>
                <Row form>
                    <Col md={4}>
                    <FormGroup>
                    <Label for="remarks">Written Tests</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                    <Label for="remarks">Online Rounds</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                    <Label for="remarks">Group Discussion Round</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                    <Label for="remarks">Technical Rounds</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                    <Label for="remarks">HR Rounds</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
                    </Col>
                </Row>
            

                <p><h3>5. Requirements</h3></p>
                <FormGroup>
                    <Label for="remarks">No. of panels visiting</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
                <FormGroup>
                    <Label for="remarks">Infrastructure Requirements</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
                <FormGroup>
                    <Label for="remarks">Any other specific Requirements</Label>
                    <Input type="plaintext" name="remarks" id="remarks" />
                </FormGroup>
                <p><h3>6. Any other information to be shared with students:</h3></p>
                <FormGroup>
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
