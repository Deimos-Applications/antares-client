import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app.store';

export enum AuthActions {
  SET_JWT = 'setJwt',
}

interface AuthState {
  jwt: string | null;
}

const initialState: AuthState = {
  jwt: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    [AuthActions.SET_JWT]: (state, action: PayloadAction<string | null>) => {
      state.jwt = action.payload;
    },
  },
});

export const { setJwt } = authSlice.actions;

export const selectJwt = (state: RootState): string | null => state.auth.jwt;
