import { PageLayout } from '@common';
import { RootState, usePageHelper } from '@store';
import { IMetaData, IPage } from '@types';
import type { NextPage } from 'next';
import { useSelector } from 'react-redux';

import { config, Navigation } from '../data';

const Contact: NextPage<IPage> = ({ navigation, config: appConfig }) => {
  usePageHelper(navigation, appConfig);
  const navigationItem = useSelector<RootState, Record<string, IMetaData>>(
    (state) => state.app.navigationMap
  );
  return <PageLayout metaData={navigationItem['Contact']}>This is Contact</PageLayout>;
};

Contact.getInitialProps = () => {
  return {
    navigation: Navigation,
    config,
  };
};

export default Contact;
