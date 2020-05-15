import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const DARK_MODE = 'darkMode';
const HAS_SEEN_WELCOME = 'hasSeenWelcome';
const FAVOURITE_NEWS = 'favouriteNews';

export const loadUserData = async () => {
  const response: any = await Promise.all([
    Storage.get({ key: DARK_MODE }),
    Storage.get({ key: HAS_SEEN_WELCOME }),
    Storage.get({ key: FAVOURITE_NEWS }),
  ]);
  const darkMode = await response[0].value === 'true';
  const hasSeenWelcome = await response[1].value === 'true';
  const favouriteNews = await response[2].value;

  const data: any = {
    darkMode,
    hasSeenWelcome,
    favouriteNews,
  }

  return data;
}

export const setDarkModeData = async (darkMode: boolean) => {
  await Storage.set({ key: DARK_MODE, value: JSON.stringify(darkMode)});
}

export const setHasSeenWelcomeData = async (hasSeenWelcome: boolean) => {
  await Storage.set({ key: HAS_SEEN_WELCOME, value: JSON.stringify(hasSeenWelcome)});
}

export const setFavouriteNewsData = async (favouriteNewsId: number[] | null | undefined) => {
  const data = await loadUserData();
  let news: any[] = [];

  if (data.favouriteNews) {
    news = JSON.parse(data.favouriteNews);
    // only add new ids in the array
    if (!news.find((n: any) => n === favouriteNewsId)) {
      news.push(favouriteNewsId);
    }
  } else {
    news.push(favouriteNewsId);
  }

  await Storage.set({ key: FAVOURITE_NEWS, value: JSON.stringify(news) });
}
