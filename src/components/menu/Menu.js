import React from 'react';
import { Navbar, NavLink, NavItem, Nav } from 'reactstrap';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn
        };
    }

    render() {
        const LoginLink = () => this.state.isLoggedIn ? '' :
            <NavItem>
                <NavLink href="#" onClick={this.props.onLoginClick}>Login</NavLink>
            </NavItem>;

        const RegisterLink = () => this.state.isLoggedIn ? '' :
            <NavItem>
                <NavLink href="#" onClick={this.props.onRegisterClick}>Register</NavLink>
            </NavItem>;

        return (
            <Navbar color="light" light>
                <Nav>
                    <NavLink className="navbar-brand" to="/home">Home</NavLink>
                    <LoginLink />
                    <RegisterLink />
                </Nav>
            </Navbar>
        )
    }
}