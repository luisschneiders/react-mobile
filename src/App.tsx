import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  cogOutline,
  addOutline,
  briefcaseOutline 
} from 'ionicons/icons';
import Tab1 from './pages/tab1/Tab1';
import Tab2 from './pages/tab2/Tab2';
import Tab3 from './pages/tab3/Tab3';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path='/login' component={Login} exact={true} />
              <Route path='/register' component={Register} exact={true} />
              <Route path='/page1' component={Tab1} exact={true} />
              <Route path='/page2' component={Tab2} exact={true} />
              <Route path='/settings' component={Tab3} />
              <Route path='/' render={() => <Redirect to='/login' />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot='bottom'>
              <IonTabButton tab='tab1' href='/page1'>
                <IonIcon icon={briefcaseOutline} />
                <IonLabel>Page 1</IonLabel>
              </IonTabButton>
              <IonTabButton tab='tab2' href='/page2'>
                <IonIcon icon={addOutline} />
                <IonLabel>Page 2</IonLabel>
              </IonTabButton>
              <IonTabButton tab='tab3' href='/settings'>
                <IonIcon icon={cogOutline} />
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
