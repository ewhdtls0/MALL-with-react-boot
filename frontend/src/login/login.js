import React, { Component } from "react";
import { Button, Modal, ModalBody } from 'reactstrap';
import '../layout/css/loginParts.css';
import UserService from './UserService'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,

          userID:'',
          userPW:''
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);
        this.changeuserPWHandler = this.changeuserPWHandler.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    changeuserIDHandler = (e) => {
        this.setState({userID : e.target.value});
    }
    changeuserPWHandler = (e) => {
        this.setState({userPW : e.target.value});
    }

    handleFormSubmit(e){
        e.preventDefault();
        let user = {
            userID : this.state.userID,
            userPW : this.state.userPW
        };
        console.log("login info => "+ JSON.stringify(user));
        UserService.getUser(user).then(res => {
            alert("login info : "+res.data.userID);
        });
    }
      
    render() {
        return (
            <div>
                <Button className="loginComponents" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody>
                    <form onSubmit={this.handleFormSubmit}>

                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" placeholder="Enter email" value={this.state.userID} onChange={this.changeuserIDHandler}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={this.state.userPW} onChange={this.changeuserPWHandler}/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
                </ModalBody>
                </Modal>
            </div>
        );
    }
}