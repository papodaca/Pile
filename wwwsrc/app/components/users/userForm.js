import React from 'react';

/*
    <Form>
      <Input
        name="name"
        type="text"
        label="Name"
        placeholder="Enter Name"
        value={user.name}
        onChange={onChange}/>
      <Input
        name="ssn"
        type="text"
        label="SSN"
        placeholder="Enter SSN"
        value={user.ssn}
        onChange={onChange}/>
      <Input
        name="dob"
        type="date"
        label="DOB"
        placeholder="Enter DOB"
        value={user.dob}
        onChange={onChange}/>
      <Input
        name="gender"
        type="select"
        label="Gender"
        placeholder="Select Gender"
        value={user.gender}
        onChange={onChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Input>
    </Form>

*/

const UserForm = ({user, onChange}) => {
  return (
    <div></div>
  );
};

UserForm.propTypes = {
  user: React.PropTypes.object,
  "user.name": React.PropTypes.string,
  "user.ssn": React.PropTypes.string,
  "user.dob": React.PropTypes.string,
  "user.gender": React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default UserForm;
