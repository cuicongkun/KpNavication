export type ChildrenType = {
  siteName: string;
  logo?: string;
  url: string;
  desc?: string;
  version?: string;
};

export type NavType = {
  id: number;
  navName: string;
  url?: string;
  children?: ChildrenType[];
};
export type NavigationType = NavType[];
