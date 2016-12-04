import expect from 'expect';

import userApi from './users';

describe('Api to manage users: ', () => {
  it('should exist', () => {
    expect(userApi).toExist();
    expect(userApi.getAllUsers).toExist();
    expect(userApi.addUser).toExist();
    expect(userApi.get).toExist();
    expect(userApi.update).toExist();
    expect(userApi.delete).toExist();
  });
  describe('getAllUsers', () => {
    it('should return data', () => {
      let data = userApi.getAllUsers();
      expect(data.length).toBe(20);
      expect(data[0].name).toExist();
    });
  });
});
