import { PageLayout } from '@common';
import { HomePage } from '@partials';
import { RootState, usePageHelper } from '@store';
import { IMetaData, IPage } from '@types';
import type { NextPage } from 'next';
import { useSelector } from 'react-redux';

import { config, Navigation, NavigationList } from '../data';

const Home: NextPage<IPage> = ({ navigation, config: appConfig, navigationList }) => {
  usePageHelper(navigation, appConfig, navigationList);
  const metaDataMap = useSelector<RootState, Record<string, IMetaData>>(
    (state) => state.app.metaDataMap
  );
  return (
    <PageLayout metaData={metaDataMap['Home']}>
      <HomePage />
    </PageLayout>
  );
};

Home.getInitialProps = () => {
  return {
    navigation: Navigation,
    navigationList: NavigationList,
    config,
  };
};
export default Home;
