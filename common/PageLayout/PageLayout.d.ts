import { IMetaData } from '@types';

export interface IPageLayoutProps {
  metaData: IMetaData;
  navigationList: Record<string, IMetaData[]>;
}
