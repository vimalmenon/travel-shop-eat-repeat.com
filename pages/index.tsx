import { PageLayout } from '@common';
import { HomePage } from '@partials';
import { usePageHelper } from '@store';
import { IPage } from '@types';
import type { NextPage } from 'next';

import { config, Navigation } from '../data';

const Home: NextPage<IPage> = ({ navigation, config: appConfig }) => {
  usePageHelper(navigation, appConfig);
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
};

Home.getInitialProps = () => {
  return {
    navigation: Navigation,
    config,
  };
};
export default Home;
