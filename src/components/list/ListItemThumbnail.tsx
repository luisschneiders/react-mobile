import React, { useRef } from 'react';
import {
  IonLabel,
  IonItem,
  IonThumbnail,
  IonImg,
  IonItemSliding
} from '@ionic/react';
import * as ROUTES from '../../constants/Routes';
import { List } from './List';

interface ContainerProps {
  list: List;
  index: number;
}

const LsListItemThumbnail: React.FC<ContainerProps> = ({list, index}) => {
  const ionItemSlidingRef = useRef<HTMLIonItemSlidingElement>(null);

  return (
    <IonItemSliding ref={ionItemSlidingRef}>
      <IonItem key={`group-item-${index}`} routerLink={`${ROUTES.TAB1}/${list.id}`}>
      <IonThumbnail slot="start">
        <IonImg src={list.image} alt={list.alt}/>
      </IonThumbnail>
      <IonLabel>
        <h2>{list.headline}</h2>
        <p>{list.summary}</p>
      </IonLabel>
    </IonItem>
  </IonItemSliding>
  );
};

export default React.memo(LsListItemThumbnail);
