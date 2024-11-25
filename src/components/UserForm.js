import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../store/userSlice';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const UserForm = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    id: user ? user.id : '',
    name: user ? user.name : '',
    email: user ? user.email : '',
    role: user ? user.role : '',
    status: user ? user.status : 'Active',
  });
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (user) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser({ ...formData, id: Date.now() }));
    }
    onClose();
  };

  return (
    <div>
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Role</InputLabel>
        <Select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="User">User</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleSubmit} variant="contained">
        {user ? 'Update' : 'Add'} User
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </div>
  );
};

export default UserForm;
