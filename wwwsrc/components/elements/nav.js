import React from 'react';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-light bg-faded">
      <div className="container">
        <ul className="nav navbar-nav">
          {props.children}
        </ul>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};

export default Nav;
