import React, { Component } from 'react';

class CoursesOfferedPage extends Component {
    render() {
        return (
            <section>
                <h3 className="custom-width custom-margin">Courses offered by different departments at IGDTUW</h3>
                <div className="card mb-3 custom-width custom-margin custom-padding">
                    <h3 className="card-title custom-padding">Computer Science and Engineering</h3>
                    <div className="card-body">
                        <p>
                            The Computer Science and Engineering Department is the most versatile department of college and 
                            caters to the needs of other departments as well. The department aims at developing the fundamental 
                            conceptual knowledge along with the total personality, which helps computer engineers to face the 
                            challenges of rapidly changing software industry. Technical skills, teamwork and specialized knowledge 
                            prepare these young engineers to adopt and continuously learn new technologies. 
                            Regular updation and expansion of the labs is done as per the requirement of the industry.
                        </p>
                        <ul>
                            <li>B. Tech (CSE)</li>
                            <li>M.Tech(AI)</li>
                        </ul>             
                    </div>
                </div> 

                <div className="card mb-3 custom-width custom-margin custom-padding">
                    <h3 className="card-title custom-padding">Electronics and Communication Engineering</h3>
                    <div className="card-body">
                        <p>
                            The department aims to impart quality technical education to the students aspiring for a career in the field of 
                            electronics and communications engineering. The department also caters to the needs of other engineering disciplines 
                            where electronics is taught either as an essential or an elective subject. The department offers subjects like basic 
                            electronics, EMT theory, communications, VLSI, microwave engg, digital signal processing, optical communications, 
                            advanced microprocessor and other related subjects.
                        </p>
                        <ul>
                            <li>B.Tech (ECE)</li>
                            <li>M.Tech(VLSI Design)</li>
                            <li>M.Tech(ECE)-Weekend Programme</li>
                        </ul>             
                    </div>
                </div>   

                <div className="card mb-3 custom-width custom-margin custom-padding">
                    <h3 className="card-title custom-padding">Information Technology</h3>
                    <div className="card-body">
                        <p>
                            Department of IT aims to prepare students to undertake careers involving innovation and problem solving 
                            using IT, or to undertake advanced studies for research careers in IT. It aims to emerge as a centre of 
                            excellence in leveraging information technology to stimulate the exchange and creation of knowledge for 
                            intellectual, social, political, moral and material development of the society.   The teaching pedagogy 
                            in the department aims to bridge the gap between principles and applications with the goal to apply 
                            knowledge of computing sciences for solving real world problems.
                        </p>
                        <ul>
                            <li>B.Tech (IT)</li>
                            <li>Master of Computer Application(MCA)</li>
                            <li>M.Tech(Information Security Management)</li>
                            <li>M.Tech(Information and Communication Technology)- Part Time</li> 
                        </ul>             
                    </div>
                </div>   

                <div className="card mb-3 custom-width custom-margin custom-padding">
                    <h3 className="card-title custom-padding">Mechanical and Automation Engineering</h3>
                    <div className="card-body">
                        <p>
                            Besides giving a through grounding in basic sciences and engineering subjects  the curriculum  in mechanical 
                            and  automation engineering emphasises on deep understanding of applied mechanics, microprocessors, machine 
                            design, heat transfer, refrigeration and air conditioning, machine tools, metrology, robotics and CAD(CAM) 
                            etc.  The department has well-equipped laboratories in related fields and students are exposed to various 
                            modern equipment in the area of mechanical and automation .
                        </p>
                        <ul>
                            <li>B.Tech (MAE)</li>
                            <li>M.Tech(Robotics and Automation)</li>     
                        </ul>             
                    </div>
                </div>   

                <div className="card mb-3 custom-width custom-margin custom-padding">
                    <h3 className="card-title custom-padding">Architecture and Planning</h3>
                    <div className="card-body">
                        <p>
                            The Department of Architecture and Planning started in 2015 as a step towards social equity and gender 
                            parity in technical professions, having a vision that architectural education should empower students 
                            to become protagonist of positive change by exploring, learning and practicing a sustainable form of 
                            architecture. The architectural education must, besides imparting knowledge, also endeavor to create 
                            opportunities for students to engage with real life issues, so that they can reflect on their role in 
                            creating a better world.
                        </p>
                        <ul>
                            <li>B.Architecture</li>    
                        </ul>             
                    </div>
                </div>          
            </section>
        )
    }
}

export default CoursesOfferedPage;