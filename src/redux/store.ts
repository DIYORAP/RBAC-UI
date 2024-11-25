import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import roleReducer from './roleSlice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        roles: roleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
