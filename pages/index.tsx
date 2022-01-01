import { HomePage } from '@partials';
import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  );
};

export default Home;
