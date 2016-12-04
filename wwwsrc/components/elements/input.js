import React from 'react';

const Input = (props) => {
  const { name, label, onChange, ...localProps } = props;

  let input;

  if(localProps.type === "select") {
    const { type, placeholder, ...theseProps } = localProps;
    input = (
      <select id={name} name={name} onChange={onChange} {...theseProps} className="form-control">
        <option>{placeholder}</option>
        {theseProps.children}
      </select>
    );
  } else {
    input = <input id={name} name={name} onChange={onChange} {...localProps} className="form-control">{localProps.children}</input>;
  }

  return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-2 col-form-label">{localProps.label}</label>
      <div className="col-sm-10">
        {input}
      </div>
    </div>
  );
};

Input.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  onChange: React.PropTypes.func
};

export default Input;
