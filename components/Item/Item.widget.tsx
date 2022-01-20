import { Container } from '@common';
import Paper from '@mui/material/Paper';

import { IItemProps } from './Item';

export const Item: React.FC<IItemProps> = ({ item }) => {
  return (
    <Container
      component={Paper}
      flex="0 0 350px"
      flexDirection="column"
      margin={[1]}
      padding={[1]}
      elevation={3}
    >
      <div>{item.name}</div>
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>
        <span>Price:</span>
        <span>{item.price}</span>
      </div>
    </Container>
  );
};
