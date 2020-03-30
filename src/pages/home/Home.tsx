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
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-padding-horizontal ion-text-center">
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding-horizontal ion-text-center">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div>
                <IonButton routerLink="/login" expand="full" color="light">Login</IonButton>
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
                <IonButton routerLink="/register" expand="full" color="medium">Register</IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
