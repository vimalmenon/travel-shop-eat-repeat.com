import { appActions, RootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../app/app';
import { UsePageHelperType } from './Page';
import { createMetaDataMap, createNavigationList } from './Page.service';

export const usePageHelper: UsePageHelperType = (navigation, config, navigationList) => {
  const dispatch = useDispatch();
  const { appName, appDescription, titleSeparator, metaDataMap } = useSelector<RootState, AppState>(
    (state) => state.app
  );
  React.useEffect(() => {
    dispatch(appActions.setNavigation(navigation));
    dispatch(appActions.setConfig(config));
    dispatch(
      appActions.setMetaDataMap(
        createMetaDataMap(navigation, appName, appDescription, titleSeparator)
      )
    );
  }, [appName, appDescription, titleSeparator]);
  React.useEffect(() => {
    if (Object.keys(metaDataMap).length) {
      dispatch(appActions.setNavigationList(createNavigationList(navigationList, metaDataMap)));
    }
  }, [metaDataMap]);
};
