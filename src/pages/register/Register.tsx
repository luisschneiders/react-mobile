import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLoading,
  IonList,
  IonItem,
  IonLabel,
  IonRow,
  IonCol
} from '@ionic/react';
import {
  Link,
  RouteComponentProps
} from 'react-router-dom';
import { toast } from '../../components/toast/Toast';
import { registerUser } from '../../config/Firebase';
import { ToastStatus } from '../../components/toast/ToastStatus';
import { setIsLoggedIn } from '../../data/user/user.actions';
import { connect } from '../../data/connect';

interface OwnProps extends RouteComponentProps {}
interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
}
interface RegisterProps extends OwnProps,  DispatchProps { }

const Register: React.FC<RegisterProps> = ({setIsLoggedIn, history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [busy , setBusy] = useState(false);
  
  const register = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast('Passwords should match!', ToastStatus.WARNING);
    }

    if (email.trim() === '' || password.trim() === '') {
      return toast('Email and password are required!', ToastStatus.WARNING);
    }

    setBusy(true);
    const response: any = await registerUser(email, password);
    setBusy(false);

    if (response) {
      // Go to dashboard...
      await setIsLoggedIn(true);
      history.push('/tabs/tab1', {direction: 'none'});
    }
  }

  return (
    <IonPage id="register-page">
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={0} isOpen={busy}></IonLoading>
      <IonContent className="ion-padding">
        <div className="login-logo">
          <img src="assets/img/appicon.svg" alt="Login" />
        </div>
        <form noValidate onSubmit={register}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Email</IonLabel>
              <IonInput name="email" type="email"
                        value={email} spellCheck={false} autocapitalize="off"
                        onIonChange={(e: any) => setEmail(e.target.value!)}
                        required>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked" color="primary">Password</IonLabel>
              <IonInput name="password" type="password"
                        value={password}
                        onIonChange={(e: any) => setPassword(e.target.value!)} required>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked" color="primary">Confirm Password</IonLabel>
              <IonInput name="password" type="password"
                        value={confirmPassword}
                        onIonChange={(e: any) => setConfirmPassword(e.target.value!)} required>
              </IonInput>
            </IonItem>
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" fill="outline" expand="block">Register</IonButton>
            </IonCol>
            <IonCol>
              <div className="account-link">Already have an account? <Link to="/login">Login</Link></div>
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setIsLoggedIn
  },
  component: Register
});
