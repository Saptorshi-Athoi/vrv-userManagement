let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  ];
  
  let roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
  ];
  
  // User management
  export const fetchUsers = () => users;
  
  export const addUser = (user) => {
    users.push({ id: users.length + 1, ...user });
  };
  
  export const updateUser = (id, updatedData) => {
    users = users.map(user => user.id === id ? { ...user, ...updatedData } : user);
  };
  
  export const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
  };
  
  // Role management
  export const fetchRoles = () => roles;
  
  export const addRole = (roleName) => {
    const newRole = { id: roles.length + 1, name: roleName };
    roles.push(newRole);
    return newRole;
  };
  
  export const deleteRole = (roleId) => {
    roles = roles.filter(role => role.id !== roleId);
  };
  