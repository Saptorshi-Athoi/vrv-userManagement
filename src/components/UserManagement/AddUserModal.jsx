import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { addUser } from '../../api/mockApi';

const AddUserModal = ({ open, onClose }) => {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    status: 'Active',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add user functionality
  const handleAddUser = () => {
    addUser(formData); // Pass the form data to addUser
    onClose(); // Close the modal
    setFormData({ name: '', email: '', role: '', status: 'Active' }); // Reset the form
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          padding: 4,
          background: 'white',
          margin: 'auto',
          width: 300,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Input fields bound to formData */}
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" fullWidth onClick={handleAddUser}>
          Add User
        </Button>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
