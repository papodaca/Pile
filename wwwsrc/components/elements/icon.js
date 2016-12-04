import React from 'react';

const I = (props) => {
  let iconClass = `fa fa-${props.icon}`;
  return <i className={iconClass} />;
};

I.propTypes = {
  icon: React.PropTypes.string
};

export default I;
