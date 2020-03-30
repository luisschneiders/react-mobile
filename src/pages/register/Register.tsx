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
import { toast } from '../../components/toast/Toast';
import { registerUser } from '../../config/Firebase';
import { ToastStatus } from '../../components/toast/ToastStatus';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  async function register() {
    if (password !== confirmPassword) {
      return toast(`Passwords should match!`, ToastStatus.WARNING);
    }

    if (email.trim() === '' || password.trim() === '') {
      return toast(`Email and password are required!`, ToastStatus.WARNING);
    }

    const response: any = await registerUser(email, password);
    if (response) {
      // Go to dashboard...
    } else {
      
    }
  }

  return (
    <IonPage>
      <IonHeader class="ion-padding-horizontal ion-text-center">
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding-horizontal">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonInput type="email" placeholder="Email"
                    onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>

          <IonInput type="password" placeholder="Password"
                    onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>

          <IonInput type="password" placeholder="Confirm Password"
                    onIonChange={(e: any) => setConfirmPassword(e.target.value)}></IonInput>
          <IonButton color="medium" expand="full" onClick={register} >Register</IonButton>
          <span>Already have an account? <Link to="/login">Login</Link></span>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Register;
