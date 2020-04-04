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
import { updateUser } from '../../config/Firebase';
import { toast } from '../../components/toast/Toast';
import { ToastStatus } from '../../components/toast/ToastStatus';
import { delay } from '../../util/delay';
import { RouteComponentProps } from 'react-router';
import { setDisplayName } from '../../data/user/user.actions';
import { connect } from '../../data/connect';


interface OwnProps extends RouteComponentProps {}
interface StateProps {
  displayName?: string
}
interface DispatchProps {
  setDisplayName: typeof setDisplayName
}

interface AccountProps extends OwnProps, StateProps, DispatchProps {}

const Account: React.FC<AccountProps> = ({ setDisplayName, displayName }) => {
  const [username, setUsername] = useState();
  const [busy , setBusy] = useState(false);
  const account = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const response: any = await updateUser(username);
    await delay(500);
    setBusy(false);
    if (response) {
      setDisplayName(username);
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
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
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

// export default Account;

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    displayName: state.user.displayName
  }),
  mapDispatchToProps: {
    setDisplayName
  },
  component: Account
})
