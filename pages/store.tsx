import { PageLayout } from '@common';
import { Categories, config, Navigation, NavigationList, Tags } from '@data';
import { StorePartial } from '@partials';
import { RootState, usePageHelper } from '@store';
import { IMetaData, IPage, IStorePage } from '@types';
import type { NextPage } from 'next';
import { useSelector } from 'react-redux';

const Shop: NextPage<IPage & IStorePage> = ({
  navigation,
  config: appConfig,
  navigationList,
  categories,
  tags,
}) => {
  usePageHelper(navigation, appConfig, navigationList);
  const metaDataMap = useSelector<RootState, Record<string, IMetaData>>(
    (state) => state.app.metaDataMap
  );
  return (
    <PageLayout metaData={metaDataMap['Store']}>
      <StorePartial categories={categories} tags={tags} />
    </PageLayout>
  );
};

Shop.getInitialProps = () => {
  return {
    navigation: Navigation,
    navigationList: NavigationList,
    categories: Categories,
    tags: Tags,
    config,
  };
};

export default Shop;
