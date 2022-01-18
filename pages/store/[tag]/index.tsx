import { PageLayout } from '@common';
import { Categories, config, Items, Navigation, NavigationList, Tags } from '@data';
import { StorePartial } from '@partials';
import { IPageProps, IStorePage } from '@types';
import { ProcessForPageLayout } from '@utilities';
import type { NextPage } from 'next';

const Tag: NextPage<IPageProps & IStorePage> = ({
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
      <div>this is tag</div>
    </PageLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { tag: 'earning' } },
      { params: { tag: 'chain' } },
      { params: { tag: 'ring' } },
      { params: { tag: 'bracelet' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      ...ProcessForPageLayout(Navigation, config, NavigationList),
      categories: Categories,
      tags: Tags,
      items: Items,
    },
  };
}
export default Tag;
