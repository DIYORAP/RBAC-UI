import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PermissionList: React.FC = () => {
    const roles = useSelector((state: RootState) => state.roles.roles);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Permissions Overview</h2>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Role</th>
                        <th className="border p-2">Permissions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id}>
                            <td className="border p-2">{role.name}</td>
                            <td className="border p-2">{role.permissions.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PermissionList;
