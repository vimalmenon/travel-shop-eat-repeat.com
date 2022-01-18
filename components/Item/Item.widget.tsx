import { IItemProps } from './Item';

export const Item: React.FC<IItemProps> = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.title}</div>
      <div>{item.description}</div>
    </div>
  );
};
