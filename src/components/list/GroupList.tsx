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

interface ContainerProps {
  data: any;
}

const GroupList: React.FC<ContainerProps> = ({data}) => {
  return (
    <>
      <IonList>
        {data.groups.map((group: any, index: number) => (
          <IonItemGroup key={`group-${index}`}>
            <IonItemDivider sticky>
              <IonLabel>
                <IonText color="primary">
                  <h3 className="ion-text-uppercase">{group[0].category}</h3>
                </IonText>
              </IonLabel>
            </IonItemDivider>
            {group.map((item: any, index: number) => (
              <IonItem key={`group-item-${index}`}>
                <IonThumbnail slot="start">
                  <IonImg src={item.image} alt={item.alt}/>
                </IonThumbnail>
                <IonLabel>
                  <h2>{item.headline}</h2>
                  <p>{item.summary}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonItemGroup>
        ))}
      </IonList>
    </>
  );
};

export default GroupList;
