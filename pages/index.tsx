import { PageLayout } from '@common';
import { config, Navigation, NavigationList } from '@data';
import { HomePage } from '@partials';
import { IPageProps } from '@types';
import { ProcessForPageLayout } from '@utilities';
import type { NextPage } from 'next';

const Home: NextPage<IPageProps> = ({ metaDataMap, navigationList }) => {
  return (
    <PageLayout metaData={metaDataMap['Home']} navigationList={navigationList}>
      <HomePage />
    </PageLayout>
  );
};

Home.getInitialProps = () => {
  return {
    ...ProcessForPageLayout(Navigation, config, NavigationList),
  };
};
export default Home;
