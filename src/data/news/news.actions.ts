import { ActionType } from '../../util/types';
import { News } from '../../models/News';
import { loadNewsData } from './data';
import { NewsState } from './news.state';

export const getNewsData = () => async (dispatch: React.Dispatch<any>) => {
  const data = await loadNewsData();
  dispatch(setNewsData(data));
}

export const setNewsData = (data: Partial<NewsState>) => ({
  type: 'SET_NEWS_DATA',
  data
} as const);

export const setNews = (news: News) => ({
  type: 'SET_NEWS',
  news
} as const);

export type NewsActions =
  | ActionType<typeof setNewsData>
  | ActionType<typeof setNews>
