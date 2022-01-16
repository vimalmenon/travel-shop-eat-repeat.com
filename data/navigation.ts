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

const StopNavigation: INavigationApi = {
  id: 2,
  name: 'Shop',
  label: 'Shop',
  url: '/shop',
  title: 'Shop',
  description: 'This is shopping page',
  parentNavigation: 0,
};

const ContactNavigation: INavigationApi = {
  id: 3,
  name: 'Contact',
  label: 'Contact',
  url: '/contact',
  title: 'Contact',
  description: 'Contact',
  parentNavigation: 0,
};

const PrivacyPolicyNavigation: INavigationApi = {
  id: 4,
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
  StopNavigation,
];

export const MainNavigation: string[] = ['Home', 'Shop', 'Contact'];
export const FooterNavigation: string[] = ['Home', 'Contact', 'PrivacyPolicy'];

export const NavigationList: Record<string, string[]> = {
  MainNavigation,
  FooterNavigation,
};
