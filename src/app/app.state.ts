import { combineReducers } from '../data/combineReducers';
import { sessionsReducer } from '../data/sessions/sessions.reducer';
import { userReducer } from '../data/user/user.reducer';

export const initialState: AppState = {
  data: {
    loading: false,
    menuEnabled: true
  },
  user: {
    darkMode: false,
    isLoggedin: false,
    loading: false
  }
};

export const reducers = combineReducers({
  data: sessionsReducer,
  user: userReducer
});


export type AppState = ReturnType<typeof reducers>;