import { setIsLoggedInData } from '../dataApi';
import { ActionType } from '../../util/types';

export const logoutUser = () => async (dispatch: React.Dispatch<any>) => {
  await setIsLoggedInData(false);
};

export const setIsLoggedIn = (loggedIn: boolean) => async (dispatch: React.Dispatch<any>) => {
  // await setIsLoggedInData(loggedIn);
  return ({
    type: 'SET_IS_LOGGEDIN',
    loggedIn
  } as const);
}

export const setDarkMode = (darkMode: boolean) => async (dispatch: React.Dispatch<any>) => {
  // await setDarkModeData(darkMode)
  return ({
   type: 'SET_DARK_MODE',
   darkMode
 } as const);
};

export const setDisplayName = (displayName?: string) => async (dispatch: React.Dispatch<any>) => {
  return ({
    type: 'SET_DISPLAY_NAME',
    displayName
  } as const);
};

export type UserActions =
  | ActionType<typeof setIsLoggedIn>
  | ActionType<typeof setDarkMode>
  | ActionType<typeof setDisplayName>;
