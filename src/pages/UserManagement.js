import React, { useState } from 'react';
import UserTable from '../components/UserTable';
 

import UserForm from '../components/UserForm';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const UserManagement = () => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setOpen(false);
  };

  return (
    <div>
      <h2>User Management</h2>
      <Button variant="contained" onClick={() => handleOpen(null)}>
        Add New User
      </Button>
      <UserTable onEdit={handleOpen} />
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedUser ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <UserForm user={selectedUser} onClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserManagement;
