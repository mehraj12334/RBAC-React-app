import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h6" gutterBottom>
        Welcome to the Role-Based Access Control (RBAC) UI!
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5">User Management</Typography>
            <Typography variant="body2" paragraph>
              Manage and organize your users, assign roles, and toggle their status.
            </Typography>
            <Button
              component={Link}
              to="/users"
              variant="contained"
              fullWidth
            >
              Go to User Management
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5">Role Management</Typography>
            <Typography variant="body2" paragraph>
              Create and manage roles and define the permissions for each role.
            </Typography>
            <Button
              component={Link}
              to="/roles"
              variant="contained"
              fullWidth
            >
              Go to Role Management
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
