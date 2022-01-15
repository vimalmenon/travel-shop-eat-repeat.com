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
    metaDataMap: {},
    navigationList: {},
  },
  reducers: {
    setNavigation(root, action) {
      root.navigation = action.payload;
    },
    setConfig(root, action) {
      const { appDescription, appName, mode, titleSeparator, version } = action.payload;

      root.titleSeparator = titleSeparator;
      root.version = version;
      root.mode = mode;

      root.appDescription = appDescription;
      root.appName = appName;
    },
    setMetaDataMap(root, action) {
      root.metaDataMap = action.payload;
    },
    setNavigationList(root, action) {
      root.navigationList = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
