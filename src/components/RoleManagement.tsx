import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addRole, editRole, deleteRole } from '../redux/roleSlice';

const RoleManagement: React.FC = () => {
    const roles = useSelector((state: RootState) => state.roles.roles);
    const dispatch = useDispatch();
    const [form, setForm] = useState({ id: '', name: '', permissions: [] as string[] });
    const [permissions, setPermissions] = useState(['Read', 'Write', 'Delete']); // Example permissions

    const handleSubmit = () => {
        if (form.id) {
            dispatch(editRole(form));
        } else {
            dispatch(addRole({ ...form, id: Date.now().toString() }));
        }
        setForm({ id: '', name: '', permissions: [] });
    };

    const togglePermission = (permission: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            permissions: prevForm.permissions.includes(permission)
                ? prevForm.permissions.filter((perm) => perm !== permission)
                : [...prevForm.permissions, permission],
        }));
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Role Management</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Role Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border p-2 mr-2"
                />
                <div className="flex items-center mb-2">
                    {permissions.map((permission) => (
                        <label key={permission} className="mr-4 flex items-center">
                            <input
                                type="checkbox"
                                checked={form.permissions.includes(permission)}
                                onChange={() => togglePermission(permission)}
                                className="mr-1"
                            />
                            {permission}
                        </label>
                    ))}
                </div>
                <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
                    {form.id ? 'Edit Role' : 'Add Role'}
                </button>
            </div>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Role Name</th>
                        <th className="border p-2">Permissions</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map((role) => (
                        <tr key={role.id}>
                            <td className="border p-2">{role.name}</td>
                            <td className="border p-2">{role.permissions.join(', ')}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => setForm(role)}
                                    className="bg-yellow-500 text-white px-2 py-1 mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => dispatch(deleteRole(role.id))}
                                    className="bg-red-500 text-white px-2 py-1"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoleManagement;
