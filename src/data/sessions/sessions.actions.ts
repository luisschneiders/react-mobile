import { ActionType } from '../../util/types';
import { loadSessionData } from './data';
import { SessionsState } from './sessions.state';


export const getSessionData = () => async (dispatch: React.Dispatch<any>) => {
  const data = await loadSessionData();
  dispatch(setSessionData(data));
}

export const setSessionData = (data: Partial<SessionsState>) => ({
  type: 'SET_SESSION_DATA',
  data
} as const);

export const setMenuEnabled = (menuEnabled: boolean) => ({
  type: 'SET_MENU_ENABLED',
  menuEnabled
} as const);

export type SessionsActions =
  | ActionType<typeof setMenuEnabled>
  | ActionType<typeof setSessionData>
