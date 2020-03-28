import * as firebase from 'firebase';
import { toast } from '../components/toast/Toast';
import { Firebase } from '../credentials/Firebase';

firebase.initializeApp(Firebase);

export async function loginUser(email: string, password: string) {
  try {
    const response: any = await firebase.auth().signInWithEmailAndPassword(email, password);
    toast('Login success!', 'success');
    return response;
  } catch(error) {
    toast(error.message, 'danger');
    return error;
  }
}

export async function registerUser(email: string, password: string) {
  try {
    const response: any = await firebase.auth().createUserWithEmailAndPassword(email, password);
    toast('Welcome!', 'success');
    return response;
  } catch(error) {
    toast(error.message, 'danger');
    return error;
  }
}
