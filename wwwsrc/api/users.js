import Chance from 'chance';
import _ from 'lodash';
import moment from 'moment';

import DelayedPromise from './DelayedPromise';

class Users {
  constructor() {
    this.chance = new Chance();
    let result = [];
    for(let ii=0;ii<20;ii++) {
      result.push(ii);
    }
    this.users = result.map(() => {
      return {
        id: this.chance.guid(),
        name: this.chance.name(),
        ssn: this.chance.ssn(),
        gender: this.chance.gender(),
        dob: moment(this.chance.birthday()).format('YYYY-MM-DD')
      };
    });
  }

  getAllUsers() {
    return DelayedPromise((resolve, reject) => resolve(this.users));
  }

  addUser(user) {
    user.id = this.chance.guid();
    this.users.push(user);
    return this.getAllUsers();
  }

  get(userId) {
    let user = _.find(this.users, (user) => user.id === userId);
    return DelayedPromise((resolve, reject) => resolve(user));
  }

  update(user) {
    let userIndex = _.findIndex(this.users, (thisUser) => user.id === thisUser.id);
    this.users.splice(userIndex, 1, user);
    return this.getAllUsers();
  }

  delete(user) {
    let userIndex = _.findIndex(this.users, (thisUser) => user.id === thisUser.id);
    this.users.splice(userIndex, 1);
    return this.getAllUsers();
  }

}

export default new Users();
