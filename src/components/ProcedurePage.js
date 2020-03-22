import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class ProcedurePage extends Component {
    render() {
        return (
            <div>
                <h3 className="custom-width custom-margin">Procedure for getting an on-campus placement:</h3>
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="Step 1"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                        Companies interested in hiring can register for the upcoming placement season either by submitting the 
                        registration form or by emailing the duly filled Job Announcement Form at tpo@igdtuw.ac.in.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="Step 2"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                        An optimum slot will be allocated to the firm and necessary details will be 
                        provided as per company's requirement.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="Step 3"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                        The Company visits the Campus on the scheduled date for a Pre-placement talk. 
                        The On-Campus procedure may be held on the same day or on a later date.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="Step 4"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                        The company is expected to declare the final list of selects on the day of the On-Campus Process. 
                        If this is not possible, then the T&amp;P department should be notified beforehand.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="Step 5"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                        Once a student is selected in one company, she will not be allowed to appear for other companies' 
                        interviews as per the Recruitment Policy**.
                    </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}

export default ProcedurePage;