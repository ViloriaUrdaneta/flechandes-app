"use client";
import { configureStore } from '@reduxjs/toolkit'
import fleteReducer from './features/fleteSlice'

export const store = configureStore({
    reducer: {
        fleteReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

