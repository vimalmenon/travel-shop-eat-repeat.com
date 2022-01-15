import { IConfig, IMetaData, INavigationApi } from '@types';

export type NavigationMapType = Record<string, IMetaData>;
export type NavigationListType = Record<string, IMetaData[]>;
export type UsePageHelperType = (
  navigation: INavigationApi[],
  config: IConfig,
  navigationList: Record<string, string[]>
) => void;
export type CreateMetaDataMapType = (
  navigation: INavigationApi[],
  appName: string,
  appDescription: string,
  titleSeparator: string
) => NavigationMapType;

export type CreateNavigationListType = (
  navigation: Record<string, string[]>,
  metaDataMap: Record<string, IMetaData>
) => NavigationListType;
