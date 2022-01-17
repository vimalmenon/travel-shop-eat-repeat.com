import { Container } from '@common';

import { SidePanel } from './SidePanel';
import { IStorePartial } from './StorePartial';

export const StorePartial: React.FC<IStorePartial> = ({ categories, tags }) => {
  return (
    <Container flexDirection="column">
      <Container>
        <h1>What is in store for us</h1>
      </Container>
      <Container>
        <SidePanel categories={categories} tags={tags} />
        <Container component="section">
          {categories.map((category, key) => {
            return (
              <Container key={key} flexDirection="column">
                <Container>
                  <h2>{category.value}</h2>
                </Container>
                <Container>
                  {tags.map((tag, innerKey) => {
                    if (tag.category.name === category.name) {
                      return (
                        <Container flex="1" key={innerKey}>
                          {tag.value}
                        </Container>
                      );
                    }
                  })}
                </Container>
              </Container>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
};
