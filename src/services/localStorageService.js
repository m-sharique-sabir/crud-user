const STORAGE_KEY = 'crud_app_users';

// Default users for initial setup
const DEFAULT_USERS = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', image: null, status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', image: null, status: 'active' },
];

class LocalStorageService {
  constructor() {
    this.initializeStorage();
  }

  // Initialize storage with default data if empty
  initializeStorage() {
    const existingData = localStorage.getItem(STORAGE_KEY);
    if (!existingData) {
      this.saveUsers(DEFAULT_USERS);
    }
  }

  // Get all users from localStorage
  getUsers() {
    try {
      const users = localStorage.getItem(STORAGE_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  }

  // Save users array to localStorage
  saveUsers(users) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  }

  // Add a new user
  addUser(userData) {
    const users = this.getUsers();
    const newId = this.generateId(users);
    const newUser = {
      id: newId,
      ...userData,
      phone: userData.phone.replace(/\D/g, ''), // Store only digits
      status: userData.status || 'active' // Default to active if not specified
    };
    
    users.push(newUser);
    this.saveUsers(users);
    return newUser;
  }

  // Update an existing user
  updateUser(id, updatedUserData) {
    const users = this.getUsers();
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    
    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        ...updatedUserData,
        phone: updatedUserData.phone.replace(/\D/g, '') // Store only digits
      };
      this.saveUsers(users);
      return users[userIndex];
    }
    
    return null;
  }

  // Delete a user
  deleteUser(id) {
    const users = this.getUsers();
    const filteredUsers = users.filter(user => user.id !== parseInt(id));
    
    if (filteredUsers.length < users.length) {
      this.saveUsers(filteredUsers);
      return true;
    }
    
    return false;
  }

  // Get a user by ID
  getUserById(id) {
    const users = this.getUsers();
    return users.find(user => user.id === parseInt(id));
  }

  // Generate a unique ID
  generateId(users) {
    if (users.length === 0) return 1;
    const maxId = Math.max(...users.map(user => user.id));
    return maxId + 1;
  }

  // Clear all data
  clearAll() {
    localStorage.removeItem(STORAGE_KEY);
    this.initializeStorage();
  }

  // Export data for backup
  exportData() {
    return this.getUsers();
  }

  // Import data from backup
  importData(users) {
    if (Array.isArray(users)) {
      return this.saveUsers(users);
    }
    return false;
  }
}

export default new LocalStorageService();
