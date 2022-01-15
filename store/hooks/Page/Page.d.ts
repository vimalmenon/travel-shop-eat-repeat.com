import { IConfig, IMetaData, INavigationApi } from '@types';

export type NavigationMapType = Record<string, IMetaData>;
export type UsePageHelperType = (navigation: INavigationApi[], config: IConfig) => void;
export type GetNavigationMapType = (
  navigation: INavigationApi[],
  appName: string,
  appDescription: string
) => NavigationMapType;
