export interface SocialMediaType {
  href: string;
  icon: string;
}

export interface CodingProfileType {
  href: string;
  username: string;
  platform: string;
}

export interface MenueListType extends SocialMedia {
  href: string;
  icon: string;
  title: string;
}

export type skillsType = {
  src: string;
  name: string;
};

export type PortfolioType = {
  id: number;
  title: string;
  image: string;
  categories: string[];
  col: number;
  projectUrl: string;
};

type ResumeItem = {
  title: string;
  content: string;
};

type ResumeOrderedDataItem = {
  key: string;
  value: ResumeItem[];
};
