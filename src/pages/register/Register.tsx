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
import './Register.css';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  function registerUser() {
    
  }

  return (
    <IonPage>
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInput type="email" placeholder="Username"
                    onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>

          <IonInput type="password" placeholder="Password"
                    onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>

          <IonInput type="password" placeholder="Confirm Password"
                    onIonChange={(e: any) => setConfirmPassword(e.target.value)}></IonInput>
          <IonButton color="medium" expand="full" onClick={registerUser} >Register</IonButton>
          <span>Already have an account? <Link to="/login">Login</Link></span>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Register;
