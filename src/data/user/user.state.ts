export interface UserState {
  darkMode: boolean;
  isLoggedin: boolean;
  loading: boolean;
  displayName?: string | null | undefined;
  photoURL?: string | null | undefined;
  hasSeenWelcome: boolean;
}
