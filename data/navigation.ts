import { INavigationApi } from '@types';

const PageNotFoundNavigation: INavigationApi = {
  id: -1,
  name: 'PageNotFound',
  label: 'Page Not Found',
  url: '*',
  title: 'Page Not Found',
  description: 'Page was not found',
};

const HomeNavigation: INavigationApi = {
  id: 0,
  name: 'Home',
  label: 'Home',
  url: '/',
};

const ContactNavigation: INavigationApi = {
  id: 1,
  name: 'Contact',
  label: 'Contact',
  url: '/contact',
  title: 'Contact',
  description: 'Contact',
  parentNavigation: 0,
};

const PrivacyPolicyNavigation: INavigationApi = {
  id: 2,
  name: 'PrivacyPolicy',
  label: 'Privacy Policy',
  url: '/privacy-policy',
  title: 'Privacy Policy',
  description: 'This is Privacy policy page',
  parentNavigation: 0,
};
export const Navigation: INavigationApi[] = [
  HomeNavigation,
  PageNotFoundNavigation,
  ContactNavigation,
  PrivacyPolicyNavigation,
];

export const MainNavigation: string[] = ['Home', 'Contact'];
export const FooterNavigation: string[] = ['Home', 'Contact', 'PrivacyPolicy'];

export const NavigationList: Record<string, string[]> = {
  MainNavigation,
  FooterNavigation,
};
