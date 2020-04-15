import React, { Component } from 'react'
import { Form, FormGroup, Input, Button, Label, Alert, Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import './css/HomePage.css';

class NewLoginPage extends Component {
    
    state = {
        enrollmentNum: null,
        password: null,
        msg: null,
        user: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        user: PropTypes.object,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps){
        const {error, isAuthenticated} = this.props;
        if(error !== prevProps.error){
            //Check for Login Error
            if(error.id === 'LOGIN_FAIL'){
                this.setState({ msg: error.msg.msg });
            }
            else {
                this.setState({ msg: null, user: this.props.user });
            }
        }

        //If authenticated, reset form
        if(isAuthenticated !== prevProps.isAuthenticated && isAuthenticated){
            this.props.clearErrors();
        }      
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { enrollmentNum, password } = this.state;

        const user = {
            enrollmentNum,
            password
        };

        //Attempt to login
        this.props.login(user);
    }

    render() {

        return (
            <section className="custom-width custom-margin">
            <Card className="login-card custom-margin">
                <CardBody>
                    <h5 className="card-title">User Login</h5>

                    { this.state.msg ? 
                    <Alert color="danger">{ this.state.msg }</Alert>
                        
                        : null }
                        <br/>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>                                                       
                            <Label for="enrollmentNum">Username</Label>
                            <Input
                                type="text"
                                name="enrollmentNum"
                                id="enrollmentNum"
                                placeholder="Username"
                                onChange={this.onChange}
                                required
                            />
                            <br/>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={this.onChange}
                                required
                            />
                            <Button color="dark" style={{ marginTop: '2rem'}} block>
                                Login
                            </Button>
                        </FormGroup>
                    </Form>                      
                </CardBody>
            </Card>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    error: state.error
});

export default connect(
    mapStateToProps,
    { login, clearErrors }
)
(NewLoginPage);

