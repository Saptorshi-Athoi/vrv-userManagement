import { useState } from 'react';
import { Button, Checkbox, FormControlLabel, List, ListItem, ListItemText, Divider } from '@mui/material';

const PermissionList = ({ role, permissions, onPermissionChange }) => {
  const [selectedPermissions, setSelectedPermissions] = useState(role.permissions || []);

  const handlePermissionToggle = (permission) => {
    setSelectedPermissions((prevSelected) => {
      if (prevSelected.includes(permission)) {
        return prevSelected.filter((p) => p !== permission);
      }
      return [...prevSelected, permission];
    });
  };

  const handleSavePermissions = () => {
    onPermissionChange(role.id, selectedPermissions);
  };

  return (
    <>
      <List>
        {permissions.map((permission) => (
          <div key={permission}>
            <ListItem>
              <ListItemText primary={permission} />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPermissions.includes(permission)}
                    onChange={() => handlePermissionToggle(permission)}
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
      <Button variant="contained" onClick={handleSavePermissions}>
        Save Permissions
      </Button>
    </>
  );
};

export default PermissionList;
