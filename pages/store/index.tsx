import { PageLayout } from '@common';
import { Categories, config, Items, Navigation, NavigationList, Tags } from '@data';
import { StorePartial } from '@partials';
import { IPageProps, IStorePage } from '@types';
import { ProcessForPageLayout } from '@utilities';
import type { NextPage } from 'next';

const Shop: NextPage<IPageProps & IStorePage> = ({
  metaDataMap,
  navigationList,
  footerVersion,
  categories,
  tags,
  appName,
  items,
}) => {
  return (
    <PageLayout
      metaData={metaDataMap['Store']}
      navigationList={navigationList}
      footerVersion={footerVersion}
      appName={appName}
    >
      <StorePartial categories={categories} tags={tags} items={items} />
    </PageLayout>
  );
};

Shop.getInitialProps = () => {
  return {
    ...ProcessForPageLayout(Navigation, config, NavigationList),
    categories: Categories,
    tags: Tags,
    items: Items,
  };
};

export default Shop;
