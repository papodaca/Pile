import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';

class UserList extends React.Component {
  static contextTypes= {
    router: React.PropTypes.object.isRequired
  }
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
    users: React.PropTypes.arrayOf(React.PropTypes.object),
    loadUsers: React.PropTypes.func,
    deleteUser: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.tableConfig = {
      headers: [
        {
          label: 'Id',
          field: 'id'
        },
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'SSN',
          field: 'ssn'
        },
        {
          label: 'DOB',
          field: 'dob'
        },
        {
          label: 'Gender',
          field: 'gender'
        }
      ],
      actions: [
        {
          label: "Edit",
          icon: "pencil-square-o",
          color: "warning",
          handle: this.handleEdit
        },
        {
          label: "Delete",
          icon: "trash-o",
          color: "danger",
          handle: this.handleDelete
        }
      ]
    };
  }

  componentWillMount = () => {
    this.props.loadUsers();
  }

  handleEdit = (user, event) => {
    this.context.router.push(`/users/${user.id}`);
  }

  handleDelete = (user, event) => {
    let result = confirm(`Are you suer you want to delete user: ${user.name}`);
    if(result) {
      this.props.deleteUser(user);
    }
  }

  /*
          <h1><I icon="user" /> User List</h1>
          <Table config={this.tableConfig} tdata={this.props.users || []} />
  */

  render() {
    if(this.props.children) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }

}

function mapStateToProps(state, ownProps) {
  return Object.assign({},
    ownProps,
    {users: state.users.all}
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
