import '../styles/globals.css';

import { store } from '@store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
