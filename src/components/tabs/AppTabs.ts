import {
  homeOutline,
  addOutline,
  cogOutline,
  albumsOutline,
} from "ionicons/icons";
import { AppPage } from "../../app/AppPage";
import * as ROUTES from '../../constants/Routes'

export function appTabs() {
  const authenticated: AppPage[] = [
    { url: ROUTES.TAB1, label: 'Tab 1 Auth', icon: homeOutline },
    { url: ROUTES.TAB2, label: 'Tab 2 Auth', icon: addOutline },
    { url: ROUTES.TAB3, label: 'Tab 3 Auth', icon: cogOutline },
  ];

  const unauthenticated: AppPage[] = [
    { url: ROUTES.TAB1, label: 'Tab 1 Unauth', icon: homeOutline },
    { url: ROUTES.TAB2, label: 'Tab 2 Unauth', icon: albumsOutline },
    { url: ROUTES.TAB3, label: 'Tab 3 Unauth', icon: cogOutline },
  ];

  const tabs: any = Object.assign({}, {
    authenticated,
    unauthenticated,
  });

  return tabs;
}
