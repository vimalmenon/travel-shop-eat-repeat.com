import { Container } from '@common';

import { IMainPanel } from './MainPanel';

export const MainPanel: React.FC<IMainPanel> = ({ items }) => {
  return (
    <Container component="section" flexDirection="column">
      <Container flex="0 0 auto">
        <h1>What is in store for us</h1>
      </Container>
      <Container>
        {items.map((item, key) => {
          return (
            <div key={key}>
              <div>{item.name}</div>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
          );
        })}
      </Container>
    </Container>
  );
};
