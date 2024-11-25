import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Role {
    id: string;
    name: string;
    permissions: string[];
}

interface RoleState {
    roles: Role[];
}

const initialState: RoleState = {
    roles: [],
};

const roleSlice = createSlice({
    name: 'roles',
    initialState,
    reducers: {
        addRole: (state, action: PayloadAction<Role>) => {
            state.roles.push(action.payload);
        },
        editRole: (state, action: PayloadAction<Role>) => {
            const index = state.roles.findIndex((r) => r.id === action.payload.id);
            if (index !== -1) state.roles[index] = action.payload;
        },
        deleteRole: (state, action: PayloadAction<string>) => {
            state.roles = state.roles.filter((r) => r.id !== action.payload);
        },
    },
});

export const { addRole, editRole, deleteRole } = roleSlice.actions;
export default roleSlice.reducer;
