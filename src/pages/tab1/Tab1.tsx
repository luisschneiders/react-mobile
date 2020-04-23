import React, { useEffect, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonList,
  IonLoading,
  IonItem,
  IonLabel,
  IonImg,
  IonThumbnail,
} from '@ionic/react';
import './Tab1.scss';
import LsGroupList from '../../components/list/GroupList';
import { connect } from '../../data/connect';
import { News } from '../../models/News';

interface StateProps {
  news: News,
}
interface Tab1Props extends StateProps {}

const Tab1: React.FC<Tab1Props> = ({ news }) => {
  const [isError, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<any>();
  const noNews: string = 'assets/img/no-news.jpg';

  useEffect(() => {
    setIsLoaded(true);
    if (news && Object.keys(news).length > 0) {
      setError(false);
      setTimeout(() => {
        setIsLoaded(false);
      }, 1000);
      setItems(news);
    } else {
      setError(true);
      setIsLoaded(false);
    }
  }, [news]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Fetching news..." duration={0} isOpen={isLoaded}></IonLoading>
      <IonContent>
        {isError && <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <IonImg src={noNews} alt='no news' />
            </IonThumbnail>
            <IonLabel>
              <h2>No news found!</h2>
            </IonLabel>
          </IonItem>
        </IonList>}
        {items && <LsGroupList data={items}></LsGroupList>}
      </IonContent>
    </IonPage>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    news: state.data.news,
  }),
  component: Tab1
});
