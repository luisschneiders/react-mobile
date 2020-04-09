import React, { useEffect, useState } from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonSpinner
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import './theme/variables.scss';

import { 
  getCurrentUser,
  logoutUser
} from './data/api/Firebase';
import { connect } from './data/connect';
import { AppContextProvider } from './app/AppContext';
import {
  setIsLoggedIn,
  setDisplayName,
  setPhotoURL,
  getUserPreference
} from './data/user/user.actions';

import MainTabs from './components/tabs/MainTabs';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import Menu from './components/menu/Menu';
import { toast } from './components/toast/Toast';
import { ToastStatus } from './enum/ToastStatus';
import Account from './pages/account/Account';
import { getAvatar } from './util/getAvatar';
import * as ROUTES  from './constants/Routes';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicAppConnected />
    </AppContextProvider>
  );
};

interface StateProps {
  darkMode: boolean;
}

interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setDisplayName: typeof setDisplayName;
  setPhotoURL: typeof setPhotoURL;
  getUserPreference: typeof getUserPreference;
}

interface IonicAppProps extends StateProps, DispatchProps { }

const IonicApp: React.FC<IonicAppProps> = ({
    darkMode,
    setIsLoggedIn,
    setDisplayName,
    setPhotoURL,
    getUserPreference
  }) => {

  const [busy, setBusy] = useState(true);

  useEffect(() => {
    getCurrentUser().then((user: any) => {
      if (user) {
        setIsLoggedIn(true);
        setDisplayName(user.displayName);
        setPhotoURL(user.photoURL ? user.photoURL : getAvatar(user.email));
        // window.history.replaceState({}, '', ROUTES.TAB1);
      } else {
        setIsLoggedIn(false);
        window.history.replaceState({}, '', '/');
      }
      setBusy(false);
      getUserPreference();
    });
  }, [
      setIsLoggedIn,
      setDisplayName,
      setPhotoURL,
      getUserPreference
    ]);

  return (
    <IonApp className={`${darkMode ? 'dark-theme' : ''}`}>
      { busy ? <div className="container-spinner"><IonSpinner></IonSpinner></div> :
              <IonReactRouter>
                <IonSplitPane contentId="main">
                  <Menu />
                  <IonRouterOutlet id="main">
                    <Route path='/' render={() => <Redirect to={ROUTES.LOGIN} />} exact={true} />
                    <Route path={ROUTES.TABS} component={MainTabs} />
                    <Route path={ROUTES.ACCOUNT} component={Account} exact={true} />
                    <Route path={ROUTES.HOME} component={Home} exact={true} />
                    <Route path={ROUTES.LOGIN} component={Login} exact={true} />
                    <Route path={ROUTES.REGISTER} component={Register} exact={true} />
                    <Route path={ROUTES.LOGOUT} render={() => {
                      logoutUser().then(() => {
                        toast('Successfully logged out!', ToastStatus.DEFAULT);
                        setIsLoggedIn(false);
                      }, (error) => {
                        toast(error.message, ToastStatus.ERROR, 4000);
                      });
                      return <Redirect to={ROUTES.LOGIN} />
                    }} />
                  </IonRouterOutlet>
                </IonSplitPane>
              </IonReactRouter>
      }
    </IonApp>
  )
}

export default App;

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
  }),
  mapDispatchToProps: { 
    getUserPreference,
    setIsLoggedIn,
    setDisplayName,
    setPhotoURL,
  },
  component: IonicApp
});
