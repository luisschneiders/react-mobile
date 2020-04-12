export interface News {
  groups: Category[];
}

export interface Category {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related?: string;
  source?: string;
  summary: string;
  url: string;
}