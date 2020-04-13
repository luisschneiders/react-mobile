import { combineReducers } from '../combineReducers';
import { sessionsReducer } from '../sessions/sessions.reducer';
import { userReducer } from '../user/user.reducer';

export const initialState: AppState = {
  data: {
    loading: false,
    menuEnabled: true,
    news: null,
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