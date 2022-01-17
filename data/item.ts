import { IItem } from '@types';

import { EaringTag } from './tag';

export const ItemOne: IItem = {
  name: 'item-one',
  label: 'Item One',
  description: 'This is item one',
  title: 'Item One',
  price: 15,
  tags: [EaringTag],
  images: [],
  likes: 0,
  clicks: 0,
};

export const ItemTwo: IItem = {
  name: 'item-two',
  label: 'Item Two',
  description: 'This is item two',
  title: 'Item Two',
  price: 55,
  tags: [EaringTag],
  images: [],
  likes: 0,
  clicks: 0,
};

export const items = [ItemOne, ItemTwo];
