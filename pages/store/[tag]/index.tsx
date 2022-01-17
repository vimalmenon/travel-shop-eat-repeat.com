import { PageLayout } from '@common';
import { Categories, config, Navigation, NavigationList, Tags } from '@data';
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
}) => {
  return (
    <PageLayout
      metaData={metaDataMap['Store']}
      navigationList={navigationList}
      footerVersion={footerVersion}
      appName={appName}
    >
      <StorePartial categories={categories} tags={tags} />
      <div>this is tag</div>
    </PageLayout>
  );
};

Tag.getInitialProps = () => {
  return {
    ...ProcessForPageLayout(Navigation, config, NavigationList),
    categories: Categories,
    tags: Tags,
  };
};

export default Tag;
