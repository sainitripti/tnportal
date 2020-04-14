import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './css/ContactUsPage.css';

class ContactUsPage extends Component {
    
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
                            <div className="custom-margin custom-width">
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:tpo@igdtuw.ac.in">&nbsp; Training &amp; Placement Office</a>
                            </div>
                            <div className="custom-margin custom-width">
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:jasdeep@igdtuw.ac.in">&nbsp; Dr. Jasdeep Kaur Dhanoa</a>
                            </div>
                            <div className="custom-margin custom-width">
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:nrchauhan@igdtuw.ac.in">&nbsp; Dr. Nathi Ram Chauhan</a>
                            </div>               
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