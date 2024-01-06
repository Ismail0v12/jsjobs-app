export type RootStackParamList = {
  Home: undefined;
  Search: {q: string};
  JobDetails: {id: string};
  Login: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
