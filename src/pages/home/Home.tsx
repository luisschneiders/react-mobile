import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import './Home.scss';
import * as ROUTES from '../../constants/Routes';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div>
                <IonButton routerLink={ROUTES.LOGIN} expand="full" color="light">Login</IonButton>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <span>or</span>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>
                <IonButton routerLink={ROUTES.REGISTER} expand="full" color="medium">Register</IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
