import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addUser, deleteUser, editUser } from '../redux/userSlice';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
}

const UserManagement: React.FC = () => {
    const users = useSelector((state: RootState) => state.users.users as User[]);
    const dispatch = useDispatch();
    const [form, setForm] = useState<Partial<User>>({
        id: '',
        name: '',
        email: '',
        role: '',
        status: 'Active',
    });

    const handleSubmit = () => {
        if (form.id) {
            dispatch(editUser(form as User));
        } else {
            dispatch(addUser({ ...form, id: Date.now().toString() } as User));
        }
        setForm({ id: '', name: '', email: '', role: '', status: 'Active' });
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">User Management</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name || ''}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email || ''}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Role"
                    value={form.role || ''}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="border p-2 mr-2"
                />
                <select
                    value={form.status || 'Active'}
                    onChange={(e) =>
                        setForm({ ...form, status: e.target.value as 'Active' | 'Inactive' })
                    }
                    className="border p-2 mr-2"
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
                    {form.id ? 'Edit User' : 'Add User'}
                </button>
            </div>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Role</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">{user.role}</td>
                            <td className="border p-2">{user.status}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => setForm(user)}
                                    className="bg-yellow-500 text-white px-2 py-1 mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => dispatch(deleteUser(user.id))}
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

export default UserManagement;
