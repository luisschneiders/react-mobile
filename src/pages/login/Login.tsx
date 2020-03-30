import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonSpinner,
  IonLoading
} from '@ionic/react';
import './Login.css';
import { Link } from 'react-router-dom';
import { toast } from '../../components/toast/Toast';
import { loginUser } from '../../config/Firebase';
import { ToastStatus } from '../../components/toast/ToastStatus';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy , setBusy] = useState(false);

  async function login() {
    if (email.trim() === '' || password.trim() === '') {
      return toast(`Email and password are required!`, ToastStatus.DEFAULT);
    }
    setBusy(true);

    const response: any = await loginUser(email, password);

    setBusy(false);
    if (response) {
      // Go to dashboard...
    } else {
      
    }

  }

  return (
    <IonPage>
      <IonHeader class="ion-padding-horizontal ion-text-center">
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={0} isOpen={busy}></IonLoading>
      <IonContent class="ion-padding-horizontal">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInput placeholder="Email" type="email"
                    onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
          <IonInput placeholder="Password" type="password"
                    onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
          <IonButton color="light" expand="full" onClick={login} >Login</IonButton>
          <span>Don't have an account yet? <Link to="/register">Register here</Link></span>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;
