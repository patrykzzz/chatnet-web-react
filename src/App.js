import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Menu } from './components/menu/Menu';
import { LoginModal } from './components/login/LoginModal';
import { RegisterModal } from "./components/register/RegisterModal";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginModalOpen: false,
      isRegisterModalOpen: false,
      isLoggedIn: false
    };
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onLoginModalClose = this.onLoginModalClose.bind(this);
    this.onRegisterModalClose = this.onRegisterModalClose.bind(this);
  }


  onLoginClick() {
    this.setState({
      isLoginModalOpen: true
    });
  }

  onRegisterClick() {
    this.setState({
      isRegisterModalOpen: true
    });
  }

  onLoginModalClose() {
    this.setState({
      isLoginModalOpen: false
    });
  }

  onRegisterModalClose() {
    this.setState({
      isRegisterModalOpen: false
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Menu isLoggedIn={this.state.isLoggedIn} onLoginClick={this.onLoginClick} onRegisterClick={this.onRegisterClick} />
        </div>
        <div className="h-100">
          <Route path="/home" exact component={Home} />
          <LoginModal isOpen={this.state.isLoginModalOpen} onClose={this.onLoginModalClose}></LoginModal>
          <RegisterModal isOpen={this.state.isRegisterModalOpen} onClose={this.onRegisterModalClose}></RegisterModal>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div className="text-center">
      <h2>Welcome to Chat Net!</h2>
    </div>
  )
}
