import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  Route,
  Redirect
} from "react-router";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Tab1 from "../pages/tab1/Tab1";
import Tab2 from "../pages/tab2/Tab2";
import Tab3 from "../pages/tab3/Tab3";
import { appTabs, AppTab } from "./AppTabs";

interface ContainerProps {
  isAuthenticated: boolean;
}

const AppRouting: React.FC<ContainerProps> = ({isAuthenticated}) => {

  function renderTabItems(tabs: AppTab[]) {
    return tabs
      .filter(route => !!route.url)
      .map((tab, index) => (
        <IonTabButton tab={`tab${index+1}`} key={index} href={tab.url}>
          <IonIcon icon={tab.icon} />
          <IonLabel>{tab.label}</IonLabel>
        </IonTabButton>
      ));
  }

  return (
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path='/home' component={Home} exact={true} />
        <Route path='/login' component={Login} exact={true} />
        <Route path='/register' component={Register} exact={true} />
        <Route path='/page1' component={Tab1} exact={true} />
        <Route path='/page2' component={Tab2} exact={true} />
        <Route path='/tab1' component={Tab1} exact={true} />
        <Route path='/tab2' component={Tab2} exact={true} />
        <Route path='/settings' component={Tab3} />
        <Route path='/' render={() => <Redirect to='/home' />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        {isAuthenticated ? renderTabItems(appTabs().authenticated) : renderTabItems(appTabs().unauthenticated)}
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
  );
}

export default AppRouting;
