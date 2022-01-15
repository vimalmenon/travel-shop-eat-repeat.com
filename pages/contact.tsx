import { PageLayout } from '@common';
import { usePageHelper } from '@store';
import { IPage } from '@types';
import type { NextPage } from 'next';

import { config, Navigation } from '../data';

const Contact: NextPage<IPage> = ({ navigation, config: appConfig }) => {
  usePageHelper(navigation, appConfig);
  return <PageLayout>This is Contact</PageLayout>;
};

Contact.getInitialProps = () => {
  return {
    navigation: Navigation,
    config,
  };
};

export default Contact;
