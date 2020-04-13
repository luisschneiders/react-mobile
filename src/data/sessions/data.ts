import { getNews } from "../api/Finnhub";
import { NewsType } from "../../enum/NewsType";
import { News } from "../../models/News";

const newsData = getNews(NewsType.GENERAL, 10);

export const loadSessionData = async () => {
  const response: any = await Promise.all([
    newsData
  ]);

  const news = response[0] as News;
  const data: any = {
    news
  }
  return data;
}
