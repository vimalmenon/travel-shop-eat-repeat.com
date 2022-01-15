import { PayloadAction } from '@reduxjs/toolkit';
import { INavigation } from '@types';

export interface AppState {
  appName: string;
  appDescription: string;
  navigation: INavigation[];
  version: string;
  mode: 'D' | 'A' | 'B';
  titleSeparator: string;
}

export type SliceAction = {
  setNavigation: (v: AppState, a: PayloadAction<INavigation[]>) => void;
};
