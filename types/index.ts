export interface INavigation {
  id: number;
  name: string;
  label: string;
  url: string;
  title?: string;
  description?: string;
}

export interface IConfig {
  appName: string;
  appDescription: string;
  version: string;
  mode: 'D' | 'A' | 'B';
  titleSeparator: string;
}

export interface IPage {
  navigation: INavigation[];
}
