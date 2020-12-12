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
  heart,
  heartOutline
} from 'ionicons/icons';
import './Tab1Detail.scss';
import { connect } from '../../data/connect';
import * as ROUTES from '../../constants/Routes';
import * as newsSelectors from '../../data/news/news.selectors';
import * as userSelectors from '../../data/user/user.selectors';
import { NewsCategory } from '../../models/News';
import {
  setAddNews,
  // setRemoveNews
} from '../../data/news/news.actions';
// import { addNewsFirestore } from '../../data/api/Firebase';
import { setFavouriteNews } from '../../data/user/user.actions';

interface OwnProps extends RouteComponentProps {};

interface StateProps {
  news: NewsCategory | undefined,
  isFavouriteNews: boolean | undefined,
};

interface DispatchProps {
  setAddNews: typeof setAddNews;
  // setRemoveNews: typeof setRemoveNews;
  setFavouriteNews: typeof setFavouriteNews;
};

interface Tab1DetailProps extends OwnProps, StateProps, DispatchProps {};

const Tab1Detail: React.FC<Tab1DetailProps> = ({
    news,
    setAddNews: setAddNewsAction,
    // setRemoveNews,
    setFavouriteNews: setFavouriteNewsAction,
    isFavouriteNews,
  }) => {

  const toggleSave = () => {
    if (!isFavouriteNews) {
      setAddNewsAction(news);

      const newsId: any = news?.id;
      setFavouriteNewsAction(newsId);
    } else {
      // TODO: remove favourites
    }
  }

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
            <IonCardTitle
              color="tertiary"
              className="ion-text-capitalize">{news?.category}</IonCardTitle>
            <IonCardSubtitle>{news?.headline}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              {news?.summary} <a target="_blank" rel="noopener noreferrer" href={news?.url}>Read more...</a>
            </p>
            <IonItem lines="none">
              <IonButtons slot="end">
                <IonButton onClick={() => toggleSave()}>
                  {isFavouriteNews ?
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
    news: newsSelectors.getNewsById(state, OwnProps),
    isFavouriteNews: userSelectors.getFavouriteNewsId(state, OwnProps),
  }),
  mapDispatchToProps: {
    setAddNews,
    // setRemoveNews,
    setFavouriteNews,
  },
  component: withRouter(Tab1Detail)
});
