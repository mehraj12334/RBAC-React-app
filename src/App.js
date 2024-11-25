import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { store } from './store/store';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
