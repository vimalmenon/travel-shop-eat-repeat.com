import { PayloadAction } from '@reduxjs/toolkit';
import { IConfig, IMetaData, INavigationApi } from '@types';

export interface AppState {
  appName: string;
  appDescription: string;
  navigation: INavigationApi[];
  navigationMap: Record<string, IMetaData>;
  version: string;
  mode: 'D' | 'A' | 'B';
  titleSeparator: string;
}

export type SliceAction = {
  setNavigation: (v: AppState, a: PayloadAction<INavigationApi[]>) => void;
  setConfig: (v: AppState, a: PayloadAction<IConfig>) => void;
  setNavigationMap: (v: AppState, a: PayloadAction<Record<string, IMetaData>>) => void;
};
