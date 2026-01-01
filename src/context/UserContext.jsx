import React, { createContext, useState, useContext, useEffect } from 'react';
import localStorageService from '../services/localStorageService.js';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load users from localStorage on component mount
  useEffect(() => {
    const loadUsers = () => {
      try {
        const usersData = localStorageService.getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error loading users:', error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Refresh users from localStorage
  const refreshUsers = () => {
    const usersData = localStorageService.getUsers();
    setUsers(usersData);
  };

  const addUser = (userData) => {
    try {
      const newUser = localStorageService.addUser(userData);
      refreshUsers();
      return newUser;
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  };

  const deleteUser = (id) => {
    try {
      const success = localStorageService.deleteUser(id);
      if (success) {
        refreshUsers();
      }
      return success;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };

  const updateUser = (id, updatedUserData) => {
    try {
      const updatedUser = localStorageService.updateUser(id, updatedUserData);
      if (updatedUser) {
        refreshUsers();
      }
      return updatedUser;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  };

  const getUserById = (id) => {
    try {
      return localStorageService.getUserById(id);
    } catch (error) {
      console.error('Error getting user by ID:', error);
      return null;
    }
  };

  // Additional utility methods
  const clearAllUsers = () => {
    try {
      localStorageService.clearAll();
      refreshUsers();
    } catch (error) {
      console.error('Error clearing users:', error);
      throw error;
    }
  };

  const exportUsers = () => {
    try {
      return localStorageService.exportData();
    } catch (error) {
      console.error('Error exporting users:', error);
      return [];
    }
  };

  const importUsers = (usersData) => {
    try {
      const success = localStorageService.importData(usersData);
      if (success) {
        refreshUsers();
      }
      return success;
    } catch (error) {
      console.error('Error importing users:', error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        addUser,
        deleteUser,
        updateUser,
        getUserById,
        clearAllUsers,
        exportUsers,
        importUsers,
        refreshUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  return useContext(UserContext);
};

export default UserContext;
