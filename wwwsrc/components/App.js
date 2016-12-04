import React from 'react';

import Nav from './elements/nav';
import NavLink from './elements/navLink';

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
    location: React.PropTypes.object,
    "location.pathname": React.PropTypes.string
  }

  render() {
    return (
      <div>
        <Nav>
          <NavLink to="/" icon="star">Main</NavLink>
          <NavLink to="/users" icon="user">Users</NavLink>
          <NavLink to="/users/new" icon="certificate">New User</NavLink>
          <NavLink to="/about" icon="smile-o">About</NavLink>
        </Nav>
        <div className="container">
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </div>
      </div>
    );
  }

}

export default App;
