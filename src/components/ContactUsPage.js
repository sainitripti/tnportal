import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './css/ContactUsPage.css';

import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

class ContactUsPage extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        textBody: ''
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
    }
    
    render() {
        return (
            <section>
                <div className="card mb-3 custom-width custom-margin">
                <div className="card-body">
                    <h3 className="card-title">Training &amp; Placement Contacts</h3>
                    
                    <div className="card-text">

                    <div className="row text-center custom-margin">
                        <div className="col-md-4">
                        <div><i className="fa fa-user"></i></div>
                        <p>Dr. Nathi Ram Chauhan</p>
                        <p>Training &amp; Placement Officer (MAE)</p>
                        </div>
                
                        <div className="col-md-4">
                        <div><i className="fa fa-phone"></i></div>
                        <p>011-23900232</p>
                        <p>Mon - Fri, 8:00-22:00</p>
                        </div>
                
                        <div className="col-md-4">
                        <div><i className="fa fa-envelope"></i></div>
                        <p>tpo@igdtuw.ac.in</p>
                        <p>nrchauhan@igdtuw.ac.in</p>
                        </div>
                    </div>
                
                    </div>
                    
                    <div className="row text-center custom-margin">
                        <div className="col-md-4">
                        <div><i className="fa fa-user"></i></div>
                        <p>Dr. Jasdeep Kaur Dhanoa</p>
                        <p>Training &amp; Placement Officer (CSE, IT &amp; ECE)</p>
                        </div>
                
                        <div className="col-md-4">
                        <div><i className="fa fa-phone"></i></div>
                        <p>011-23900216</p>
                        <p>Mon - Fri, 8:00-22:00</p>
                        </div>
                
                        <div className="col-md-4">
                        <div><i className="fa fa-envelope"></i></div>
                        <p>tpo@igdtuw.ac.in</p>
                        <p>jasdeep@igdtuw.ac.in</p>
                        </div>
                    </div>
                
                </div>

                </div>
            
                <div className="row custom-width custom-margin">
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Write to us</h5>
                            <div className="card-text">
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>                                                       
                                    <Label for="name">Name: </Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Mr/Ms. ABC"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup> 
                                    <Label for="email">Email: </Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="abc@gmail.com"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="subject">Subject: </Label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Purpose of Writing"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="textBody">Text Body: </Label>
                                    <Input
                                        type="textarea"
                                        name="textBody"
                                        id="textBody"
                                        placeholder="Write here!"
                                        onChange={this.onChange}
                                    />
                                </FormGroup>
                                <Button color="dark" style={{ marginTop: '2rem'}} block>
                                    Submit
                                </Button>
                            </Form>                            
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body">
                            <div className="card-text">
                                <div id="map-container-google" className="z-depth-1-half map-container">
                                <iframe className="map-style" title="IGDTUWmap" src="https://maps.google.com/maps?q=igdtuw&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
                                <p>Indira Gandhi Delhi Technical University for Women (formerly IGIT Delhi)</p>
                                <p>(Govt. of NCT of Delhi)</p>
                                <p>Delhi – 110006</p>
                                </div>                                     
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactUsPage;