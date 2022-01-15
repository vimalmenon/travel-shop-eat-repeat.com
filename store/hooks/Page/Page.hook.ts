import { appActions, RootState } from '@store';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../app/app';
import { UsePageHelperType } from './Page';
import { getNavigationMap } from './Page.service';

export const usePageHelper: UsePageHelperType = (navigation, config) => {
  const dispatch = useDispatch();
  const { appName, appDescription } = useSelector<RootState, AppState>((state) => state.app);
  getNavigationMap(navigation, appName, appDescription);
  dispatch(appActions.setNavigation(navigation));
  dispatch(appActions.setConfig(config));
};
