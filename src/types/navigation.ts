export type ChildrenType = {
  siteName: string;
  url: string;
  desc?: string;
};

export type NavType = {
  id: number;
  navName: string;
  url?: string;
  children?: ChildrenType[];
};
export type NavigationType = NavType[];
