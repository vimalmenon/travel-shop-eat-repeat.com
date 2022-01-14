import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './app';

export const appSlice = createSlice<AppState, any>({
  name: 'app',
  initialState: {
    navigation: [],
    version: '',
    mode: 'D',
  },
  reducers: {},
});

export const appActions = appSlice.actions;
