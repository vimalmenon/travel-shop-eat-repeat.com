import { createSlice } from '@reduxjs/toolkit';

import { AppState, SliceAction } from './app';

export const appSlice = createSlice<AppState, SliceAction>({
  name: 'app',
  initialState: {
    navigation: [],
    version: '',
    mode: 'D',
    titleSeparator: '|',
    appName: 'Application',
    appDescription: 'Application Description',
  },
  reducers: {
    setNavigation(root, action) {
      root.navigation = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
