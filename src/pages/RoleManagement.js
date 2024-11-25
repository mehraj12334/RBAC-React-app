import React, { useState } from 'react';
import RoleTable from '../components/RoleTable';
import RoleForm from '../components/RoleForm';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const RoleManagement = () => {
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleOpen = (role) => {
    setSelectedRole(role);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedRole(null);
    setOpen(false);
  };

  return (
    <div>
      <h2>Role Management</h2>
      <Button variant="contained" onClick={() => handleOpen(null)}>
        Add New Role
      </Button>
      <RoleTable onEdit={handleOpen} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedRole ? 'Edit Role' : 'Add Role'}</DialogTitle>
        <DialogContent>
          <RoleForm role={selectedRole} onClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoleManagement;
