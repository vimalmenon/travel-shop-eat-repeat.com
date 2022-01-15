import { PageLayout } from '@common';
import { IPage } from '@types';
import type { NextPage } from 'next';

import { Navigation } from '../data';

const Contact: NextPage<IPage> = () => {
  return <PageLayout>This is Contact</PageLayout>;
};

Contact.getInitialProps = () => {
  return {
    navigation: Navigation,
  };
};

export default Contact;
