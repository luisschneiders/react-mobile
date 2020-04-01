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
import './Login.scss';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from '../../components/toast/Toast';
import { loginUser } from '../../config/Firebase';
import { ToastStatus } from '../../components/toast/ToastStatus';
import { setIsLoggedIn } from '../../data/user/user.actions';
import { connect } from '../../data/connect';

interface OwnProps extends RouteComponentProps {}
interface DispatchProps {
  setIsLoggedIn: typeof setIsLoggedIn;
}
interface LoginProps extends OwnProps,  DispatchProps { }

const Login: React.FC<LoginProps> = ({setIsLoggedIn, history}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [busy, setBusy] = useState<boolean>(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      return toast('Email and password are required!', ToastStatus.WARNING);
    }

    setBusy(true);
    const response: any = await loginUser(email, password);
    setBusy(false);

    if (response) {
      // Go to dashboard...
      await setIsLoggedIn(true);
      window.location.href = '/page1';
    }
  }

  return (
    <IonPage id="login-page">
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={0} isOpen={busy}></IonLoading>
      <IonContent className="ion-padding">
        <div className="login-logo">
          <img src="assets/img/appicon.svg" alt="Login" />
        </div>
        <form noValidate onSubmit={login}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Email</IonLabel>
              <IonInput name="email" type="email"
                        value={email} spellCheck={false} autocapitalize="off"
                        onIonChange={(e: any) => setEmail(e.detail.value!)}
                        required>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked" color="primary">Password</IonLabel>
              <IonInput name="password" type="password" value={password} onIonChange={(e: any) => setPassword(e.detail.value!)} required>
              </IonInput>
            </IonItem>
          </IonList>
          <IonRow>
            <IonCol>
              <IonButton type="submit" fill="outline" color="dark" expand="block">Login</IonButton>
            </IonCol>
            <IonCol>
              <IonButton routerLink="/register" fill="solid" expand="block">Register</IonButton>
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
  component: Login
});
