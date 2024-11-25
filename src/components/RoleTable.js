import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRole } from '../store/roleSlice';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const RoleTable = ({ onEdit }) => {
  const roles = useSelector((state) => state.roles);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRole(id));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Role Name</TableCell>
          <TableCell>Permissions</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.id}>
            <TableCell>{role.name}</TableCell>
            <TableCell>{role.permissions.join(', ')}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(role)}>Edit</Button>
              <Button onClick={() => handleDelete(role.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoleTable;
