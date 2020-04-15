import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './css/HomePage.css';

class HistoryPage extends Component {
    render() {
        return (
            <div>
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="1998"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    The Indira Gandhi Institute of Technology (IGIT) was established by Directorate of Training and Technical Education, 
                    Govt of N.C.T of Delhi as the first engineering college for women
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="1998"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    B.Tech degree in CSE is introduced
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="1998"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    B.Tech degree in ECE is introduced
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="1998"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    B.Tech degree in MAE is introduced
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2002"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    The college became the first constituent college of Guru Gobind Singh Indraprastha University
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2002-2007"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    Continued to receive Grant-in-aid from Govt. of Delhi
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2005"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    Ph.D (Engg&amp;Tech),Through, USET, GGSIPU is introduced
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2007"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    M.Tech (ECE) part-time is introduced
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2010"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    B.Tech degree in IT is introduced
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2011"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>
                    MCA is introduced
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2013"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>IGIT granted autonomous status as Indira Gandhi Delhi Technical University for Women(IGDTUW).</p>
                    <p>M.Tech(ISM), M.Tech(MPC), M.Tech (R&amp;A) and M.Tech(VLSID) launched.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2014"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>Ph.D Program in Engineering, Science and Technology is launched.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2015"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p>IB.Arch program is launched (approval of Council of Architecture granted)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(212, 212, 212, 0.3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(212, 212, 212, 0.3)'  }}
                    date="2016"
                    iconStyle={{ background: 'rgb(33, 37, 41)', color: '#fff' }}
                >
                    <p> M.Tech ICT Weekend  introduced </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        )
    }
}

export default HistoryPage;