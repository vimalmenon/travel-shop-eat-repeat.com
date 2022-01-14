export interface INavigation {
  id: number;
  name: string;
  url: string;
  title?: string;
  description?: string;
}

export interface IConfig {
  version: string;
  mode?: 'D' | 'A' | 'B';
}
