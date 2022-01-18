import { Container } from '@common';
import { Item } from '@components';
import { IItem } from '@types';
import React from 'react';

import { IMainPanel } from './MainPanel';

export const MainPanel: React.FC<IMainPanel> = ({ items: propsItem }) => {
  const [items] = React.useState<IItem[]>(propsItem);
  return (
    <Container component="section" flexDirection="column">
      <Container flex="0 0 auto">
        <h1>What is in store for us</h1>
      </Container>
      <Container>
        {items.map((item, key) => {
          return <Item key={key} item={item} />;
        })}
      </Container>
    </Container>
  );
};
