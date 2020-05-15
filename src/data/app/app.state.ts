import { combineReducers } from '../combineReducers';
import { sessionsReducer } from '../sessions/sessions.reducer';
import { userReducer } from '../user/user.reducer';
import { newsReducer } from '../news/news.reducer';

export const initialState: AppState = {
  // An example of reducer
  // exampleReducer: {
  //   example: null
  // }
  sessionsReducer: {
    loading: false,
    menuEnabled: true,
  },
  userReducer: {
    darkMode: false,
    hasSeenWelcome: false,
    isLoggedin: false,
    loading: false,
    favouriteNewsId: null,
  },
  newsReducer: {
    news: null,
    newsCategory: null,
  }
};

export const reducers = combineReducers({
  // exampleReducer: exampleReducer,
  sessionsReducer,
  userReducer,
  newsReducer,
});


export type AppState = ReturnType<typeof reducers>;