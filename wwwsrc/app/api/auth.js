import http from './http';

class Auth extends http {
  token(username, password) {
    return this.post('/Admin/Session', {
      'body': {
        username,
        password
      }
    });
  }
  test() {
    return this.put('/Admin/Session');
  }
  logout() {
    return this.delete('/Admin/Session');
  }
}

export default new Auth();
