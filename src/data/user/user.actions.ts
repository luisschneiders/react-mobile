import { setIsLoggedInData } from '../dataApi';

export const setIsLoggedIn = (loggedIn: boolean) => async (dispatch: React.Dispatch<any>) => {
  await setIsLoggedInData(loggedIn);
  return ({
    type: 'SET_IS_LOGGEDIN',
    loggedIn
  } as const);
}