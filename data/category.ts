import { ICategory } from '@types';

export const JewelryCategory: ICategory = {
  name: 'jewelry',
  value: 'Jewelry',
};

export const DecorativeCategory: ICategory = {
  name: 'decorative',
  value: 'Decorative',
};

export const ShowPieceCategory: ICategory = {
  name: 'show-piece',
  value: 'Show Piece',
};

export const Categories: ICategory[] = [JewelryCategory, DecorativeCategory, ShowPieceCategory];
