import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonLoading
} from '@ionic/react';
import './Account.scss';
import { updateUser } from '../../config/Firebase';

const Account: React.FC = () => {
  const [displayName, setDisplayName] = useState<any>();
  const [busy , setBusy] = useState(false);
  const account = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const response: any = await updateUser(displayName);
    setBusy(false);
  }

  return (
    <IonPage id="account-page">
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Updating..." duration={0} isOpen={busy}></IonLoading>
      <IonContent className="ion-padding">
      <form noValidate onSubmit={account}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Username</IonLabel>
              <IonInput name="displayName" type="text"
                        value={displayName} spellCheck={false} autocapitalize="off"
                        onIonChange={(e: any) => setDisplayName(e.detail.value!)}
                        required>
              </IonInput>
            </IonItem>
          </IonList>
          <IonRow>
            <IonCol>
              <IonButton type="submit" fill="solid" color="" expand="block">Update</IonButton>
            </IonCol>
          </IonRow>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Account;
