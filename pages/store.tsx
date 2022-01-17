import { PageLayout } from '@common';
import { Categories, config, Navigation, NavigationList, Tags } from '@data';
import { StorePartial } from '@partials';
import { IPageProps, IStorePage } from '@types';
import { ProcessForPageLayout } from '@utilities';
import type { NextPage } from 'next';

const Shop: NextPage<IPageProps & IStorePage> = ({
  metaDataMap,
  navigationList,
  categories,
  tags,
}) => {
  return (
    <PageLayout metaData={metaDataMap['Store']} navigationList={navigationList}>
      <StorePartial categories={categories} tags={tags} />
    </PageLayout>
  );
};

Shop.getInitialProps = () => {
  return {
    ...ProcessForPageLayout(Navigation, config, NavigationList),
    categories: Categories,
    tags: Tags,
  };
};

export default Shop;
