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
  IonLoading,
  IonAvatar
} from '@ionic/react';
import './Account.scss';
import { updateProfile } from '../../config/Firebase';
import { toast } from '../../components/toast/Toast';
import { ToastStatus } from '../../components/toast/ToastStatus';
import { delay } from '../../util/delay';
import { RouteComponentProps } from 'react-router';
import { setDisplayName, setPhotoURL } from '../../data/user/user.actions';
import { connect } from '../../data/connect';

interface OwnProps extends RouteComponentProps {}
interface StateProps {
  displayName?: string | null | undefined,
  photoURL?: string | null | undefined
}
interface DispatchProps {
  setDisplayName: typeof setDisplayName;
  setPhotoURL: typeof setPhotoURL;
}

interface AccountProps extends OwnProps, StateProps, DispatchProps {}

const Account: React.FC<AccountProps> = ({
    setDisplayName,
    displayName,
    setPhotoURL,
    photoURL
  }) => {

  let [username, setUsername] = useState<string | null | undefined>();
  let [photo, setPhoto] = useState<string | null | undefined>();

  const [busy , setBusy] = useState(false);
  const account = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    if (!username) {
      username = displayName;
    }

    if (!photo) {
      photo = photoURL;
    }
    const response: any = await updateProfile({ displayName :username, photoURL: photo });
    await delay(500);
    setBusy(false);
    if (response) {
      setDisplayName(username);
      setPhotoURL(photo);
      toast('Successfully updated!', ToastStatus.DEFAULT);
    }
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
          <div className="account account__avatar">
            <IonAvatar>
              {photoURL ? <img src={photoURL} alt="Account" /> : <img src="/assets/img/avatar.svg" alt="Profile" />}
            </IonAvatar>
            <h2>{username ? username : displayName}</h2>
          </div>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Username</IonLabel>
              <IonInput name="username" type="text"
                        value={username} spellCheck={false} autocapitalize="off"
                        onIonChange={(e: any) => setUsername(e.detail.value!)}
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

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    displayName: state.user.displayName,
    photoURL: state.user.photoURL,
  }),
  mapDispatchToProps: {
    setDisplayName,
    setPhotoURL,
  },
  component: Account
});
