import { useSelector } from 'react-redux';

import { AppState } from '../../app/app';
import { RootState } from '../../store';
import { UseFooterType } from './Footer';

export const useFooterHelper: UseFooterType = () => {
  const { version, mode } = useSelector<RootState, AppState>((state) => state.app);
  return {
    versionNumber: `${version}-${mode}`,
  };
};
