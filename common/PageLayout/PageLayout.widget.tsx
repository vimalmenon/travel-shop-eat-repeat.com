import { MetaData } from '@common';

import { Footer } from './Footer';
import { Header } from './Header';
import { IPageLayout } from './PageLayout';

export const PageLayout: React.FC<IPageLayout> = ({ children, metaData }) => {
  return (
    <main className="flex flex-col">
      <Header />
      <MetaData metaData={metaData} />
      <section className="flex text-sm py-1 px-2">{children}</section>
      <Footer />
    </main>
  );
};
