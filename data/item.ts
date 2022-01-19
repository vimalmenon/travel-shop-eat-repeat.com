import { IItem } from '@types';

import { EaringTag } from './tag';

export const GenerateItems = [
  'some',
  'test',
  'read',
  'other',
  'value',
  'stop',
  'another',
  'again',
].map<IItem>((value) => {
  return {
    name: `item-${value}`,
    label: `Item ${value}`,
    description: `This is item ${value}`,
    title: `Item ${value}`,
    price: 15,
    tags: [EaringTag],
    images: [],
    likes: 0,
    clicks: 0,
  };
});

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

export const ItemThree: IItem = {
  name: 'item-three',
  label: 'Item Three',
  description: 'This is item three',
  title: 'Item Three',
  price: 60,
  tags: [EaringTag],
  images: [],
  likes: 0,
  clicks: 0,
};

export const Items = [ItemOne, ItemTwo, ItemThree, ...GenerateItems];
