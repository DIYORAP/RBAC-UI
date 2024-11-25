import React, { useState } from 'react';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionList from './components/PermissionList';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">RBAC Dashboard</h1>
      </header>
      <div className="flex">
        <nav className="bg-gray-800 text-white w-1/4 min-h-screen p-4">
          <ul>
            <li
              className={`cursor-pointer p-2 ${activeTab === 'users' && 'bg-gray-600'}`}
              onClick={() => setActiveTab('users')}
            >
              User Management
            </li>
            <li
              className={`cursor-pointer p-2 ${activeTab === 'roles' && 'bg-gray-600'}`}
              onClick={() => setActiveTab('roles')}
            >
              Role Management
            </li>
            <li
              className={`cursor-pointer p-2 ${activeTab === 'permissions' && 'bg-gray-600'}`}
              onClick={() => setActiveTab('permissions')}
            >
              Permission List
            </li>
          </ul>
        </nav>
        <main className="w-3/4 p-4">
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'roles' && <RoleManagement />}
          {activeTab === 'permissions' && <PermissionList />}
        </main>
      </div>
    </div>
  );
};

export default App;
