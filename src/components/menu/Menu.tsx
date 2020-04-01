import React from "react";
import { setDarkMode } from "../../data/user/user.actions"
import {
  RouteComponentProps,
  useLocation,
  withRouter
} from "react-router"
import {
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonToggle } from "@ionic/react";
import {
  moonOutline,
  peopleOutline
} from "ionicons/icons";
import { connect } from "../../data/connect";
import { appPages } from "../../app/AppPages";
import { AppPage } from "../../app/AppPage";

interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
  menuEnabled: boolean;
}

interface DispatchProps {
  setDarkMode: typeof setDarkMode
}

interface MenuProps extends RouteComponentProps, StateProps, DispatchProps {}

const Menu: React.FC<MenuProps> = ({darkMode, history, isAuthenticated, setDarkMode, menuEnabled}) => {
  const location = useLocation();

  function renderMenuItems(pages: AppPage[]) {
    return pages
      .filter(route => !!route.url)
      .map((page) => (
        <IonMenuToggle key={page.label} auto-hide="false">
          <IonItem detail={false} routerLink={page.url} routerDirection="none" className={location.pathname.startsWith(page.url) ? 'selected' : undefined}>
            <IonIcon slot="start" icon={page.icon} />
            <IonLabel>{page.label}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu type="overlay" disabled={!menuEnabled} contentId="main">
      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonListHeader>Menu</IonListHeader>
          {isAuthenticated ? renderMenuItems(appPages().authenticated) : renderMenuItems(appPages().unauthenticated)}
        </IonList>
        <IonList lines="none">
          <IonListHeader>Appearance</IonListHeader>
          <IonItem>
            <IonIcon slot="start" icon={moonOutline}></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
          </IonItem>
        </IonList>
        <IonList lines="none">
          <IonListHeader>Settings</IonListHeader>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink='/account' routerDirection="none" className="selected">
              <IonIcon slot="start" icon={peopleOutline} />
              <IonLabel>Account</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    isAuthenticated: state.user.isLoggedin,
    menuEnabled: state.data.menuEnabled
  }),
  mapDispatchToProps: ({
    setDarkMode
  }),
  component: withRouter(Menu)
});
