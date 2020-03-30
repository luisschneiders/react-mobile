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
import { appTabs, ITab } from "./AppTabs";

interface ContainerProps {
  isAuthenticated: boolean;
}

const AppRouting: React.FC<ContainerProps> = ({isAuthenticated}) => {
  let tabs: ITab[] = [];

  if (isAuthenticated) {
    tabs = appTabs().authenticated;
  } else {
    tabs = appTabs().unauthenticated;
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
        <IonTabButton tab='tab1' href={tabs[0].url}>
          <IonIcon icon={tabs[0].icon} />
          <IonLabel>{tabs[0].label}</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab2' href={tabs[1].url}>
          <IonIcon icon={tabs[1].icon} />
          <IonLabel>{tabs[1].label}</IonLabel>
        </IonTabButton>
        <IonTabButton tab='tab3' href={tabs[2].url}>
          <IonIcon icon={tabs[2].icon} />
          <IonLabel>{tabs[2].label}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
  );
}

export default AppRouting;
