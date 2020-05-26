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
} from '@ionic/react';
import './Tab1.scss';
import LsGroupList from '../../components/list/GroupList';
import { connect } from '../../data/connect';
import { News } from '../../models/News';
import * as selectors from '../../data/news/news.selectors';

interface StateProps {
  news: News | null,
}
interface Tab1Props extends StateProps {}

const Tab1: React.FC<Tab1Props> = ({ news }) => {
  const [isError, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<any>();

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
            <IonMenuButton auto-hide="false"></IonMenuButton>
          </IonButtons>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Fetching news..." duration={0} isOpen={isLoaded}></IonLoading>
      <IonContent>
        {isError && <IonList>
          <p className="ion-text-center">No news found! <span role="img" aria-label="sad-face">😢</span></p>
        </IonList>}
        {items && <LsGroupList data={items}></LsGroupList>}
      </IonContent>
    </IonPage>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: (state) => ({
    news: selectors.getNewsByGroup(state)
  }),
  component: React.memo(Tab1)
});
