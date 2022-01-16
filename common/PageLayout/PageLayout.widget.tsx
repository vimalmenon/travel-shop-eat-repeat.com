import { Container, MetaData } from '@common';

import { Footer } from './Footer';
import { Header } from './Header';
import { IPageLayout } from './PageLayout';

export const PageLayout: React.FC<IPageLayout> = ({ children, metaData }) => {
  return (
    <Container component="main" flex="1" flexDirection="column">
      <Header />
      <MetaData metaData={metaData} />
      <Container component="section" flex="1" flexDirection="column">
        {children}
      </Container>
      <Footer />
    </Container>
  );
};
