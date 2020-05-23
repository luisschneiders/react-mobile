import React, { useState, useRef } from 'react';
import {
  useIonViewWillEnter,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonContent,
  IonSlides,
  IonSlide,
  IonIcon
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import './Welcome.scss';
import { setMenuEnabled } from '../../data/sessions/sessions.actions';
import { connect } from '../../data/connect';
import { arrowForward } from 'ionicons/icons';
import * as ROUTES from '../../constants/Routes';
import { setHasSeenWelcome } from '../../data/user/user.actions';

interface OwnProps extends RouteComponentProps {};

interface DispatchProps {
  setHasSeenWelcome: typeof setHasSeenWelcome;
  setMenuEnabled: typeof setMenuEnabled;
}

interface WelcomeProps extends OwnProps, DispatchProps {};

const Welcome: React.FC<WelcomeProps> = ({ history, setHasSeenWelcome, setMenuEnabled }) => {
  const [showSkip, setShowSkip] = useState(true);
  const slideRef = useRef<HTMLIonSlidesElement>(null);

  useIonViewWillEnter(() => {
    setMenuEnabled(true);
  });

  const startApp = async () => { 
    await setHasSeenWelcome(true);
    await setMenuEnabled(true);
    history.push(ROUTES.REGISTER, { direction: 'none' });
  };

  const handleSlideChangeStart = () => { 
    slideRef.current!.isEnd().then(isEnd => setShowSkip(!isEnd));
  };

  return (
    <IonPage id="welcome-page">
      <IonHeader no-border>
      <IonToolbar>
        <IonButtons slot="end">
          {showSkip && <IonButton color='primary' onClick={startApp}>Skip</IonButton>}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
      <IonContent fullscreen>
        <IonSlides ref={slideRef} onIonSlideWillChange={handleSlideChangeStart} pager={true}>
          <IonSlide>
            <img src="assets/img/slide1.svg" alt="Slide1" className="slide-image" />
            <h2 className="slide-title">
              What is Lorem Ipsum?
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </IonSlide>

          <IonSlide>
            <img src="assets/img/slide2.svg" alt="Slide2" className="slide-image" />
            <h2 className="slide-title">Where does it come from?</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </IonSlide>

          <IonSlide>
            <img src="assets/img/slide3.svg" alt="Slide3" className="slide-image" />
            <h2 className="slide-title">Why do we use it?</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </IonSlide>

          <IonSlide>
            <img src="assets/img/slide4.svg" alt="Slide4" className="slide-image" />
            <h2 className="slide-title">Let's signup first!</h2>
            <IonButton fill="clear" onClick={startApp}>
              Continue
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  )
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: ({
    setHasSeenWelcome,
    setMenuEnabled
  }),
  component: Welcome
});
