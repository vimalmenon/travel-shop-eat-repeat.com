import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from './app/app.slice';
import { RootState } from './store';

export const store = configureStore<RootState>({
  reducer: {
    app: appSlice.reducer,
  },
});
