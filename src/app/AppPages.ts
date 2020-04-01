import {
  homeOutline,
  addOutline,
  cogOutline,
  albumsOutline,
  logOut
} from "ionicons/icons";
import { AppPage } from "./AppPage";

export function appPages() {
  const authenticated: AppPage[] = [
    { url: '/tabs/tab1', label: 'Tab 1 Auth', icon: homeOutline },
    { url: '/tabs/tab2', label: 'Tab 2 Auth', icon: addOutline },
    { url: '/tabs/tab3', label: 'Tab 3 Auth', icon: cogOutline },
    { url: '/logout', label: 'Logout', icon: logOut }
  ];

  const unauthenticated: AppPage[] = [
    { url: '/tabs/tab1', label: 'Tab 1 Unauth', icon: homeOutline },
    { url: '/tabs/tab2', label: 'Tab 2 Unauth', icon: albumsOutline },
    { url: '/tabs/tab3', label: 'Tab 3 Unauth', icon: cogOutline },
  ];

  const pages: any = Object.assign({}, {
    authenticated,
    unauthenticated,
  });

  return pages;
}
