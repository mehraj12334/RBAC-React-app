import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addRole, updateRole } from '../store/roleSlice'; // Import your actions

const RoleForm = ({ role, onClose }) => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState([]);
  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    if (role) {
      setName(role.name);
      setPermissions(role.permissions);
    }
  }, [role]);

  const handlePermissionsChange = (e) => {
    const { value } = e.target;
    setPermissions(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roleData = { id: role ? role.id : new Date().getTime(), name, permissions };
    if (role) {
      dispatch(updateRole(roleData)); // Dispatch the updateRole action
    } else {
      dispatch(addRole(roleData)); // Dispatch the addRole action
    }
    onClose(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Role Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        required
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Permissions</InputLabel>
        <Select
          multiple
          value={permissions}
          onChange={handlePermissionsChange}
          label="Permissions"
        >
          <MenuItem value="Read">Read</MenuItem>
          <MenuItem value="Write">Write</MenuItem>
          <MenuItem value="Delete">Delete</MenuItem>
        </Select>
        <FormHelperText>Select permissions for this role</FormHelperText>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {role ? 'Update Role' : 'Add Role'}
      </Button>
    </form>
  );
};

export default RoleForm;
