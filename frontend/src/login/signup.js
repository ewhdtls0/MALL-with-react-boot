import React, { Component } from "react";
import { Button, Modal, ModalBody } from 'reactstrap';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render() {
        return (
            <div>
                <button className="loginComponents" onClick={this.toggle}>{this.props.buttonLabel}</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody>
                    <form>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>ID</label>
                        <input type="text" className="form-control" placeholder="Enter ID" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <label>Your name</label>
                        <input type="text" className="form-control" placeholder="name" />
                    </div>
                        <div className="form-group">
                            <label>Gender</label><br/>
                            <label className="col-6 text-center">
                                <input type="radio" className="form-control" name ="sex" /><p>Man</p>
                            </label>
                            <label className="col-6 text-center">
                                <input type="radio" className="form-control" name ="sex"/><p>Woman</p>
                            </label>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" placeholder="네 전화번호" />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">log in?</a>
                    </p>
                    </form>
                </ModalBody>
                </Modal>
            </div>
        );
    }
}