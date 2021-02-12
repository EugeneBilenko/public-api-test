import {  configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import entitiesReducer from './entitiesSlice';

const store = configureStore({
  reducer: {
    entities: entitiesReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
