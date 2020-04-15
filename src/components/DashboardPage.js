import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getJobs } from '../actions/jobActions';
import { clearRegistrationMessage } from '../actions/registrationActions';
import CompanyCard from './CompanyCard';
import { Modal,
    ModalBody,
    Alert,
    Button } from 'reactstrap';

class DashboardPage extends Component {

    constructor() {
        super();
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    state = {
        modal:false
    }

    onCloseModal = () => {
        this.props.clearRegistrationMessage();
        this.setState({
            modal: !this.state.modal
        }); 
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        jobs: PropTypes.array.isRequired,
        getJobs: PropTypes.func.isRequired,
        msg: PropTypes.string,
        clearRegistrationMessage: PropTypes.func.isRequired
    };
    
    componentDidMount() { 
        this.props.getJobs();     
    }

    componentDidUpdate(prevProps){
        const {msg} = this.props;
        if(msg !== prevProps.msg && msg != null){        
           this.setState({ modal: !this.state.modal });
        }    
    }

    render() {
        return (
                <div className="content">
                <div className="container-fluid">
                
                    
                    <Modal isOpen={this.state.modal}>
                        <ModalBody>
                            { this.props.msg ? <Alert>{ this.props.msg }</Alert> : null }
                            <Button color="dark" onClick={this.onCloseModal} style={{ margin: '1rem'}}>Close</Button>
                        </ModalBody>
                    </Modal>
                    
                    {this.props.jobs.map(function(job, index) {
                        return <CompanyCard key={job.drive} job = {job}/>;
                    })}
                
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    jobs: state.job.jobs,
    msg: state.registration.msg
});

export default connect(
    mapStateToProps,
    { getJobs, clearRegistrationMessage }
)
(DashboardPage);
