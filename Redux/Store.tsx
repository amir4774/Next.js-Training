import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './UserReducer';
import ReposReducer from './ReposReducer'

export const Store = configureStore({
    reducer: {
        user: UserReducer,
        repo: ReposReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>;