import { useState } from 'react';
import { Button, Checkbox, FormControlLabel, List, ListItem, ListItemText, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PermissionList = ({ users, permissions, onPermissionChange }) => {
  const [selectedPermissions, setSelectedPermissions] = useState({});

  const handlePermissionToggle = (userId, permission) => {
    setSelectedPermissions((prevSelected) => {
      const userPermissions = prevSelected[userId] || [];
      if (userPermissions.includes(permission)) {
        return { ...prevSelected, [userId]: userPermissions.filter((p) => p !== permission) };
      }
      return { ...prevSelected, [userId]: [...userPermissions, permission] };
    });
  };

  const handleSavePermissions = (userId) => {
    onPermissionChange(userId, selectedPermissions[userId]);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Permissions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <List>
                    {permissions.map((permission) => (
                      <div key={permission}>
                        <ListItem>
                          <ListItemText primary={permission} />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedPermissions[user.id]?.includes(permission) || false}
                                onChange={() => handlePermissionToggle(user.id, permission)}
                                name={permission}
                              />
                            }
                            label="Assign"
                          />
                        </ListItem>
                        <Divider />
                      </div>
                    ))}
                  </List>
                  <Button variant="contained" onClick={() => handleSavePermissions(user.id)}>
                    Save Permissions
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PermissionList;
