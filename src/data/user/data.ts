import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const DARK_MODE = 'darkMode';
const HAS_SEEN_WELCOME = 'hasSeenWelcome';

export const loadUserData = async () => {
  const response: any = await Promise.all([
    Storage.get({ key: DARK_MODE }),
    Storage.get({ key: HAS_SEEN_WELCOME }),
  ]);
  const darkMode = await response[0].value === 'true';
  const hasSeenWelcome = await response[1].value === 'true';

  const data: any = {
    darkMode,
    hasSeenWelcome,
  }

  return data;
}

export const setDarkModeData = async (darkMode: boolean) => {
  await Storage.set({ key: DARK_MODE, value: JSON.stringify(darkMode)});
}

export const setHasSeenWelcomeData = async (hasSeenWelcome: boolean) => {
  await Storage.set({ key: HAS_SEEN_WELCOME, value: JSON.stringify(hasSeenWelcome)});
}
