import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
} from '@ionic/react';
import {
  withRouter,
  RouteComponentProps
} from 'react-router';
import {
  share,
  heart
} from 'ionicons/icons';
import './Tab1Detail.scss';
import { connect } from '../../data/connect';
import * as ROUTES from '../../constants/Routes';
import * as selectors from '../../data/news/news.selectors';
import { NewsCategory } from '../../models/News';

interface OwnProps extends RouteComponentProps {};

interface StateProps {
  news: NewsCategory | undefined;
};

interface DispatchProps {
}

type Tab1DetailProps = OwnProps & StateProps & DispatchProps;

const Tab1Detail: React.FC<Tab1DetailProps> = ({news}) => {
  return (
    <IonPage id="tab1-detail-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={ROUTES.TAB1}></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonImg src={news?.image}></IonImg>
          <IonCardHeader>
            <IonCardSubtitle>{news?.headline}</IonCardSubtitle>
            <IonCardTitle>{news?.category}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{news?.summary}</p>
            <IonItem>
              <IonButton fill="solid">Action</IonButton>
              <IonIcon icon={heart} slot="end"></IonIcon>
              <IonIcon icon={share} slot="end"></IonIcon>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state, OwnProps) => ({
    news: selectors.getNewsById(state, OwnProps),
  }),
  mapDispatchToProps: {
  },
  component: withRouter(Tab1Detail)
});
