import { appActions } from '@store';
import { useDispatch } from 'react-redux';

import { UsePageHelperType } from './Page';

export const usePageHelper: UsePageHelperType = (navigation) => {
  const dispatch = useDispatch();
  dispatch(appActions.setNavigation(navigation));
};
