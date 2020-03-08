import React, { Component } from 'react';

import './css/HomePage.css';

import igbuilding from "../images/igbuilding.jpg";
import istelogo from "../images/logo/istelogo.png";
import indiatodaylogo from "../images/logo/indiatodaylogo.jfif"
import aictelogo from "../images/logo/aictelogo.png"
import googlelogo from  "../images/logo/google.png";
import amazonlogo from "../images/logo/amazonlogo.png";
import adobelogo from "../images/logo/adobelogo.png";
import intuitlogo from "../images/logo/intuit.png";
import mslogo from "../images/logo/mslogo.png";
import salesforcelogo from "../images/logo/salesforcelogo.png";
import uberlogo from "../images/logo/uberlogo.png";
import gslogo from "../images/logo/gslogo.jfif";
import walmartlogo from "../images/logo/walmart.jpg";
import ciscologo from "../images/logo/cisco.png";
import flipkartlogo from "../images/logo/flipkart.jpg";
import linkedinlogo from "../images/logo/linkedin.png";
import medianetlogo from "../images/logo/media.net.jpg";
import citrixlogo from "../images/logo/citrix.png";
import saplogo from "../images/logo/sap.png";
import goibibologo from "../images/logo/goibibo.jpg";
import kronoslogo from "../images/logo/kronos.png";
import dblogo from "../images/logo/db.jpg";
import mstanlogo from "../images/logo/mstan.jpg";
import sandisklogo from "../images/logo/sandisk.png";
import samsunglogo from "../images/logo/samsung.png";
import armlogo from "../images/logo/arm.png";
import quallogo from "../images/logo/qual.png";
import yamahalogo from "../images/logo/yamaha.jpg";
import amexlogo from "../images/logo/amex.png";
import expedialogo from "../images/logo/expedia.jpg";
import cventlogo from "../images/logo/cvent.png";
import groferslogo from "../images/logo/grofers.png";
import myntralogo from "../images/logo/myntra.png";
import infologo from "../images/logo/info.png";
import ionlogo from "../images/logo/ion.png";
import oraclelogo from "../images/logo/oracle.png";
import harmanlogo from "../images/logo/harman.jpeg";
import orangelogo from "../images/logo/orange.jpg";
import mobiklogo from "../images/logo/mobik.jpg";
import eylogo from "../images/logo/ey.png";
import herologo from "../images/logo/hero.png";
import siemenslogo from "../images/logo/siemens.jpg";
import unileverlogo from "../images/logo/unilever.jpg";
import bhlogo from "../images/logo/bh.png";
import baxterlogo from "../images/logo/baxter.jpg";
import twlogo from "../images/logo/tw.png";
import cyberlogo from "../images/logo/cyber.jpg";
import delllogo from "../images/logo/dell.png" ;
import hondalogo from "../images/logo/honda.png";
import anandlogo from "../images/logo/anand.png";
import gmlogo from "../images/logo/gm.jpg";
import tatalogo from "../images/logo/tata.png";
import philipslogo from "../images/logo/philips-logo.png";
import atherlogo from "../images/logo/ather.png";
import netapplogo from "../images/logo/netapp.gif";
import accenturelogo from "../images/logo/accenture.png";
import bajajlogo from "../images/logo/bajaj.jpg";
import mahindralogo from "../images/logo/mahindra.png";
import sglogo from "../images/logo/sg.png";
import eatonlogo from "../images/logo/eaton.gif";
import pwclogo from "../images/logo/pwc.jpg";
import fractallogo from "../images/logo/fractal.jpg";
import ericlogo from "../images/logo/eric.png";
import ibmlogo from "../images/logo/ibm.png";
import mobilogo from "../images/logo/mobi.png";
import niitlogo from "../images/logo/niit.png";
import comvivalogo from "../images/logo/comviva.gif";
import cratlogo from "../images/logo/crat.jpg";
import ttnlogo from "../images/logo/ttn.jpg";
import synlogo from "../images/logo/syn.png";
import shelogo from "../images/logo/she.png";
import optumlogo from "../images/logo/optum.jpg";
import mqlogo from "../images/logo/mq.png";
import libsyslogo from "../images/logo/libsys.png";
import altranlogo from "../images/logo/altran.png";
import sapientlogo from "../images/logo/sapient.png";
import tflogo from "../images/logo/tf.png";
import wheelseyelogo from "../images/logo/wheelseye.png";
import mglogo from "../images/logo/mg.jpg";
import msulogo from "../images/logo/msu.png";

class HomePage extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="card mb-3 custom-margin custom-width">
                        <img className="card-img-top" src={igbuilding} alt="Igdtuw building"/>
                        <div className="card-body">
                            <h3 className="card-title">About IGDTUW</h3>
                            <div className="card-text">
                                <p>Indira Gandhi Delhi Technical University for Women(formerly known as IGIT) is 
                                    South Asia's first women's technical university , ranked one in South Asia's list of 
                                    Emerging Technical Institutions of India. It admits students through a joint counselling 
                                    process with DTU , NSIT and IIIT Delhi . 
                                </p>
                                <p> There has been an exponential increase in the number of top rankers getting admitted 
                                    to IGDTUW. The placement records of the university are a matter of stupendous pride for all of us. 
                                    We are extremely proud to partner with some of the leading names such as Google, Goldman Sachs , Uber , 
                                    Intuit , Microsoft , Macquarie  and many more.
                                </p>
                                <p> With over 278+, Full Time Offers to the graduates and post graduates batches, passed in May 2018, 
                                    it was 4.51 % better than the previous year (2017), with B.Tech in Information Technology leading with a 
                                    phenomenal growth of 88.37% from the previous year.
                                </p>   
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="card-group custom-margin custom-width">
                        <div className="card custom-padding">
                            <img className="card-img-top custom-image" src={istelogo} alt="Iste logo"/>
                            <div className="card-body">
                                <p className="card-text">IGDTUW received Mrs. Rahatun Nesa Ali Memorial ISTE National Award for Best Women
                                    Engineering College of India, 2018 in the field of Technical Education</p>
                            </div>
                        </div>
                        <div className="card custom-padding">
                            <img className="card-img-top custom-image" src={indiatodaylogo} alt="indiatodaylogo"/>
                            <div className="card-body">
                                <p className="card-text">IGDTUW (erstwhile IGIT) has been ranked at second position among Top 10 Emerging
                                    Engineering Institutes of India based on an All India Survey conducted by India Today.</p>
                            </div>
                        </div>
                        <div className="card custom-padding">
                            <img className="card-img-top custom-image" src={aictelogo} alt="aictelogo"/>
                            <div className="card-body">
                                <p className="card-text">IGDTUW receives Notable Mention Award at AICTE
                                    Headquarters on 25th August, 2018 </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="card mb-3 custom-margin custom-width">
                        <div className="card-body">
                            <h3 className="card-title">Our Past Recruiters</h3>
                            <div className="card-text">
                                <div className="container custom-width">
                                    <div className="row">
                                        <div className="col-sm-3"><img src={googlelogo} className="logo" alt="googlelogo"/></div>
                                        <div className="col-sm-3"><img src={amazonlogo} className="logo" alt="amazonlogo" /></div>
                                        <div className="col-sm-3"><img src={adobelogo} className="logo" alt="adobelogo" /></div>
                                        <div className="col-sm-3"><img src={intuitlogo} className="logo" alt="intuitlogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={mslogo} className="logo" alt="mslogo" /></div>
                                        <div className="col-sm-3"><img src={salesforcelogo} className="logo" alt="salesforcelogo" /></div>
                                        <div className="col-sm-3"><img src={uberlogo} className="logo" alt="uberlogo" /></div>
                                        <div className="col-sm-3"><img src={gslogo} className="logo" alt="gslogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={walmartlogo} className="logo" alt="walmartlogo" /></div>
                                        <div className="col-sm-3"><img src={ciscologo} className="logo" alt="ciscologo" /></div>
                                        <div className="col-sm-3"><img src={flipkartlogo} className="logo" alt="flipkartlogo" /></div>
                                        <div className="col-sm-3"><img src={linkedinlogo} className="logo" alt="linkedinlogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={medianetlogo} className="logo" alt="medianetlogo"/></div>
                                        <div className="col-sm-3"><img src={citrixlogo} className="logo" alt="citrixlogo"/></div>
                                        <div className="col-sm-3"><img src={saplogo} className="logo" alt="saplogo" /></div>
                                        <div className="col-sm-3"><img src={goibibologo} className="logo" alt="goibibologo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={kronoslogo} className="logo" alt="kronoslogo" /></div>
                                        <div className="col-sm-3"><img src={dblogo} className="logo" alt="dblogo" /></div>
                                        <div className="col-sm-3"><img src={mstanlogo} className="logo" alt="mstanlogo" /></div>
                                        <div className="col-sm-3"><img src={sandisklogo} className="logo" alt="sandisklogo"/></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={samsunglogo} className="logo" alt="samsunglogo" /></div>
                                        <div className="col-sm-3"><img src={quallogo} className="logo" alt="quallogo" /></div>
                                        <div className="col-sm-3"><img src={armlogo} className="logo" alt="armlogo" /></div>
                                        <div className="col-sm-3"><img src={yamahalogo} className="logo" alt="yamahalogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={amexlogo} className="logo" alt="amexlogo" /></div>
                                        <div className="col-sm-3"><img src={expedialogo} className="logo" alt="expedialogo" /></div>
                                        <div className="col-sm-3"><img src={cventlogo} className="logo" alt="cventlogo" /></div>
                                        <div className="col-sm-3"><img src={groferslogo} className="logo" alt="groferslogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={myntralogo} className="logo" alt="myntralogo" /></div>
                                        <div className="col-sm-3"><img src={infologo} className="logo" alt="infologo" /></div>
                                        <div className="col-sm-3"><img src={ionlogo} className="logo" alt="ionlogo" /></div>
                                        <div className="col-sm-3"><img src={oraclelogo} className="logo" alt="oraclelogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={harmanlogo} className="logo" alt="harmanlogo" /></div>
                                        <div className="col-sm-3"><img src={orangelogo} className="logo" alt="orangelogo" /></div>
                                        <div className="col-sm-3"><img src={mobiklogo} className="logo" alt="mobiklogo" /></div>
                                        <div className="col-sm-3"><img src={eylogo} className="logo" alt="eylogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={herologo} className="logo" alt="herologo" /></div>
                                        <div className="col-sm-3"><img src={siemenslogo} className="logo" alt="siemenslogo" /></div>
                                        <div className="col-sm-3"><img src={unileverlogo} className="logo" alt="unileverlogo" /></div>
                                        <div className="col-sm-3"><img src={bhlogo} className="logo" alt="bhlogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={baxterlogo} className="logo" alt="baxterlogo" /></div>
                                        <div className="col-sm-3"><img src={twlogo} className="logo" alt="twlogo" /></div>
                                        <div className="col-sm-3"><img src={cyberlogo} className="logo" alt="cyberlogo" /></div>
                                        <div className="col-sm-3"><img src={delllogo} className="logo" alt="delllogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={hondalogo} className="logo" alt="hondalogo" /></div>
                                        <div className="col-sm-3"><img src={anandlogo} className="logo" alt="anandlogo" /></div>
                                        <div className="col-sm-3"><img src={gmlogo} className="logo" alt="gmlogo" /></div>
                                        <div className="col-sm-3"><img src={tatalogo} className="logo" alt="tatalogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={philipslogo} className="logo" alt="philipslogo" /></div>
                                        <div className="col-sm-3"><img src={atherlogo} className="logo" alt="atherlogo" /></div>
                                        <div className="col-sm-3"><img src={netapplogo} className="logo" alt="netapplogo" /></div>
                                        <div className="col-sm-3"><img src={accenturelogo} className="logo" alt="accenturelogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={bajajlogo} className="logo" alt="bajajlogo" /></div>
                                        <div className="col-sm-3"><img src={mahindralogo} className="logo" alt="mahindralogo" /></div>
                                        <div className="col-sm-3"><img src={sglogo} className="logo" alt="sglogo" /></div>
                                        <div className="col-sm-3"><img src={eatonlogo} className="logo" alt="eatonlogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={pwclogo} className="logo" alt="pwclogo" /></div>
                                        <div className="col-sm-3"><img src={fractallogo} className="logo" alt="fractallogo" /></div>
                                        <div className="col-sm-3"><img src={ericlogo} className="logo" alt="ericlogo" /></div>
                                        <div className="col-sm-3"><img src={ibmlogo} className="logo" alt="ibmlogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={mobilogo} className="logo" alt="mobilogo" /></div>
                                        <div className="col-sm-3"><img src={niitlogo} className="logo" alt="niitlogo" /></div>
                                        <div className="col-sm-3"><img src={comvivalogo} className="logo" alt="comvivalogo" /></div>
                                        <div className="col-sm-3"><img src={cratlogo} className="logo" alt="cratlogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={ttnlogo} className="logo" alt="ttnlogo" /></div>
                                        <div className="col-sm-3"><img src={synlogo} className="logo" alt="synlogo" /></div>
                                        <div className="col-sm-3"><img src={shelogo} className="logo" alt="shelogo" /></div>
                                        <div className="col-sm-3"><img src={optumlogo} className="logo" alt="optumlogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={mqlogo} className="logo" alt="mqlogo" /></div>
                                        <div className="col-sm-3"><img src={libsyslogo} className="logo" alt="libsyslogo" /></div>
                                        <div className="col-sm-3"><img src={altranlogo} className="logo" alt="altranlogo" /></div>
                                        <div className="col-sm-3"><img src={sapientlogo} className="logo" alt="sapientlogo" /></div>
                                        <div className="w-100"></div>
                                        <div className="col-sm-3"><img src={tflogo} className="logo" alt="tflogo" /></div>
                                        <div className="col-sm-3"><img src={wheelseyelogo} className="logo" alt="wheelseyelogo" /></div>
                                        <div className="col-sm-3"><img src={mglogo} className="logo" alt="mglogo" /></div>
                                        <div className="col-sm-3"><img src={msulogo} className="logo" alt="msulogo" /></div>
                                        <div className="w-100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default HomePage;