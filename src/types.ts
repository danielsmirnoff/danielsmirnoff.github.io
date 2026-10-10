export interface ProjectLink {
  text: string;
  url: string;
  type: 'primary' | 'outline';
}

/** Where a section's images sit relative to its text. */
export type ImageLayout = 'left' | 'right' | 'center';
 
/**
 * One block of an ordered section body. Blocks render in the order you write them,
 * so media can sit between paragraphs.
 * Media layout: 'center' (default) is full-width and breaks the text flow;
 * 'left' / 'right' float beside the text that follows (stacked on mobile).
 */
export type SectionBlock =
  | { type: 'text'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'media'; images: Thumbnail[]; layout?: ImageLayout };
 
export interface ProjectSection {
  title: string;
  /**
   * Ordered body. When set, it replaces paragraphs / list / images / imageLayout
   * for this section. Leave it out to keep using those simpler fields.
   */
  content?: SectionBlock[];
  paragraphs?: string[];
  /** A list of bullet points */
  list?: string[];
  /** Media shown with this section */
  images?: Thumbnail[];
  /**
   * 'left' / 'right': images sit beside the text (stacked above it on mobile).
   * 'center': images sit centered below the text.
   * Defaults to 'center'.
   */
  imageLayout?: ImageLayout;
}



export type CategorySlug = 'personal-projects' | 'game-jams' | 'commercial-games' | 'other';

export interface CategoryInfo {
  slug: CategorySlug;
  title: string;
  description: string;
}

export type Thumbnail = (
  | { type: 'image'; src: string }
  | { type: 'video'; src: string }
  | { type: 'youtube'; videoId: string}) & {
    label?: string;
};

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