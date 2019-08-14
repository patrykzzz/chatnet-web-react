import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

export function RegisterForm(props) {
    const registerModel = Object.assign({}, props.registerModel);

    return (
        <Form>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" value={registerModel.email} onChange={props.handleChange} placeholder="e-mail" />
            </FormGroup>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" value={registerModel.username} onChange={props.handleChange} placeholder="username" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" value={registerModel.password} onChange={props.handleChange} placeholder="password" />
            </FormGroup>
            <FormGroup>
                <Label for="firstName">First name</Label>
                <Input type="text" name="firstName" id="firstName" value={registerModel.firstName} onChange={props.handleChange} placeholder="First name" />
            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last name</Label>
                <Input type="text" name="lastName" id="lastName" value={registerModel.lastName} onChange={props.handleChange} placeholder="Last name" />
            </FormGroup>
        </Form>
    );
}