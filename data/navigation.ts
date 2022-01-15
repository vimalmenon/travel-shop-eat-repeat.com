import { INavigationApi } from '@types';

const PageNotFoundNavigation: INavigationApi = {
  id: -1,
  name: 'Page Not Found',
  label: 'PageNotFoundNavigation',
  url: '*',
  title: 'Page Not Found',
  description: 'Page was not found',
};

const HomeNavigation: INavigationApi = {
  id: 0,
  name: 'Home',
  label: 'HomeNavigation',
  url: '/',
};

const ContactNavigation: INavigationApi = {
  id: 1,
  name: 'Contact',
  label: 'ContactNavigation',
  url: '/contact',
  title: 'Contact',
  description: 'Contact',
  parentNavigation: 0,
};

export const Navigation: INavigationApi[] = [
  HomeNavigation,
  PageNotFoundNavigation,
  ContactNavigation,
];

export const MainNavigation: string[] = ['HomeNavigation', 'ContactNavigation'];
export const FooterNavigation: string[] = ['HomeNavigation'];
