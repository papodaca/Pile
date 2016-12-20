import React from 'react';
import {
    Tooltip,
    Position
} from "@blueprintjs/core";

import auth from '../api/auth';

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
    location: React.PropTypes.object,
    "location.pathname": React.PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      dark: false
    }
  }

  logOut() {
    auth.logout().then(() => {
      this.context.router.push("/login");
    });
  }

  toggleDarkMode() {
    this.setState({
      dark: !this.state.dark
    });
  }

  render() {
    let navBar = '';
    let containerClasses = 'container';

    let modeButton;
    if(this.state.dark) {
      modeButton = (
        <Tooltip content="Light Mode" position={Position.LEFT}>
          <button
            className="pt-button pt-minimal pt-icon-flash"
            onClick={this.toggleDarkMode.bind(this)}></button>
        </Tooltip>
      );
    } else {
      modeButton = (
        <Tooltip content="Dark Mode" position={Position.LEFT}>
          <button
            className="pt-button pt-minimal pt-icon-moon"
            onClick={this.toggleDarkMode.bind(this)}></button>
        </Tooltip>

      );
    }

    if(this.props.location.pathname !== "/login") {
      navBar = (
        <nav className="pt-navbar pt-fixed-top">
          <div className="pt-navbar-group pt-align-left">
            <div className="pt-navbar-heading">Admin</div>
          </div>
          <div className="pt-navbar-group pt-align-right">
            {modeButton}
            <span className="pt-navbar-divider"></span>
            <Tooltip content="Logout" position={Position.LEFT}>
              <button className="pt-button pt-minimal pt-icon-log-out" onClick={this.logOut.bind(this)}></button>
            </Tooltip>
          </div>
        </nav>
      );
      containerClasses = `${containerClasses} with-nav`;
    } else {
      containerClasses = `${containerClasses} login`;
    }
    let superContainerClasses;
    if(this.state.dark) {
      superContainerClasses = 'pt-dark';
    }
    return (
      <div className={superContainerClasses}>
        {navBar}
        <div className={containerClasses}>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </div>
      </div>
    );
  }

}

export default App;
