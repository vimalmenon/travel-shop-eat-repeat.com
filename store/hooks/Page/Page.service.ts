import {
  CreateMetaDataMapType,
  CreateNavigationListType,
  NavigationListType,
  NavigationMapType,
} from './Page';

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
