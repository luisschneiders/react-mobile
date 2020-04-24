import React, { useEffect } from 'react';
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
  heart,
  heartOutline
} from 'ionicons/icons';
import './Tab1Detail.scss';
import { connect } from '../../data/connect';
import * as ROUTES from '../../constants/Routes';
import * as selectors from '../../data/news/news.selectors';
import { NewsCategory } from '../../models/News';
import { setAddNews, setRemoveNews } from '../../data/news/news.actions';

interface OwnProps extends RouteComponentProps {};

interface StateProps {
  news: NewsCategory | undefined;
};

interface DispatchProps {
  setAddNews: typeof setAddNews;
  setRemoveNews: typeof setRemoveNews;
}

type Tab1DetailProps = OwnProps & StateProps & DispatchProps;

const Tab1Detail: React.FC<Tab1DetailProps> = ({
    news,
    setAddNews,
    setRemoveNews,
  }) => {
  const isSaved: boolean = false;

  const toggleFavorite = () => {
    isSaved ? setRemoveNews(news) : setAddNews(news);
  }

  useEffect(() => {
  }, []);

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
            <IonCardTitle color="secondary">{news?.category}</IonCardTitle>
            <IonCardSubtitle>{news?.headline}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{news?.summary}</p>
            <IonItem lines="none">
              <IonButtons slot="end">
                <IonButton onClick={() => toggleFavorite()}>
                  {isSaved ?
                    <IonIcon slot="icon-only" icon={heart} color="danger"></IonIcon> :
                    <IonIcon slot="icon-only" icon={heartOutline}></IonIcon>
                  }
                </IonButton>
              </IonButtons>
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
    setAddNews,
    setRemoveNews
  },
  component: withRouter(Tab1Detail)
});
