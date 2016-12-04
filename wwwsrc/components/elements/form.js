import React from 'react';

const Form = (props) => {
  return <form>{props.children}</form>;
};

Form.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};

export default Form;
