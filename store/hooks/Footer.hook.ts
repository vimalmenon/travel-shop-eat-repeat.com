import { useSelector } from 'react-redux';

import { AppState } from '../app/app';
import { RootState } from '../store';

export const useFooter = () => {
  useSelector<RootState, AppState>((state) => state.app);
};
