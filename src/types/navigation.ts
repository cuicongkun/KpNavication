export type ChildrenType = {
  siteName: string;
  logo?: string;
  url: string;
  desc?: string;
  version?: string;
};
export type NavigationType=Record<string, ChildrenType[]>;
