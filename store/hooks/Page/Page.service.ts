import { GetNavigationMapType, NavigationMapType } from './Page';

export const getNavigationMap: GetNavigationMapType = (navigation, appName, appDescription) => {
  const navigationMap: NavigationMapType = {};

  navigation.forEach((nav) => {
    const titles = nav.title ? [nav.title, appName] : [appName];
    navigationMap[nav.name] = {
      name: nav.name,
      titles,
      description: nav.description || appDescription,
    };
  });
  return navigationMap;
};
