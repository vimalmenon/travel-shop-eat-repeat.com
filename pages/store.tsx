import { PageLayout } from '@common';
import { RootState, usePageHelper } from '@store';
import { IMetaData, IPage } from '@types';
import type { NextPage } from 'next';
import { useSelector } from 'react-redux';

import { config, Navigation, NavigationList } from '../data';

const Shop: NextPage<IPage> = ({ navigation, config: appConfig, navigationList }) => {
  usePageHelper(navigation, appConfig, navigationList);
  const metaDataMap = useSelector<RootState, Record<string, IMetaData>>(
    (state) => state.app.metaDataMap
  );
  return (
    <PageLayout metaData={metaDataMap['Contact']}>
      <h1>This is Shopping page</h1>
    </PageLayout>
  );
};

Shop.getInitialProps = () => {
  return {
    navigation: Navigation,
    navigationList: NavigationList,

    config,
  };
};

export default Shop;
