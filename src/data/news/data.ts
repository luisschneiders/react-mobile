import { getNews, getNewsLocal } from '../api/Finnhub';
import { NewsType } from '../../enum/NewsType';
import { News } from '../../models/News';

const newsData = getNewsLocal(NewsType.GENERAL, 10);

export const loadNewsData = async () => {
  const response: any = await Promise.all([
    newsData
  ]);

  const news = response[0] as News;
  const data: any = {
    news
  }
  return data;
}