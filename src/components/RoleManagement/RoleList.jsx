import React, { useState } from 'react';
import { fetchUsers, addUser } from '../../api/mockApi';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Select, MenuItem } from '@mui/material';

const RoleList = () => {
  const [users, setUsers] = useState(fetchUsers());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    status: 'Active',
  });
  const [showForm, setShowForm] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add user function
  const handleAddUser = (e) => {
    e.preventDefault(); // Prevent form refresh

    // Add new user to the database
    addUser(formData);

    // Update the local state to refresh the table
    setUsers(fetchUsers());

    // Reset the form and hide it
    setFormData({ name: '', email: '', role: '', status: 'Active' });
    setShowForm(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add User'}
      </Button>

      {showForm && (
        <form onSubmit={handleAddUser}>
          <div>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </div>
          <Button type="submit" variant="contained" color="success">
            Save User
          </Button>
        </form>
      )}

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RoleList;
