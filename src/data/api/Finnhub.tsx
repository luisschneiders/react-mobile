import { Finnhub } from '../../credentials/Finnhub';
import { toast } from '../../components/toast/Toast';
import { ToastStatus } from '../../enum/ToastStatus';
import { NewsType } from '../../enum/NewsType';
import { List } from '../../components/list/List';
import { News, Category } from '../../models/News';
import { groupBy } from '../../util/groupBy';

// To use this one...
export function generalNews(category: string = NewsType.GENERAL, minId: number = 10) {
  return fetch(`https://finnhub.io/api/v1/news?category=${category}&${minId}&token=${Finnhub.token}`)
    .then(response => response.json())
    .then(
      (result: any[]) => {
        const customList: List[] = [];
        result.forEach((item: any) => {
          const list: List = Object.assign({}, {
            category: item.category,
            id: item.id,
            src: item.image,
            alt: item.headline,
            h2: item.headline,
            p: item.summary,
          })
          customList.push(list);
        });
        // Because the original data is not grouped by 'category',
        // we need to do it here.
        const groups: Category[] = [];
        const customData: any = groupBy(customList, 'category');
        Object.keys(customData).forEach((key: string) => {
          groups.push(customData[key]);
        });

        // Assign the new array group to the News
        const news: News = Object.assign({}, {
          groups
        });
        return news;
      },
      (error) => {
        toast(error.message, ToastStatus.ERROR, 4000);
        return error;
      }
    );
}
