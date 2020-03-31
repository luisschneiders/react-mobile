import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const HAS_LOGGED_IN = 'hasLoggedIn';

export const setIsLoggedInData = async (isLoggedIn: boolean) => {
  await Storage.set({ key: HAS_LOGGED_IN, value: JSON.stringify(isLoggedIn)});
}