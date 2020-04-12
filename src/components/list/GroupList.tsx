import React from 'react';
import {
  IonLabel,
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonItemGroup,
  IonItemDivider
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
                <h2>{group[0].category}</h2>
              </IonLabel>
            </IonItemDivider>
            {group.map((item: any, index: number) => (
              <IonItem key={`group-item-${index}`}>
                <IonThumbnail slot="start">
                  <IonImg src={item.src} alt={item.alt}/>
                </IonThumbnail>
                <IonLabel>
                  <h2>{item.h2}</h2>
                  <p>{item.p}</p>
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
