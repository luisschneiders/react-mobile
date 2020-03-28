import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton
} from '@ionic/react';
import './Login.css';
import { Link } from 'react-router-dom';
import { toast } from '../../components/toast/Toast';
import { loginUser } from '../../config/Firebase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    const response: any = await loginUser(email, password);

    if (response) {
      // Go to dashboard...
    } else {
      
    }
  }

  return (
    <IonPage>
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
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
