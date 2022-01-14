import { PageLayout } from '@common';
import { HomePage } from '@partials';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
};

export default Home;
