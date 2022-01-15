import '../styles/globals.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { store } from '@store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import createEmotionCache from '../config/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: React.FC<MyAppProps> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CacheProvider>
  );
};

export default MyApp;
