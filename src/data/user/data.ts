import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const DARK_MODE = 'darkMode';

export const loadUserData = async () => {
  const response: any = await Promise.all([
    Storage.get({ key: DARK_MODE }),
  ]);
  const darkMode = await response[0].value === 'true';
  const data: any = {
    darkMode
  }
  return data;
}

export const setDarkModeData = async (darkMode: boolean) => {
  await Storage.set({ key: DARK_MODE, value: JSON.stringify(darkMode)});
}
