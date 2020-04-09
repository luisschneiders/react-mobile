import * as firebase from 'firebase/app';
import 'firebase/auth';
import { toast } from '../../components/toast/Toast';
import { Firebase } from '../../credentials/Firebase';
import { ToastStatus } from '../../components/toast/ToastStatus';
import { UserProfile } from '../user/UserProfile';

firebase.initializeApp(Firebase);

export async function loginUser(email: string, password: string) {
  try {
    const response: any = await firebase.auth().signInWithEmailAndPassword(email, password);
    toast(`Welcome back ${response?.user?.displayName || ''}!`, ToastStatus.DEFAULT);
    return response;
  } catch(error) {
    toast(error.message, ToastStatus.ERROR, 4000);
    return false;
  }
}

export async function registerUser(email: string, password: string) {
  try {
    const response: any = await firebase.auth().createUserWithEmailAndPassword(email, password);
    toast('Successfully registered!', ToastStatus.DEFAULT);
    return response;
  } catch(error) {
    toast(error.message, ToastStatus.ERROR, 4000);
    return false;
  }
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe: any = firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
}

export async function logoutUser() {
  const response: any = firebase.auth().signOut();
  return response;
}

export async function updateProfile(profile: UserProfile) {
  try {
    firebase.auth().currentUser?.updateProfile(profile);
    return true;

  } catch(error) {
    toast(error.message, ToastStatus.ERROR, 4000);
    return false;
  }
}
