import { PageLayout } from '@common';
import { HomePage } from '@partials';
import { usePageHelper } from '@store';
import { IPage } from '@types';
import type { NextPage } from 'next';

import { Navigation } from '../data';

const Home: NextPage<IPage> = ({ navigation }) => {
  usePageHelper(navigation);
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
};

Home.getInitialProps = () => {
  return {
    navigation: Navigation,
  };
};
export default Home;
