import { INavigation } from '@types';

export interface AppState {
  navigation: INavigation[];
  version: string;
  mode: 'D' | 'A' | 'B';
}
