import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice<Record<string, unknown>, any>({
  name: 'app',
  initialState: {},
  reducers: {},
});

export const appActions = appSlice.actions;
