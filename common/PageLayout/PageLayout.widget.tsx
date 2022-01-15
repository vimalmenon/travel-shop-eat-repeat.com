import { MetaData } from '@common';

import { Footer } from './Footer';
import { Header } from './Header';
import { IPageLayout } from './PageLayout';

export const PageLayout: React.FC<IPageLayout> = ({ children, metaData }) => {
  return (
    <main>
      <Header />
      <MetaData metaData={metaData} />
      <section>{children}</section>
      <Footer />
    </main>
  );
};
