import { Container, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import UserList from './components/UserManagement/UserList';
import RoleList from './components/RoleManagement/RoleList';
import PermissionList from './components/RoleManagement/PermissionList';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="User Management" />
          <Tab label="Role Management" />
          <Tab label="Permissions" />
        </Tabs>
        <Box sx={{ marginTop: 4 }}>
          {activeTab === 0 && <UserList />}
          {activeTab === 1 && <RoleList />}
          {activeTab === 2 && <PermissionList />}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
