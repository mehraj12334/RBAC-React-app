export const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  ];
  
  export const mockRoles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] },
  ];
  
  export const mockApi = {
    getUsers: () => new Promise((resolve) => setTimeout(() => resolve(mockUsers), 1000)),
    getRoles: () => new Promise((resolve) => setTimeout(() => resolve(mockRoles), 1000)),
    addUser: (user) => new Promise((resolve) => setTimeout(() => resolve(user), 1000)),
    addRole: (role) => new Promise((resolve) => setTimeout(() => resolve(role), 1000)),
  };
  