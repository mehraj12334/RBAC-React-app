import { mockApi } from '../mock/mockData';

export const fetchUsers = async () => {
  return await mockApi.getUsers();
};

export const fetchRoles = async () => {
  return await mockApi.getRoles();
};

export const createUser = async (user) => {
  return await mockApi.addUser(user);
};

export const createRole = async (role) => {
  return await mockApi.addRole(role);
};
