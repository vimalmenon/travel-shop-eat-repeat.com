import { PageLayout } from '@common';
import { IPageProps } from '@types';
import { ProcessForPageLayout } from '@utilities';
import type { NextPage } from 'next';

import { config, Navigation, NavigationList } from '../data';

const Contact: NextPage<IPageProps> = ({ navigationList, metaDataMap, footerVersion, appName }) => {
  return (
    <PageLayout
      metaData={metaDataMap['Contact']}
      navigationList={navigationList}
      footerVersion={footerVersion}
      appName={appName}
    >
      <h1>This is Contact</h1>
    </PageLayout>
  );
};

Contact.getInitialProps = () => {
  return {
    ...ProcessForPageLayout(Navigation, config, NavigationList),
  };
};

export default Contact;
