import { PageLayout } from '@common';
import { IPageProps } from '@types';
import { ProcessForPageLayout } from '@utilities';
import type { NextPage } from 'next';

import { config, Navigation, NavigationList } from '../data';

const PrivacyPolicy: NextPage<IPageProps> = ({
  metaDataMap,
  navigationList,
  footerVersion,
  appName,
}) => {
  return (
    <PageLayout
      metaData={metaDataMap['Contact']}
      navigationList={navigationList}
      footerVersion={footerVersion}
      appName={appName}
    >
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
