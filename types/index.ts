export interface INavigationApi {
  id: number;
  name: string;
  label: string;
  url: string;
  title?: string;
  description?: string;
  parentNavigation?: number;
}

export interface IMetaData {
  name: string;
  titles: string[];
  description: string;
  titleSeparator: string;
}

export interface IConfig {
  appName: string;
  appDescription: string;
  version: string;
  mode: 'D' | 'A' | 'B';
  titleSeparator: string;
}

export interface IPage {
  navigation: INavigationApi[];
  config: IConfig;
}
