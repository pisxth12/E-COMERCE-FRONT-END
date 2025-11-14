import { useState, useEffect } from 'react';
import { usersAPI } from '../services/users';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get all users
  const getUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await usersAPI.getUsers();
      
      const usersData = response.data.data || [];
      
      setUsers(usersData);
      
    } catch (err) {
      console.error('❌ API Error:', err);
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch users';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Create user
  const createUser = async (userData) => {
    try {
      setLoading(true);
      const response = await usersAPI.createUser(userData);
      
      // Your API likely returns: { status: true, data: {user}, message: "..." }
      const newUser = response.data.data || response.data;
      setUsers(prev => [newUser, ...prev]);
      
      return newUser;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to create user';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Update user
  const updateUser = async (id, userData) => {
    try {
      setLoading(true);
      const response = await usersAPI.updateUser(id, userData);
      
      // Your API likely returns: { status: true, data: {user}, message: "..." }
      const updatedUser = response.data.data || response.data;
      setUsers(prev => prev.map(user => user.id === id ? updatedUser : user));
      
      return updatedUser;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to update user';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      setLoading(true);
      await usersAPI.deleteUser(id);
      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to delete user';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    loading,
    error,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  };
};