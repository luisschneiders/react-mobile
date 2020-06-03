import {
  getNews,
  // getNewsLocal
} from '../api/Finnhub';
import { NewsType } from '../../enum/NewsType';
import { News, NewsCategory } from '../../models/News';
import { addNewsFirestore} from '../api/Firebase';

const newsData = getNews(NewsType.GENERAL, 10);

export const loadNewsData = async () => {
  const response: any = await Promise.all([
    newsData
  ]);

  const news = response[0] as News;
  const data: any = {
    news
  }
  return data;
};

export const setAddNewsData = async (news: NewsCategory | undefined) => {
  return addNewsFirestore(news);
};
