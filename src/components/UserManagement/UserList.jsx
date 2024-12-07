import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import AddUserModal from './AddUserModal';
import EditUserModal from './EditUserModal';
import DeleteUserModal from './DeleteUserModal';
import { fetchUsers } from '../../api/mockApi';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);

  useEffect(() => {
    setUsers(fetchUsers());
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={() => setAddModalOpen(true)}>Add User</Button>
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button onClick={() => setEditModalData(user)}>Edit</Button>
                  <Button onClick={() => setDeleteModalData(user)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddUserModal open={addModalOpen} onClose={() => setAddModalOpen(false)} />
      <EditUserModal data={editModalData} onClose={() => setEditModalData(null)} />
      <DeleteUserModal data={deleteModalData} onClose={() => setDeleteModalData(null)} />
    </div>
  );
};

export default UserList;
