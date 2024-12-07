// mockApi.js
let users = [
    // Example existing users
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Manager', permissions: ['Read', 'Write'], status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', permissions: ['Read'], status: 'Inactive' },
    // Add more users here
  ];
  
  // Fetch users
  export const fetchUsers = () => {
    return users;
  };
  
  // Add a new user
  export const addUser = (userData) => {
    // Create a new user object with the provided data
    const newUser = {
      id: users.length + 1, // Generate a new ID for the user
      name: userData.name,
      email: userData.email,
      role: userData.role,
      permissions: userData.permissions, // New permissions field
      status: userData.status, // New status field
    };
  
    // Add the new user to the list of users
    users.push(newUser);
  };
  
  // Remove a user by ID
  export const deleteUser = (userId) => {
    users = users.filter(user => user.id !== userId);
  };
  