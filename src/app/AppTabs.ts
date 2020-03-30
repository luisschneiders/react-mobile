import {
  homeOutline,
  addOutline,
  cogOutline,
  albumsOutline
} from "ionicons/icons";

export interface ITab {
  url: string;
  label: string;
  icon: any
}

export function appTabs() {
  const authenticated: ITab[] = [
    {
      url: '/page1',
      label: 'Page 1',
      icon: homeOutline
    },
    {
      url: '/page2',
      label: 'Page 2',
      icon: addOutline
    },
    {
      url: '/settings',
      label: 'Settings',
      icon: cogOutline
    },
  ];

  const unauthenticated: ITab[] = [
    {
      url: '/home',
      label: 'Home',
      icon: homeOutline
    },
    {
      url: '/tab1',
      label: 'Tab 1',
      icon: albumsOutline
    },
    {
      url: '/tab2',
      label: 'Tab 2',
      icon: cogOutline
    },
  ];

  const tabs: any = Object.assign({}, {
    authenticated,
    unauthenticated,
  });

  return tabs;
}
