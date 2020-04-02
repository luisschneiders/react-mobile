import {
  homeOutline,
  addOutline,
  cogOutline,
  albumsOutline,
  logOut,
  peopleOutline
} from "ionicons/icons";
import { AppPage } from "./AppPage";

export function appPages() {
  const authenticated: AppPage[] = [
    { level: 'Menu', url: '/tabs/tab1', label: 'Tab 1 Auth', icon: homeOutline },
    { level: 'Menu', url: '/tabs/tab2', label: 'Tab 2 Auth', icon: addOutline },
    { level: 'Menu', url: '/tabs/tab3', label: 'Tab 3 Auth', icon: cogOutline },
    { level: 'Settings', url: '/account', label: 'Account', icon: peopleOutline },
    { level: '', url: '/logout', label: 'Logout', icon: logOut }
  ];

  const unauthenticated: AppPage[] = [
    { level: 'Menu', url: '/tabs/tab1', label: 'Tab 1 Unauth', icon: homeOutline },
    { level: 'Menu', url: '/tabs/tab2', label: 'Tab 2 Unauth', icon: albumsOutline },
    { level: 'Menu', url: '/tabs/tab3', label: 'Tab 3 Unauth', icon: cogOutline },
  ];

  const pages: any = Object.assign({}, {
    authenticated,
    unauthenticated,
  });

  return pages;
}
