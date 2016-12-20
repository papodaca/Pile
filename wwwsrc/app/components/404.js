import React from 'react';

import { Colors } from "@blueprintjs/core";

class NoMatch extends React.Component {
  render() {
    return (
        <h1 className="center"><span className="pt-icon-warning-sign" style={{color: Colors.RED2}} />  404 - Nothing here.</h1>
    );
  }
}

export default NoMatch;
