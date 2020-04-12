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
import { generalNews } from '../../data/api/Finnhub';
import { NewsType } from '../../enum/NewsType';
import GroupList from '../../components/list/GroupList';

const Tab1: React.FC = () => {
  const [isError, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<any>();
  const noNews: string = 'assets/img/no-news.jpg';

  // TODO: add state, actions and reducer

  useEffect(() => {
    setIsLoaded(true);

    generalNews(NewsType.GENERAL, 5).then((response: any) => {
      if (Object.keys(response).length > 0) {
          setItems(response);
          setIsLoaded(false);
      }
      else {
        setIsLoaded(false);
        setError(true);
      }
    });

  }, []);

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
        {items && <GroupList data={items}></GroupList>}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
