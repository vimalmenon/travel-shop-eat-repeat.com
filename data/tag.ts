import { ITag } from '@types';

import { JewelryCategory } from './category';

export const EaringTag: ITag = {
  name: 'earning',
  value: 'Earning',
  category: JewelryCategory,
};

export const ChainTag: ITag = {
  name: 'chain',
  value: 'Chain',
  category: JewelryCategory,
};

export const RingTag: ITag = {
  name: 'ring',
  value: 'Ring',
  category: JewelryCategory,
};

export const BraceletTag: ITag = {
  name: 'bracelet',
  value: 'Bracelet',
  category: JewelryCategory,
};

export const BangleTag: ITag = {
  name: 'bangle',
  value: 'Bangle',
  category: JewelryCategory,
};

export const Tags: ITag[] = [EaringTag, ChainTag, RingTag, BraceletTag, BangleTag];
