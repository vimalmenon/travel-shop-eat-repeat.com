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
  url: string;
  label: string;
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
  navigationList: Record<string, string[]>;
}

export interface ICategory {
  name: string;
  value: string;
}

export interface ITag {
  name: string;
  value: string;
}

export interface IJewelryItem {
  name: string;
  description: string;
  title: string;
  price: string;
  tags: ITag[];
  images: string[];
  category: ICategory;
}
