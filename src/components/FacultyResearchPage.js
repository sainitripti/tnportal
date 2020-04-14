import React, { Component } from 'react';
import { Table, CardHeader } from 'reactstrap';

class FacultyResearchPage extends Component {
    render() {
        return (
            <div>
                <div className="card mb-3 custom-width custom-margin">
                    <CardHeader className="dark-mode">Awards</CardHeader>
                    <div className="card-body">                              
                        <Table responsive borderless>
                            <tbody>
                                <tr>
                                    <td>1).</td>
                                    <td>
                                    Dr. Ranu Gadi has also been awarded with the ‘Thomas Kuhn Honour Pin’ as hope for sustainable region 
                                    for her research paper presented at the Third Int. Symposium on Non-CO2Green house Gases.
                                    </td>
                                </tr>
                                <tr>
                                    <td>2).</td>
                                    <td>Dr. Shailini Arora has been awarded the ‘Young Scientist Award’ by the SERC division of DST.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    </div>
                    <div className="card mb-3 custom-width custom-margin">
                    <CardHeader className="dark-mode">Patents</CardHeader>
                    <div className="card-body">                              
                        <Table responsive borderless>
                            <tbody>
                                <tr>
                                    <td>1).</td>
                                    <td>
                                     <p>Recently two patents have also been filed by CSE Dept. in the following areas:-</p>

                                    1. Soil Multi-Parameters Remote Monitoring and Alerting System<br/>
                                    2. A system for Building & Customizing Software and Hardware Interfaces of Smart Phone. <br/>                                 
                                     </td>
                                </tr>
                                <tr>
                                    <td>2).</td>
                                    <td><p>Two Indian patents have been granted  to Dr. Chhaya Ravikant in collaboration with National Research Development Corporation of India 
                                    
                                    </p>

                                    1. “A method of depositing thin films of metals and non metals” <br/>
                                    2. “A method of depositing thin films of non metals”<br/></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="card mb-3 custom-width custom-margin">
                    <CardHeader className="dark-mode">Student Publications</CardHeader>
                    <div className="card-body">                              
                        <Table responsive borderless>
                            <tbody>
                                <tr>
                                    <td>1).</td>
                                    <td>
                                    Taniya Bhatia , M.Tech ISM awarded with the Best Paper Award , “Malware Detection in Android based on Dynamic Analysis”, International Conference on Cyber Security and Protection of Digital Services (Cyber Security 2017)London, on June 19-20, 2017, IEEE Xplore Digital Library. </td>
                                </tr>
                                <tr>
                                    <td>2).</td>
                                    <td>Priya M.Tech ISM (2015-17),“Analysing and Classification of Multi-Opinionated Content in the Era of Cyber Activism” , Digital Transformation & Global society (DTGS’ 17) Petersburg, Russia. Post-conference proceedings will be published by Springer in Communication in Computer and Information science. </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
             
        )
    }
}

export default FacultyResearchPage;