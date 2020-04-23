import React from 'react';
import {
  IonLabel,
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonItemGroup,
  IonItemDivider,
  IonText
} from '@ionic/react';
import { List } from './List';

interface ContainerProps {
  listItem: List;
  index: number;
}

const LsListItemThumbnail: React.FC<ContainerProps> = ({listItem, index}) => {
  return (
    <IonItem key={`group-item-${index}`} routerLink={`/tabs/tab1/${listItem.id}`}>
    <IonThumbnail slot="start">
      <IonImg src={listItem.image} alt={listItem.alt}/>
    </IonThumbnail>
    <IonLabel>
      <h2>{listItem.headline}</h2>
      <p>{listItem.summary}</p>
    </IonLabel>
  </IonItem>  );
};

export default LsListItemThumbnail;
