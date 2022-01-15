import { PayloadAction } from '@reduxjs/toolkit';
import { IConfig, IMetaData, INavigationApi } from '@types';

export interface AppState {
  appName: string;
  appDescription: string;
  navigation: INavigationApi[];
  metaDataMap: Record<string, IMetaData>;
  navigationList: Record<string, INavigationApi>;
  version: string;
  mode: 'D' | 'A' | 'B';
  titleSeparator: string;
}

export type SliceAction = {
  setNavigation: (v: AppState, a: PayloadAction<INavigationApi[]>) => void;
  setConfig: (v: AppState, a: PayloadAction<IConfig>) => void;
  setMetaDataMap: (v: AppState, a: PayloadAction<Record<string, IMetaData>>) => void;
  setNavigationList: (v: AppState, a: PayloadAction<Record<string, INavigationApi>>) => void;
};
