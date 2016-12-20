import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';

class NewUser extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  handleChange = (event) => {
    let field = event.target.name,
        value = event.target.value,
        user = this.state.user;
    user[field] = value;
    return this.setState({user: user});
  }

  createUser = (event) => {
    event.preventDefault();

    this.props.addUser(this.state.user);
    this.context.router.push("/users");
  }
  /*
        <h1><I icon="certificate" /> New User</h1>
        <div className="offset-md-2 col-md-5">
          <UserForm user={this.state.user} onChange={this.handleChange}/>
          <div className="offset-sm-2 col-sm-3">
            <button className="btn btn-success" onClick={this.createUser}><I icon="plus"/> Create</button>
          </div>
        </div>

  */

  render() {
    return (
      <div>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return Object.assign({},
    ownProps
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
