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

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function loginUser() {
    
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
          <IonInput placeholder='Username'
                    onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
          <IonInput placeholder='Password'
                    onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
          <IonButton color='light' expand='full'onClick={loginUser} >Login</IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;
