import { ActionType } from '../../util/types';
import { News, NewsCategory } from '../../models/News';
import { loadNewsData, setAddNewsData } from './data';
import { NewsState } from './news.state';

export const getNewsData = () => async (dispatch: React.Dispatch<any>) => {
  const data = await loadNewsData();
  dispatch(setNewsData(data));
}

export const setNewsData = (data: Partial<NewsState>) => ({
  type: 'SET_NEWS_DATA',
  data
} as const);

export const setAddNews = (news: NewsCategory | undefined) => async (dispatch: React.Dispatch<any>) => {
  await setAddNewsData(news);
  return ({
    type: 'SET_NEWS_ADD',
    news
  } as const);
};

export const setRemoveNews = (news: NewsCategory | undefined) => async (dispatch: React.Dispatch<any>) => {
  return ({
    type: 'SET_NEWS_REMOVE',
    news
  } as const);
};

export type NewsActions =
  | ActionType<typeof setNewsData>
  | ActionType<typeof setAddNews>
  | ActionType<typeof setRemoveNews>
