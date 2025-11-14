import { api } from './index.js'; // Make sure the path is correct

export const usersAPI = {
  // GET - Get all users
  getUsers: () => api.get('/users'),
  
  // GET - Get single user by ID
  getUserById: (id) => api.get(`/users/${id}`),
  
  // POST - Create new user
  createUser: (userData) => api.post('/users', userData),
  
  // PUT - Update user
  updateUser: (id, userData) => api.put(`/users/${id}`, userData),
  
  // DELETE - Delete user
  deleteUser: (id) => api.delete(`/users/${id}`),
};