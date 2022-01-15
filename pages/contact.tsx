import { PageLayout } from '@common';
import { usePageHelper } from '@store';
import { IPage } from '@types';
import type { NextPage } from 'next';

import { Navigation } from '../data';

const Contact: NextPage<IPage> = ({ navigation }) => {
  usePageHelper(navigation);
  return <PageLayout>This is Contact</PageLayout>;
};

Contact.getInitialProps = () => {
  return {
    navigation: Navigation,
  };
};

export default Contact;
