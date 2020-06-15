import {
  homeOutline,
  addOutline,
  cogOutline,
  albumsOutline,
  logOut,
  peopleOutline,
  logInOutline
} from 'ionicons/icons';
import { AppPage } from '../models/AppPage';
import * as ROUTES from '../constants/Routes'

export function appPages() {
  const authenticated: AppPage[] = [
    { level: 'Menu', url: ROUTES.TAB1, label: 'Tab 1 Auth', icon: homeOutline },
    { level: 'Menu', url: ROUTES.TAB2, label: 'Tab 2 Auth', icon: addOutline },
    { level: 'Menu', url: ROUTES.TAB3, label: 'Tab 3 Auth', icon: cogOutline },
    { level: 'Settings', url: ROUTES.ACCOUNT, label: 'Account', icon: peopleOutline },
    { level: '', url: ROUTES.LOGOUT, label: 'Logout', icon: logOut }
  ];

  const unauthenticated: AppPage[] = [
    { level: 'Menu', url: ROUTES.TAB1, label: 'Tab 1 Unauth', icon: homeOutline },
    { level: 'Menu', url: ROUTES.TAB2, label: 'Tab 2 Unauth', icon: albumsOutline },
    { level: 'Menu', url: ROUTES.TAB3, label: 'Tab 3 Unauth', icon: cogOutline },
    { level: 'Menu', url: ROUTES.LOGIN, label: 'Login', icon: logInOutline },
  ];

  const pages: any = Object.assign({}, {
    authenticated,
    unauthenticated,
  });

  return pages;
}
