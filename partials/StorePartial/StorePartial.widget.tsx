import { Container } from '@common';

import { MainPanel } from './MainPanel';
import { SidePanel } from './SidePanel';
import { IStorePartial } from './StorePartial';

export const StorePartial: React.FC<IStorePartial> = ({ categories, tags, items }) => {
  return (
    <Container flexDirection="column">
      <Container>
        <SidePanel categories={categories} tags={tags} />
        <MainPanel items={items} />
      </Container>
    </Container>
  );
};
