import { Container } from '@common';

import { ISidePanel } from './SidePanel';

export const SidePanel: React.FC<ISidePanel> = ({ categories }) => {
  return (
    <Container
      component="aside"
      flex="0 0 300px"
      sx={{ border: '1px solid gray' }}
      flexDirection="column"
      padding={[1]}
      margin={[1]}
    >
      {categories.map((category, key) => {
        return <div key={key}>{category.value}</div>;
      })}
    </Container>
  );
};
