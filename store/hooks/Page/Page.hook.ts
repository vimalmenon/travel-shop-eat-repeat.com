import { appActions, RootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../app/app';
import { UsePageHelperType } from './Page';
import { getNavigationMap } from './Page.service';

export const usePageHelper: UsePageHelperType = (navigation, config) => {
  const dispatch = useDispatch();
  const { appName, appDescription, titleSeparator } = useSelector<RootState, AppState>(
    (state) => state.app
  );
  React.useEffect(() => {
    dispatch(appActions.setNavigation(navigation));
    dispatch(appActions.setConfig(config));
    dispatch(
      appActions.setNavigationMap(
        getNavigationMap(navigation, appName, appDescription, titleSeparator)
      )
    );
  }, [appName, appDescription, titleSeparator]);
};
