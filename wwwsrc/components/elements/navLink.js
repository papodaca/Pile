import React from 'react';
import { IndexLink, Link } from 'react-router';

import I from './icon';

class NavLink extends React.Component {
  static propTypes = {
    to: React.PropTypes.string,
    icon: React.PropTypes.string,
    index: React.PropTypes.bool,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    let link;
    if(this.props.index) {
      link = <IndexLink to={this.props.to} className="nav-link"><I icon={this.props.icon} /> {this.props.children}</IndexLink>;
    } else {
      link = <Link to={this.props.to} className="nav-link"><I icon={this.props.icon} /> {this.props.children}</Link>;
    }

    let LiClasses = "nav-item";

    if(this.context.router.isActive(this.props.to)) {
      LiClasses += " active";
    }

    return (
      <li className={LiClasses}>
        {link}
      </li>
    );
  }
}

export default NavLink;
