import { ICategory, IItem, ITag } from '@types';

export interface IStorePartial {
  categories: ICategory[];
  tags: ITag[];
  items: IItem[];
}
