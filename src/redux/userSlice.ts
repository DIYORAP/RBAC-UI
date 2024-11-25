import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
}

interface UserState {
    users: User[];
}

const initialState: UserState = {
    users: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        editUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex((u) => u.id === action.payload.id);
            if (index !== -1) state.users[index] = action.payload;
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((u) => u.id !== action.payload);
        },
    },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
