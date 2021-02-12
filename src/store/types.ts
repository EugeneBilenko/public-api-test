import { Action, ThunkAction } from '@reduxjs/toolkit';
import store from './index';

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
