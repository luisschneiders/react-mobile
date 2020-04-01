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

import { getCurrentUser, logoutUser } from './config/Firebase';
import { connect } from './data/connect';
import { AppContextProvider } from './app/AppContext';
import { setIsLoggedIn } from './data/user/user.actions';

import MainTabs from './components/tabs/MainTabs';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import Menu from './components/menu/Menu';
import { toast } from './components/toast/Toast';
import { ToastStatus } from './components/toast/ToastStatus';

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
}

interface IonicAppProps extends StateProps, DispatchProps { }

const IonicApp: React.FC<IonicAppProps> = ({ darkMode, setIsLoggedIn }) => {
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    getCurrentUser().then((user: any) => {
      if (user) {
        setIsLoggedIn(true);
        window.history.replaceState({}, '', '/tabs/tab1');
      } else {
        setIsLoggedIn(false);
        window.history.replaceState({}, '', '/');
      }
      setBusy(false);
    });
  }, [setIsLoggedIn]);

  return (
    <IonApp className={`${darkMode ? 'dark-theme' : ''}`}>
      { busy ? <div className="container-spinner"><IonSpinner></IonSpinner></div> :
              <IonReactRouter>
                <IonSplitPane contentId="main">
                  <Menu />
                  <IonRouterOutlet id="main">
                    <Route path='/' render={() => <Redirect to='/login' />} exact={true} />
                    <Route path="/tabs" component={MainTabs} />
                    <Route path='/home' component={Home} exact={true} />
                    <Route path='/login' component={Login} exact={true} />
                    <Route path='/register' component={Register} exact={true} />
                    <Route path="/logout" render={() => {
                      logoutUser().then(() => {
                        toast('Successfully logged out!', ToastStatus.DEFAULT);
                        setIsLoggedIn(false);
                      }, (error) => {
                        toast(error.message, ToastStatus.ERROR, 4000);
                      });
                      return <Redirect to="/login" />
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
  mapDispatchToProps: { setIsLoggedIn },
  component: IonicApp
});
