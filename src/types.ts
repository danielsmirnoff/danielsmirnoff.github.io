export interface ProjectLink {
  text: string;
  url: string;
  type: 'primary' | 'outline';
}

export interface ProjectSection {
  title: string;
  paragraphs?: string[];
  images?: Thumbnail[];
  /** A list of bullet points */
  list?: string[];
}

export type CategorySlug = 'personal-projects' | 'game-jams' | 'commercial-games' | 'other';

export interface CategoryInfo {
  slug: CategorySlug;
  title: string;
  description: string;
}

export type Thumbnail = 
  | { type: 'image'; src: string }
  | { type: 'video'; src: string }
  | { type: 'youtube'; videoId: string };

export interface Project {
  slug: string;
  date: string;
  status: string;
  category: CategorySlug;
  title: string;
  tags: string[];
  thumbnail: Thumbnail;
  description: string;
  heroImage: Thumbnail;
  lead: string;
  links: ProjectLink[];
  sections: ProjectSection[];
  gallery: Thumbnail[];
}

export interface Skill {
  icon: 'layers' | 'code' | 'image' | 'pencil';
  title: string;
  items: string[];
}

export interface Education {
  date: string;
  title: string;
  place: string;
  details: string[];
}