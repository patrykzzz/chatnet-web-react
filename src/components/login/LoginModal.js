import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { LoginForm } from './LoginForm';

export class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <ModalHeader>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <LoginForm email={this.state.email} password={this.state.password} handleChange={this.handleChange}></LoginForm>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.onClose} className="mr-auto">Login</Button>
                    <Button color="secondary" onClick={this.props.onClose}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}