import { PageLayout } from '@common';
import { IPageProps } from '@types';
import { ProcessForPageLayout } from '@utilities';
import type { NextPage } from 'next';

import { config, Navigation, NavigationList } from '../data';

const PrivacyPolicy: NextPage<IPageProps> = ({ metaDataMap, navigationList }) => {
  return (
    <PageLayout metaData={metaDataMap['Contact']} navigationList={navigationList}>
      <h1>This is Privacy Policy</h1>
    </PageLayout>
  );
};

PrivacyPolicy.getInitialProps = () => {
  return {
    ...ProcessForPageLayout(Navigation, config, NavigationList),
  };
};

export default PrivacyPolicy;
