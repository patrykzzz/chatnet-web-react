import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { RegisterForm } from './RegisterForm';

export class RegisterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registerModel: {
                email: '',
                password: '',
                username: '',
                firstName: '',
                lastName: ''
            }
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
                    <RegisterForm registerModel={this.state.registerModel} handleChange={this.handleChange}></RegisterForm>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.onClose} className="mr-auto">Login</Button>
                    <Button color="secondary" onClick={this.props.onClose}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}