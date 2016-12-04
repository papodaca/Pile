import React from 'react';
import _ from 'lodash';

import I from './icon';

const Table = (props) => {
  let header = props.config.headers.map((header) => {
    return <th key={header.label}>{header.label}</th>;
  });
  let actions = [];
  if(props.config.actions && props.config.actions.length > 0) {
    actions = <th>Actions</th>;
  }
  header = <tr>{header}{actions}</tr>;
  let body = props.tdata ? props.tdata.map((datum) => {
    let row = props.config.headers.map((header) => {
      return <td key={datum.id + header.field}>{datum[header.field]}</td>;
    });
    let actions = props.config.actions.map((action) => {
      let buttonClassNames = `btn btn-sm btn-${action.color}`;
      return (
        <button
          key={action.label + datum.id}
          className={buttonClassNames}
          onClick={_.partial(action.handle, datum)}>
            <I icon={action.icon}/> {action.label}
        </button>);
    });
    return <tr scope="row" key={datum.id}>{row}<td>{actions}</td></tr>;
  }) : <tr><td>No Data</td></tr>;
  return (
    <table className="table">
      <thead>{header}</thead>
      <tbody>{body}</tbody>
    </table>
  );
};

Table.propTypes = {
  config: React.PropTypes.object.isRequired,
  tdata: React.PropTypes.array.isRequired,
  "config.actions": React.PropTypes.array,
  "config.headers": React.PropTypes.array
};

export default Table;
