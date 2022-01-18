import { Container } from '@common';

import { IItemProps } from './Item';

export const Item: React.FC<IItemProps> = ({ item }) => {
  return (
    <Container
      flex="0 0 350px"
      flexDirection="column"
      sx={{ border: '1px solid gray' }}
      margin={[0.5]}
    >
      <div>{item.name}</div>
      <div>{item.title}</div>
      <div>{item.description}</div>
    </Container>
  );
};
