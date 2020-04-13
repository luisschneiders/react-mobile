import { ActionType } from '../../util/types';
import { News } from '../../models/News';

export const setNews = (news: News) => ({
  type: 'SET_NEWS',
  news
} as const);

export type NewsActions =
  | ActionType<typeof setNews>
