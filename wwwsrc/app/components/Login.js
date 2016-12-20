import React from 'react';
import { Button } from "@blueprintjs/core";

import Auth from '../api/auth'

class Login extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  login() {
    Auth.token(this.state.username, this.state.password).then(() => {
      this.context.router.push("/");
    })
  }

  onKeyUp(event) {
    if(event.keyCode === 13) {
      this.login();
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="pt-card login-card pt-elevation-4">
          <form>
            <label className="pt-label">
              <div className="pt-input-group">
                <span className="pt-icon pt-icon-person"></span>
                <input
                  onChange={this.onChange.bind(this)}
                  value={this.state.username}
                  name="username"
                  className="pt-input"
                  type="text"
                  placeholder="Username"
                  dir="auto" />
              </div>
            </label>
            <label className="pt-label">
              <div className="pt-input-group">
                <span className="pt-icon pt-icon-lock"></span>
                <input
                  onChange={this.onChange.bind(this)}
                  onKeyUp={this.onKeyUp.bind(this)}
                  value={this.state.password}
                  name="password"
                  className="pt-input"
                  type="password"
                  placeholder="Password"
                  dir="auto" />
              </div>
            </label>
          </form>
          <Button iconName="log-in" onClick={this.login.bind(this)}>Login</Button>
        </div>
      </div>
    );
  }

}

export default Login;
