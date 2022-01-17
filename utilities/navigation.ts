import { CreateFooterValuesTypes, ProcessForPageLayoutType } from '@types';
import {
  CreateMetaDataMapType,
  CreateNavigationListType,
  NavigationListType,
  NavigationMapType,
} from 'store/hooks/Page/Page';

export const ProcessForPageLayout: ProcessForPageLayoutType = (
  navigation,
  config,
  navigationList
) => {
  const metaDataMap = createMetaDataMap(
    navigation,
    config.appName,
    config.appDescription,
    config.titleSeparator
  );
  const navigationListResult = createNavigationList(navigationList, metaDataMap);
  const footerVersion = createFooterValues(config);

  return {
    metaDataMap,
    navigationList: navigationListResult,
    footerVersion: footerVersion.versionNumber,
    appName: config.appName,
  };
};

export const createMetaDataMap: CreateMetaDataMapType = (
  navigation,
  appName,
  appDescription,
  titleSeparator
) => {
  const navigationMap: NavigationMapType = {};

  navigation.forEach((nav) => {
    const titles = nav.title ? [nav.title, appName] : [appName];
    navigationMap[nav.name] = {
      name: nav.name,
      url: nav.url,
      label: nav.label,
      titles,
      description: nav.description || appDescription,
      titleSeparator,
    };
  });
  return navigationMap;
};

export const createNavigationList: CreateNavigationListType = (navigation, metaDataMap) => {
  const navigationList: NavigationListType = {};
  Object.keys(navigation).forEach((name) => {
    navigation[name].forEach((item) => {
      navigationList[name] = navigationList[name] || [];
      navigationList[name].push(metaDataMap[item]);
    });
  });
  return navigationList;
};

export const createFooterValues: CreateFooterValuesTypes = (config) => {
  const { version, mode, appName } = config;
  return {
    versionNumber: `${version}-${mode}`,
    appName,
  };
};
