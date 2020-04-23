import { createSelector } from 'reselect';
import { AppState } from '../app/app.state';
import { NewsCategory, News } from '../../models/News';
import { List } from '../../components/list/List';

const getData = (state: AppState) => state.newsReducer.news;

const getIdParam = (_state: AppState, props: any) => {
  return props.match.params['id'];
};

export const getNews = createSelector(
  getData,
  (news: News) => {
    return news;
  }
);

export const getNewsByGroup = createSelector(
  getData,
  (news: News) => {

  }
)

export const getNewsById = createSelector(
  getData, getIdParam,
  (news: any, id: number) => {
    return news.groups.find((n: any) => n.id === id);
  }
);
