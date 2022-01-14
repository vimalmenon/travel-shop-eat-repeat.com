import { INavigation } from '@types';

const PageNotFoundNavigation: INavigation = {
  id: -1,
  name: 'Page Not Found',
  label: 'PageNotFoundNavigation',
  url: '*',
  title: 'Page Not Found',
  description: 'Page was not found',
};

const HomeNavigation: INavigation = {
  id: 0,
  name: 'Home',
  label: 'HomeNavigation',
  url: '/',
};

const ContactNavigation: INavigation = {
  id: 1,
  name: 'Contact',
  label: 'ContactNavigation',
  url: '/contact',
  title: 'Contact',
  description: 'Contact',
};

export const Navigation: INavigation[] = [
  HomeNavigation,
  PageNotFoundNavigation,
  ContactNavigation,
];

export const MainNavigation: string[] = ['HomeNavigation', 'ContactNavigation'];
export const FooterNavigation: string[] = ['HomeNavigation'];
