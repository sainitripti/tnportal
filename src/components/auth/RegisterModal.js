import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';

class RegisterModal extends Component {
    state = {
        modal: false,
        enrollmentNum: '',
        password: '',
        role: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { enrollmentNum, password, role } = this.state;

        //Create a user object
        const newUser = {
            enrollmentNum,
            password,
            role
        };

        //Attempt to register
        this.props.register(newUser);

        //Close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Register
                </NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>                                                       
                                <Label for="enrollmentNum">Enrollment Num</Label>
                                <Input
                                    type="text"
                                    name="enrollmentNum"
                                    id="enrollmentNum"
                                    placeholder="Enrollment Num"
                                    onChange={this.onChange}
                                />
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={this.onChange}
                                />
                                <Label for="role">Role</Label>
                                <Input
                                    type="text"
                                    name="role"
                                    id="role"
                                    placeholder="Role"
                                    onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: '2rem'}} block>
                                    Register
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps,
    { register }
)
(RegisterModal);
