import { NewsActions } from './news.actions';
import { NewsState } from './news.state';

export const newsReducer = (state: NewsState, action: NewsActions): NewsState => {
  switch (action.type) {
    case 'SET_NEWS': {
      return { ...state, news: action.news };
    }
    case 'SET_NEWS_DATA': {
      return { ...state, ...action.data };
    }
  }
}