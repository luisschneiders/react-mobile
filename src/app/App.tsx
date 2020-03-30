import React, { useEffect, useState } from 'react';
import {
  IonApp,
  IonSpinner
} from '@ionic/react';

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
import '../theme/variables.css';
import { getCurrentUser } from '../config/Firebase';
import AppRouting from './AppRouting';

const App: React.FC = () => {
  const [busy, setBusy] = useState(true);
  const [userIsAuth, setUserIsAuth] = useState(false);

  useEffect(() => {
    getCurrentUser().then((user) => {
      if (user) {
        setUserIsAuth(true);
        window.history.replaceState({}, '', '/page1');
      } else {
        setUserIsAuth(false);
        window.history.replaceState({}, '', '/');
      }
      setBusy(false);
    });

  }, []);

  return (
    <IonApp>
      {busy ? <IonSpinner></IonSpinner> : <AppRouting isAuthenticated={userIsAuth}></AppRouting>}
    </IonApp>
  );
};

export default App;
