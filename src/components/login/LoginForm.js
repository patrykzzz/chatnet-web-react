import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

export function LoginForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" value={props.email} onChange={props.handleChange} placeholder="e-mail" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" value={props.password} onChange={props.handleChange} placeholder="password" />
            </FormGroup>
        </Form>
    );
}