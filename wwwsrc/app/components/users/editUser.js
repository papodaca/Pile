import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';

class EditUser extends React.Component {
  static propTypes = {
    params: React.PropTypes.object,
    "params.id": React.PropTypes.string,
    updateUser: React.PropTypes.func,
    user: React.PropTypes.object,
    getUser: React.PropTypes.func
  }
  static contextTypes= {
    router: React.PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      user: props.user
    };
    if(!props.user.id) {
      this.props.getUser(this.props.params.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.user.id !== nextProps.user.id) {
      this.setState({user: Object.assign({},nextProps.user)});
    }
  }

  handleChange = (event) => {
    const field = event.target.name,
        value = event.target.value,
        user = Object.assign({}, this.state.user);
    user[field] = value;
    this.setState({user});
  }

  handleUpdate = (event) => {
    event.preventDefault();

    this.props.updateUser(this.state.user);
    this.context.router.push("/users");
  }

  cancel = (event) => {
    event.preventDefault();
    this.context.router.push("/users");
  }

  /*
<h1><I icon="certificate" /> New User</h1>
        <div className="offset-md-2 col-md-5">
          <UserForm
            user={this.state.user}
            onChange={this.handleChange}/>
          <div className="offset-sm-2 col-sm-10">
            <button
              className="btn btn-warning"
              onClick={this.handleUpdate}>
                <I icon="pencil-square-o"/> Update
            </button>  <button
              className="btn btn-default"
              onClick={this.cancel}>
              <I icon="ban"/> Cancel
            </button>
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
  const userId = ownProps.params.id;
  return Object.assign({},
    ownProps,
    {user: state.users.all ? state.users.all.filter(user => user.id === userId)[0] : {}}
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
